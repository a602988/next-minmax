/**
 * @function apiClientMinmax
 * 通用的 API 客戶端，用於向定義的 API 端點發送 HTTP 請求。
 *
 * @template T - 預期的響應類型。
 * @param {keyof typeof API_ENDPOINTS} endpoint - 要請求的 API 端點。
 * @param {FetchOptions} [options={}] - 請求的選項。
 * @returns {Promise<T>} - 返回一個 Promise，解析為請求的響應。
 */

import API_ENDPOINTS from '@/services/minmax/api/apiConfig';
import { buildMinmaxUrl } from './buildUrl';
import { httpClient, FetchOptions } from '@/services/core/httpClient';


export async function apiClientMinmax<T>(
    endpoint: keyof typeof API_ENDPOINTS,
    options: FetchOptions = {}
): Promise<T> {
    // 構建完整的 API 請求 URL
    const url = buildMinmaxUrl(endpoint, options.params);
    console.log('API URL:', url); // 顯示完整的 API 請求 URL
    // 使用 httpClient 發送請求並返回響應
    return httpClient<T>(url, options);
}
