/**
 * 開發環境專用日誌工具
 *
 * 功能：
 * - 只在開發環境輸出日誌
 * - 提供不同等級的日誌方法
 * - 統一的日誌格式和樣式
 */

/**
 * 檢查是否為開發環境
 */
const isDevelopment = process.env.NODE_ENV === 'development';

/**
 * 開發環境專用的日誌函數
 * 只在開發模式下輸出日誌，生產環境下不執行
 */
export const devLog = (message: string) => {
    if (isDevelopment) {
        console.log(message);
    }
};

/**
 * 開發環境專用的警告日誌
 */
export const devWarn = (message: string, ...args: any[]) => {
    if (isDevelopment) {
        console.warn(message, ...args);
    }
};

/**
 * 開發環境專用的錯誤日誌
 */
export const devError = (message: string, ...args: any[]) => {
    if (isDevelopment) {
        console.error(message, ...args);
    }
};

/**
 * 開發環境專用的資訊日誌（帶時間戳）
 */
export const devInfo = (message: string) => {
    if (isDevelopment) {
        const timestamp = new Date().toISOString();
        console.info(`[${timestamp}] ${message}`);
    }
};

/**
 * 開發環境專用的除錯日誌（帶顏色）
 */
export const devDebug = (message: string, data?: any) => {
    if (isDevelopment) {
        console.log(`🐛 ${message}`, data ? data : '');
    }
};

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
export const devInspect = (label: string, obj: any) => {
    if (isDevelopment) {
        console.group(`🔍 ${label}`);
        console.log(obj);
        console.groupEnd();
    }
};