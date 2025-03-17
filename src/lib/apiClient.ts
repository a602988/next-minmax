// lib/apiClient.ts
/**
 * apiFetch - 共用的 API 請求函數
 *
 * 1. 自動處理 JSON 解析
 * 2. 支持開發環境和生產環境的不同配置
 * 3. 在開發環境中忽略 SSL 證書驗證，方便本地測試
 * 4. 統一的錯誤處理機制
 */
// lib/apiClient.ts
import nodeFetch, { RequestInit as NodeFetchRequestInit } from 'node-fetch';
import https from 'https';
import { getCache, setCache, clearCache } from './cacheManager';

type UniversalFetch = typeof fetch | typeof nodeFetch;
const universalFetch: UniversalFetch = process.env.NODE_ENV === 'development'
    ? nodeFetch
    : global.fetch;

const httpsAgent = process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

type UniversalRequestInit = RequestInit & NodeFetchRequestInit;

// 用於 in-flight 請求去重
const pendingRequests = new Map<string, Promise<any>>();

/**
 * 產生一個唯一的請求 key，基於 URL 和 options 的 JSON 字串
 */
function generateRequestKey(url: string, options?: UniversalRequestInit): string {
    const optionsKey = options ? JSON.stringify(options) : '';
    return `${url}:${optionsKey}`;
}

interface ApiFetchOptions extends UniversalRequestInit {
    cacheDuration?: number;
}
/**
 * apiFetch - 共用的 API 請求函數
 *
 * 結合了獨立的緩存管理與 in-flight 請求去重機制：
 * 1. 先檢查緩存，若存在且未過期則直接回傳緩存結果。
 * 2. 檢查是否已有同樣的請求正在進行，若有則直接回傳其 Promise。
 * 3. 否則發送新請求，並在請求完成後更新緩存。
 *
 * @template T - 預期的 API 響應數據類型
 * @param {string} url - 請求的完整 URL
 * @param {ApiFetchOptions} [options] - 可選的請求配置
 * @returns {Promise<T>} 返回解析為 T 類型的數據
 * @throws {Error} 當 HTTP 響應不成功時拋出錯誤
 */
export async function apiFetch<T>(url: string, options?: ApiFetchOptions): Promise<T> {
    const { cacheDuration = 5000, ...fetchOptions } = options || {};
    const key = generateRequestKey(url, fetchOptions);

    // 先檢查緩存
    const cached = getCache<T>(key);

    if (cached !== undefined) {
        console.log(`cached has`);
        return cached;
    }

    // 檢查是否已有同樣的請求正在進行
    if (pendingRequests.has(key)) {
        return pendingRequests.get(key)!;
    }

    const finalFetchOptions: UniversalRequestInit = process.env.NODE_ENV === 'development'
        ? { agent: httpsAgent as any, ...fetchOptions }
        : fetchOptions;

    // 發送新請求並儲存 in-flight 請求
    const requestPromise = (async () => {
        const response = await universalFetch(url, finalFetchOptions);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // 更新緩存管理模組，使用指定的緩存持續時間
        setCache<T>(key, data, cacheDuration);
        return data;
    })();

    pendingRequests.set(key, requestPromise);

    try {
        return await requestPromise;
    } finally {
        pendingRequests.delete(key);
    }
}
/**
 * 清除所有 API 請求相關的緩存
 */
export function clearApiCache() {
    // 清除緩存模組內的資料
    // 注意：這裡直接調用 cacheManager 的 clearCache()，你可以根據需求決定是否導出此函數
    clearCache();
    // 如果需要，也可以清理 pendingRequests，但通常只需清理緩存即可
    // pendingRequests.clear();

}
