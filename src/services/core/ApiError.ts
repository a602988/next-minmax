/**
 * @file ApiError.ts
 * 定義自定義的 API 錯誤類，用於統一處理 API 請求中的錯誤。
 */

export class ApiError extends Error {
    private readonly _status: number;
    private readonly _code: string;
    private readonly _body?: unknown;
    private readonly _retry: boolean;

    constructor(status: number, message: string, code: string, body?: unknown, retry = false) {
        super(message);
        this.name = 'ApiError';
        this._status = status;
        this._code = code;
        this._body = body;
        this._retry = retry;

        // 修正原生 Error 繼承問題
        Object.setPrototypeOf(this, new.target.prototype);
    }

    get status(): number {
        return this._status;
    }

    get code(): string {
        return this._code;
    }

    get body(): unknown | undefined {
        return this._body;
    }

    get retry(): boolean {
        return this._retry;
    }

    /**
     * 檢查錯誤是否為 ApiError 類型。
     */
    static isApiError(error: unknown): error is ApiError {
        return error instanceof ApiError;
    }

    /**
     * 創建一個新的 ApiError 實例。
     */
    static create(status: number, message: string, code: string, body?: unknown, retry = false): ApiError {
        return new ApiError(status, message, code, body, retry);
    }

    /**
     * 處理 API 錯誤並返回適當的錯誤消息。
     */
    static handleError(err: unknown, customErrorFormatter?: (error: ApiError) => string): string {
        console.error('API 獲取選項失敗:', err);
        if (ApiError.isApiError(err)) {
            return customErrorFormatter 
                ? customErrorFormatter(err)
                : `API 錯誤 ${err.status} (${err.code}): ${err.message}`;
        } else if (err instanceof Error) {
            return err.message;
        } else {
            return 'API 獲取失敗';
        }
    }

    /**
     * 實例方法用於類型守衛
     */
    isApiError(): this is ApiError {
        return true;
    }
}

/**
 * @function isApiError
 * 檢查錯誤是否為 ApiError 類型。
 * 保留此函數以保持向後兼容性。
 */
export function isApiError(error: unknown): error is ApiError {
    return ApiError.isApiError(error);
}

/**
 * @function createApiError
 * 創建一個新的 ApiError 實例。
 * 保留此函數以保持向後兼容性。
 */
export function createApiError(status: number, message: string, code: string, body?: unknown, retry = false): ApiError {
    return ApiError.create(status, message, code, body, retry);
}

/**
 * @function handleApiError
 * 處理 API 錯誤並返回適當的錯誤消息。
 * 新增此函數以提供一致的錯誤處理方法。
 */
export function handleApiError(err: unknown, customErrorFormatter?: (error: ApiError) => string): string {
    return ApiError.handleError(err, customErrorFormatter);
}
