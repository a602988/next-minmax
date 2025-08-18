/**
 * 開發環境專用日誌工具
 *
 * 功能：
 * - 只在開發環境輸出日誌
 * - 提供不同等級的日誌方法
 * - 統一的日誌格式和樣式
 * - 支援業務日誌（可在生產環境使用）
 */

/**
 * 檢查是否為開發環境
 */
const isDevelopment = process.env.NODE_ENV === 'development';

// ==========================================
// 開發環境專用日誌函數
// ==========================================

/**
 * 開發環境專用的一般日誌
 */
export const devLog = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.log(`📝 ${message}`, data ? data : '');
    }
};

/**
 * 開發環境專用的資訊日誌
 */
export const devInfo = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.info(`ℹ️ ${message}`, data ? data : '');
    }
};

/**
 * 開發環境專用的警告日誌
 */
export const devWarn = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.warn(`⚠️ ${message}`, data ? data : '');
    }
};

/**
 * 開發環境專用的錯誤日誌
 */
export const devError = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.error(`❌ ${message}`, data ? data : '');
    }
};

/**
 * 開發環境專用的除錯日誌
 */
export const devDebug = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.log(`🐛 ${message}`, data ? data : '');
    }
};

/**
 * 開發環境專用的成功日誌
 */
export const devSuccess = (message: string, data?: unknown) => {
    if (isDevelopment) {
        console.log(`✅ ${message}`, data ? data : '');
    }
};

// ==========================================
// 業務日誌函數（可在生產環境使用）
// ==========================================

/**
 * 業務日誌：API 呼叫記錄
 * 受 API_LOGGING_ENABLED 環境變數控制
 */
export const apiLog = (message: string, data?: unknown) => {
    const apiLoggingEnabled = process.env.API_LOGGING_ENABLED === 'true';
    if (apiLoggingEnabled) {
        console.log(`🌐 ${message}`, data ? data : '');
    }
};

/**
 * 業務日誌：API 成功記錄
 */
export const apiSuccess = (message: string, data?: unknown) => {
    const apiLoggingEnabled = process.env.API_LOGGING_ENABLED === 'true';
    if (apiLoggingEnabled) {
        console.log(`✅ ${message}`, data ? data : '');
    }
};

/**
 * 業務日誌：API 錯誤記錄（總是記錄，不受環境變數控制）
 */
export const apiError = (message: string, data?: unknown) => {
    console.error(`❌ ${message}`, data ? data : '');
};

// ==========================================
// 開發工具類別
// ==========================================

/**
 * 開發環境專用的效能計時器
 */
export class DevTimer {
    private startTime: number;
    private label: string;

    constructor(label: string) {
        this.label = label;
        this.startTime = performance.now();
        if (isDevelopment) {
            console.time(label);
        }
    }

    end() {
        if (isDevelopment) {
            console.timeEnd(this.label);
            const duration = performance.now() - this.startTime;
            console.log(`⏱️ ${this.label}: ${duration.toFixed(2)}ms`);
        }
    }
}

/**
 * 開發環境專用的物件檢查器
 */
export const devInspect = (label: string, obj: unknown) => {
    if (isDevelopment) {
        console.group(`🔍 ${label}`);
        console.log(obj);
        console.groupEnd();
    }
};

/**
 * 開發環境專用的表格顯示
 */
export const devTable = (label: string, data: unknown[]) => {
    if (isDevelopment && Array.isArray(data)) {
        console.log(`📊 ${label}`);
        console.table(data);
    }
};