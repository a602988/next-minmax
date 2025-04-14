
/**
 * @function applyResponseInterceptors
 * 處理 API 響應的攔截器，支持自動刷新令牌和錯誤處理。
 *
 * 當響應狀態為 401 且未跳過刷新時，嘗試刷新令牌。
 * 如果刷新失敗，清除本地存儲的令牌並重定向到登錄頁面。
 *
 * 對於非成功響應，拋出自定義的 ApiError。
 *
 * @template T - 返回數據的類型。
 * @returns {Promise<T>} - 返回解析後的響應數據。
 */

import { refreshAuthToken } from '@/services/shared/auth/authService';
import { createApiError } from '@/services/core/ApiError';

let refreshing = false;
let refreshPromise: Promise<void> | null = null;


export async function applyResponseInterceptors<T>(
    response: Response,
    skipAuthRefresh: boolean = false
): Promise<T> {
    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');
    const data = isJson ? await response.json() : await response.text();

    if (response.status === 401 && !skipAuthRefresh) {
        if (!refreshing) {
            refreshing = true;
            refreshPromise = refreshAuthToken()
                .catch(err => {
                    console.error('[Token Refresh Failed]', err);
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/login';
                })
                .finally(() => {
                    refreshing = false;
                });
        }

        await refreshPromise;
        throw {
            retry: true,
            message: 'Token refreshed. Please retry request.',
        };
    }

    if (!response.ok) {
        throw createApiError(response.status, response.statusText, data);
    }

    return data as T;
}
