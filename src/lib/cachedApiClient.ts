// lib/cachedApiClient.ts

import { basicApiFetch } from './basicApiClient';

interface CacheEntry {
    data: any;
    etag?: string | null;
    lastModified?: string | null;
    timestamp: number;
}

// 儲存 API 回應快取資料的 Map
const responseCache: Map<string, CacheEntry> = new Map();

// 預設 TTL 有效期（毫秒），例如 60000 表示 60 秒
const DEFAULT_CACHE_TTL = 60000;

/**
 * 將 HeadersInit 轉換為純物件
 * @param headers RequestInit.headers 可能的型別
 * @returns 純物件形式的 headers
 */
function normalizeHeaders(headers: HeadersInit): Record<string, string> {
    if (headers instanceof Headers) {
        const result: Record<string, string> = {};
        headers.forEach((value, key) => {
            result[key] = value;
        });
        return result;
    } else if (Array.isArray(headers)) {
        return headers.reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as Record<string, string>);
    } else {
        return headers;
    }
}

/**
 * 高級 API 請求函式，整合 TTL 快取與 HTTP 條件請求
 * @param url API URL
 * @param options fetch 選項
 * @returns 解析後的 JSON 資料
 */
export async function cachedApiFetch(
    url: string,
    options: RequestInit = {}
): Promise<any> {
    // 先檢查是否有有效的快取資料
    const cached = responseCache.get(url);
    if (cached && Date.now() - cached.timestamp < DEFAULT_CACHE_TTL) {
        return cached.data;
    }

    // 若存在過期的快取，加入條件請求標頭
    const headers: Record<string, string> = options.headers
        ? normalizeHeaders(options.headers)
        : {};
    if (cached) {
        if (cached.etag) {
            headers['If-None-Match'] = cached.etag;
        }
        if (cached.lastModified) {
            headers['If-Modified-Since'] = cached.lastModified;
        }
    }
    options.headers = headers;

    // 使用基礎請求模組進行網路請求
    const response = await basicApiFetch(url, options);
    if (response.status === 304 && cached) {
        // 304 表示資源未變動，更新快取的 timestamp 後回傳舊資料
        cached.timestamp = Date.now();
        return cached.data;
    } else {
        const data = await response.json();
        const etag = response.headers.get('ETag');
        const lastModified = response.headers.get('Last-Modified');
        // 更新快取
        responseCache.set(url, {
            data,
            etag,
            lastModified,
            timestamp: Date.now(),
        });
        return data;
    }
}
