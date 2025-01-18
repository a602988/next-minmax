import { RequestInit } from 'next/dist/server/web/spec-extension/request';

interface ApiResponse<T> {
    data?: T | Array<T>;
    code?: string;
    message?: string;
    [key: string]: unknown;
}

interface ErrorHandlingOptions {
    onError?(error: Error): void;
}

export interface FetchApiOptions extends Omit<RequestInit, 'next'>, ErrorHandlingOptions {
    revalidate?: number;
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
            next: { revalidate, tags },
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse<T> = await response.json();

        if ('code' in result && result.code !== "0000") {
            throw new Error(`API error: ${result.message}`);
        }

        if (result.data === undefined) {
            throw new Error('API response does not contain data');
        }

        if (Array.isArray(result.data)) {
            if (result.data.length === 0) {
                throw new Error('API returned an empty array');
            }
            return result.data[0];
        }

        return result.data;
    } catch (error) {
        if (error instanceof Error) {
            onError(error);
        } else {
            onError(new Error('An unknown error occurred'));
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

export { fetchApi };
