/**
 * @file ApiError.ts
 * 定義自定義的 API 錯誤類，用於統一處理 API 請求中的錯誤。
 */

/**
 * @class ApiError
 * 擴展了原生 Error 類，添加了 HTTP 狀態碼、響應體和重試標誌。
 */
export class ApiError extends Error {
    status: number;
    body?: unknown;
    retry?: boolean;

    constructor(status: number, message: string, body?: unknown, retry = false) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.body = body;
        this.retry = retry;

        // 修正原生 Error 繼承問題
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

/**
 * @function isApiError
 * 檢查錯誤是否為 ApiError 類型。
 */
export function isApiError(error: unknown): error is ApiError {
    return error instanceof ApiError;
}

/**
 * @function createApiError
 * 創建一個新的 ApiError 實例。
 */
export function createApiError(status: number, message: string, body?: unknown, retry = false): ApiError {
    return new ApiError(status, message, body, retry);
}
