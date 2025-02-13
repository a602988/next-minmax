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
 * 將 HeadersInit 轉換為純物件形式
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
 * 高級 API 請求函式，整合 TTL 快取與 HTTP 條件請求（利用 ETag / Last-Modified）
 *
 * 流程說明：
 * 1. 檢查是否已有快取資料，並確認是否在 TTL 有效期內，若是則直接回傳。
 * 2. 若存在快取但 TTL 過期，則在請求 header 中加入條件請求的標頭：
 *    - If-None-Match（如果有 etag）
 *    - If-Modified-Since（如果有 lastModified）
 * 3. 發送請求後：
 *    - 若 API 回傳 304 Not Modified，則更新快取的 timestamp 並回傳快取資料。
 *    - 否則，解析回傳資料並根據回應 header 更新快取（包含 etag 與 lastModified）。
 *
 * @param url API URL
 * @param options fetch 選項
 * @returns 解析後的 JSON 資料
 */
export async function cachedApiFetch(
    url: string,
    options: RequestInit = {}
): Promise<any> {
    // 先檢查是否已有快取資料
    const cached = responseCache.get(url);
    if (cached && Date.now() - cached.timestamp < DEFAULT_CACHE_TTL) {
        // TTL 尚未過期，直接回傳快取資料
        return cached.data;
    }

    // 若有快取但 TTL 過期，則在 header 中加入條件請求資訊
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

    // 使用基本 API 請求模組發送網路請求
    const response = await basicApiFetch(url, options);

    if (response.status === 304 && cached) {
        // API 回傳 304 表示資源未更新，僅更新快取 timestamp
        cached.timestamp = Date.now();
        return cached.data;
    } else {
        // API 回傳新的資料，解析 JSON 並更新快取
        const data = await response.json();
        const etag = response.headers.get('ETag');
        const lastModified = response.headers.get('Last-Modified');
        responseCache.set(url, {
            data,
            etag,
            lastModified,
            timestamp: Date.now(),
        });
        return data;
    }
}
