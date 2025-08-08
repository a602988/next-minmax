// API 標準回應格式 (通用)
export interface ApiResponse<T = unknown> {
    code: string;        // 回應代碼 (例如: "0000")
    message: string;     // 回應訊息 (例如: "成功。")
    data: T;            // 實際資料
}

// API 錯誤介面 (通用)
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>; // 改為更具體的類型
}

