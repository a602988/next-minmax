/**
 * API 服務模塊
 *
 * 1. 此模塊提供了一個通用的 API 請求函數 fetchApi。
 * 2. 支持自定義錯誤處理、請求超時、緩存重新驗證和緩存標籤。
 * 3. 使用 TypeScript 泛型來確保類型安全。
 * 4. 自動處理 API 響應格式，包括錯誤碼檢查。
 * 5. 集成了 Next.js 的緩存機制。
 * 6. 提供了請求超時功能以防止長時間掛起。
 * 7. 默認緩存時間設置為 1 小時，可以根據需求調整。
 * 使用示例：
 * const data = await fetchApi<UserData>('/api/user', { timeout: 3000 });
 */

import { RequestInit } from 'next/dist/server/web/spec-extension/request';

// 定義 API 響應的通用接口
interface ApiResponse<T> {
    data: T;
    code: string;
    message: string;
}

// 定義錯誤處理選項的接口
interface ErrorHandlingOptions {
    onError?(error: Error): void;
}

// 擴展 FetchApiOptions 接口，包含自定義選項
export interface FetchApiOptions extends Omit<RequestInit, 'next'>, ErrorHandlingOptions {
    revalidate?: number | false;  // 重新驗證時間（秒）或禁用重新驗證
    tags?: Array<string>;         // 緩存標籤
    timeout?: number;             // 請求超時時間（毫秒）
    language?: string;            // 語言參數
}

// 默認錯誤處理函數
function defaultErrorHandler(error: Error): void {
    console.error("apiService Failed:", error);
}

// 主要的 API 請求函數
async function fetchApi<T>(endpoint: string, options: FetchApiOptions = {}): Promise<T> {
    // 獲取 API 基礎 URL
    const apiUrl = process.env.NEXT_SERVER_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined");
    }

    // 解構並設置默認選項
    const {
        onError = defaultErrorHandler,
        revalidate = 3600, // 默認重新驗證時間為 1 小時
        tags = ['api-data'],
        timeout = 5000,
        language,
        ...fetchOptions
    } = options;

    // 構建完整的 URL，包括語言參數（如果提供）
    const fullUrl = new URL(`${apiUrl}${endpoint}`);
    if (language) {
        fullUrl.searchParams.append('language', language);
    }

    // 設置請求超時
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        // 發送 API 請求
        const response = await fetch(fullUrl.toString(), {
            ...fetchOptions,
            next: revalidate !== false ? { revalidate, tags } : undefined,
            signal: controller.signal,
        });

        // 檢查 HTTP 響應狀態
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        // 解析 API 響應
        const result: ApiResponse<T> = await response.json();

        // 檢查 API 響應代碼
        if (result.code !== "0000") {
            throw new Error(`API error: ${result.message}`);
        }

        return result.data;
    } catch (error) {
        // 錯誤處理
        if (error instanceof Error) {
            console.error(`API call failed for endpoint ${endpoint}:`, error);
            onError(error);
        } else {
            console.error(`Unknown error occurred for endpoint ${endpoint}:`, error);
            onError(new Error('An unknown error occurred'));
        }
        throw error;
    } finally {
        // 清除超時計時器
        clearTimeout(timeoutId);
    }
}

export { fetchApi };
