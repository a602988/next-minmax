/**
 * @file apiService.ts
 * @description 提供通用 API 請求功能的服務模塊
 *
 * 本模塊實現了一個靈活且強大的 API 請求函數，支持：
 * - 集中化的錯誤處理
 * - 請求超時控制
 * - Next.js 緩存機制集成（重新驗證和標籤）
 * - TypeScript 泛型支持，確保類型安全
 * - 自動化 API 響應格式處理和錯誤碼檢查
 * - 可配置的查詢參數
 * - 靈活的緩存控制
 */


import { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { NextConfig } from 'next';


/**
 * API 響應的標準格式
 * @template T 響應數據的類型
 */
interface ApiResponse<T> {
    data: T;         // 實際的響應數據
    code: string;    // 響應狀態碼
    message: string; // 響應消息
}


/**
 * fetchApi 函數的選項接口
 * 擴展了 RequestInit，並包含額外的自定義選項
 */
export interface FetchApiOptions extends Omit<RequestInit, 'next'> {
    /** 緩存重新驗證時間（秒），false 表示禁用重新驗證 */
    revalidate?: number | false;
    /** 緩存標籤，用於 Next.js 的緩存管理 */
    tags?: Array<string>;
    /** 請求超時時間（毫秒） */
    timeout?: number;
    /** 查詢參數對象 */
    queryParams?: Record<string, string | number | boolean | string[]>;
    /** 是否使用緩存，默認為 true */
    useCache?: boolean;
}

/**
 * 集中化的錯誤處理函數
 * @param error 捕獲到的錯誤對象
 * @param endpoint 發生錯誤的 API 端點
 */
function handleApiError(error: Error, endpoint: string): void {
    console.error(`API call failed for endpoint ${endpoint}:`, error);
    // 這裡可以添加更多的錯誤處理邏輯，比如錯誤報告、日誌記錄等
}


/**
 * 執行 API 請求的核心函數
 * @template T 預期的響應數據類型
 * @param endpoint API 端點路徑
 * @param options 請求選項
 * @returns Promise 解析為類型 T 的響應數據
 * @throws 當 API 調用失敗時拋出錯誤
 */
export async function fetchApi<T>(endpoint: string, options: FetchApiOptions = {}): Promise<T> {
    // 從環境變量獲取 API 基礎 URL
    const apiUrl = process.env.NEXT_SERVER_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables");
    }

    // 解構並設置默認值
    const {
        revalidate = 3600,        // 默認重新驗證時間為 1 小時
        tags = ['api-data'],      // 默認緩存標籤
        timeout = 5000,           // 默認超時時間為 5 秒
        queryParams = {},         // 默認無查詢參數
        useCache = true,          // 默認使用緩存
        ...fetchOptions           // 其他 fetch 選項
    } = options;

    // 構建完整的 URL，包括查詢參數
    const fullUrl = new URL(`${apiUrl}${endpoint}`);
    Object.entries(queryParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            // 處理數組類型的查詢參數
            value.forEach(v => fullUrl.searchParams.append(key, v.toString()));
        } else {
            fullUrl.searchParams.append(key, value.toString());
        }
    });

    // 設置請求超時
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        // 執行 fetch 請求
        const response = await fetch(fullUrl.toString(), {
            ...fetchOptions,
            next: useCache ? {
                revalidate: revalidate === false ? undefined : revalidate,
                tags: tags
            } : { cache: 'no-store' },  // 根據 useCache 設置緩存策略
            signal: controller.signal,  // 用於超時控制
        } as RequestInit & Pick<NextConfig, 'next'>);

        // 檢查 HTTP 響應狀態
        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        // 解析 JSON 響應
        const result: ApiResponse<T> = await response.json();

        // 檢查 API 響應碼
        if (result.code !== "0000") {
            throw new Error(`API error: ${result.message}`);
        }

        // 返回實際數據
        return result.data;
    } catch (error) {
        // 錯誤處理
        if (error instanceof Error) {
            handleApiError(error, endpoint);
        } else {
            handleApiError(new Error('An unknown error occurred'), endpoint);
        }
        throw error;  // 重新拋出錯誤，允許調用者進行進一步處理
    } finally {
        // 清除超時計時器
        clearTimeout(timeoutId);
    }
}
