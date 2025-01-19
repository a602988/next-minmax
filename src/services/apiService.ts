import { RequestInit } from 'next/dist/server/web/spec-extension/request';

interface ApiResponse<T> {
    data: T;
    code: string;
    message: string;
}

interface ErrorHandlingOptions {
    onError?(error: Error): void;
}

export interface FetchApiOptions extends Omit<RequestInit, 'next'>, ErrorHandlingOptions {
    revalidate?: number | false;
    tags?: Array<string>;
    timeout?: number;
}

function defaultErrorHandler(error: Error): void {
    console.error("apiService Failed:", error);
}

async function fetchApi<T>(endpoint: string, options: FetchApiOptions = {}): Promise<T> {
    const apiUrl = process.env.NEXT_SERVER_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined");
    }
    const {
        onError = defaultErrorHandler,
        revalidate = 3600,
        tags = ['api-data'],
        timeout = 5000,
        ...fetchOptions
    } = options;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(`${apiUrl}${endpoint}`, {
            ...fetchOptions,
            next: revalidate !== false ? { revalidate, tags } : undefined,
            signal: controller.signal,
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        const result: ApiResponse<T> = await response.json();

        if (result.code !== "0000") {
            throw new Error(`API error: ${result.message}`);
        }

        return result.data;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`API call failed for endpoint ${endpoint}:`, error);
            onError(error);
        } else {
            console.error(`Unknown error occurred for endpoint ${endpoint}:`, error);
            onError(new Error('An unknown error occurred'));
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

export { fetchApi };
