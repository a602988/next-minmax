// lib/apiClient.ts
import nodeFetch, { RequestInit as NodeFetchRequestInit } from 'node-fetch';
import https from 'https';

// 定義一個通用的 Fetch 類型
type UniversalFetch = typeof fetch | typeof nodeFetch;

// 根據環境選擇使用 nodeFetch 或全域 fetch
const universalFetch: UniversalFetch = process.env.NODE_ENV === 'development'
    ? nodeFetch
    : global.fetch;

// 僅在開發模式下建立 httpsAgent（用來忽略自簽名憑證等問題）
const httpsAgent = process.env.NODE_ENV === 'development'
    ? new https.Agent({ rejectUnauthorized: false })
    : undefined;

// 定義一個通用的 RequestInit 類型
type UniversalRequestInit = RequestInit & NodeFetchRequestInit;

/**
 * apiFetch - 共用的 API 請求函數
 * @param url 請求網址
 * @param options 選擇性參數
 * @returns 解析後的 JSON 資料，類型為 T
 */
export async function apiFetch<T>(url: string, options?: UniversalRequestInit): Promise<T> {
    const fetchOptions: UniversalRequestInit = process.env.NODE_ENV === 'development'
        ? { agent: httpsAgent as any, ...options }
        : options || {};

    const response = await universalFetch(url, fetchOptions);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
}
