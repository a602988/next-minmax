/**
 * @file apiService.ts
 * @description 提供通用 API 請求功能的服務模塊，包含內存緩存機制以支持數據共享
 *
 * 本模塊實現了一個靈活且強大的 API 請求函數，支持：
 * - 集中化的錯誤處理
 * - 請求超時控制
 * - Next.js 緩存機制集成（重新驗證和標籤）
 * - TypeScript 泛型支持，確保類型安全
 * - 自動化 API 響應格式處理和錯誤碼檢查
 * - 可配置的查詢參數
 * - 靈活的緩存控制
 * - 內存緩存機制，支持數據共享
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

// 內存緩存接口
interface CacheEntry<T> {
    data: T;
    timestamp: number;
}

// 內存緩存
const memoryCache = new Map<string, CacheEntry<any>>();

// 緩存有效期（毫秒）
const CACHE_DURATION = 60000; // 1 分鐘

/**
 * 生成緩存鍵
 * @param endpoint API 端點
 * @param options 請求選項
 * @returns 唯一的緩存鍵
 */
function generateCacheKey(endpoint: string, options: FetchApiOptions): string {
    return `${endpoint}-${JSON.stringify(options)}`;
}

/**
 * 從緩存中獲取數據
 * @param key 緩存鍵
 * @returns 緩存的數據或 undefined
 */
function getFromCache<T>(key: string): T | undefined {
    const cached = memoryCache.get(key);
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
        return cached.data as T;
    }
    return undefined;
}

/**
 * 將數據存入緩存
 * @param key 緩存鍵
 * @param data 要緩存的數據
 */
function setToCache<T>(key: string, data: T): void {
    memoryCache.set(key, { data, timestamp: Date.now() });
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
    const apiUrl = process.env.NEXT_SERVER_API_URL;
    if (!apiUrl) {
        throw new Error("API URL is not defined in environment variables");
    }

    const {
        revalidate = 3600,
        tags = ['api-data'],
        timeout = 5000,
        queryParams = {},
        useCache = true,
        ...fetchOptions
    } = options;

    // 生成緩存鍵
    const cacheKey = generateCacheKey(endpoint, options);

    // 檢查內存緩存
    if (useCache) {
        const cachedData = getFromCache<T>(cacheKey);
        if (cachedData) {
            return cachedData;
        }
    }

    const fullUrl = new URL(`${apiUrl}${endpoint}`);
    Object.entries(queryParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(v => fullUrl.searchParams.append(key, v.toString()));
        } else {
            fullUrl.searchParams.append(key, value.toString());
        }
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(fullUrl.toString(), {
            ...fetchOptions,
            next: useCache ? {
                revalidate: revalidate === false ? undefined : revalidate,
                tags: tags
            } : { cache: 'no-store' },
            signal: controller.signal,
        } as RequestInit & Pick<NextConfig, 'next'>);

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        const result: ApiResponse<T> = await response.json();

        if (result.code !== "0000") {
            throw new Error(`API error: ${result.message}`);
        }

        // 將結果存入內存緩存
        if (useCache) {
            setToCache(cacheKey, result.data);
        }

        return result.data;
    } catch (error) {
        if (error instanceof Error) {
            handleApiError(error, endpoint);
        } else {
            handleApiError(new Error('An unknown error occurred'), endpoint);
        }
        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}
