/**
 * @function applyRequestInterceptors
 * 為 API 請求應用攔截器，添加必要的標頭信息。
 * 
 * @param {RequestInit} options - 原始的請求選項。
 * @returns {RequestInit} - 修改後的請求選項，包含攔截器添加的標頭。
 */
export function applyRequestInterceptors(options: RequestInit): RequestInit {
    // 獲取存儲在 localStorage 中的 token（僅在瀏覽器環境中可用）
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

    // 返回新的請求選項，添加 Authorization 標頭（如果 token 存在）
    return {
        ...options,
        headers: {
            ...options.headers,
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
    };
}
