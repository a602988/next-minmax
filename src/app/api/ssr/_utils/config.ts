
import { LOCALE_CONFIG, type SupportedLocale } from '@/lib/config';

/**
 * Mock API 配置
 */
export const API_CONFIG = {
    // 快取配置
    CACHE: {
        DEFAULT_TTL: 300, // 5分鐘
        STATIC_TTL: 3600, // 1小時
        DYNAMIC_TTL: 60,  // 1分鐘
    },

    // 錯誤模擬配置
    ERROR_SIMULATION: {
        ENABLED: false, // 開發時可設為 true 測試錯誤處理
        RATE: 0.05,     // 5% 的請求會返回錯誤
    }
} as const;

/**
 * Mock API 延遲配置 (毫秒)
 * 在開發階段，Mock API（假的 API）通常會立即返回數據，但真實的 API 會有網路延遲。為了讓開發環境更接近生產環境，需要人為添加延遲。
 */
export const MOCK_DELAYS = {
    LANGUAGES: 100,    // 語系清單
    LOCALES: 150,      // 國家語系對照
    MENUS: 200,        // 系統選單
    WEB_DATA: 120,     // 網站資訊
    DETAIL: 300,       // 頁面詳細內容
} as const;

/**
 * 支援的語系列表 - 從統一的語系配置獲取
 * 確保與國際化配置保持一致
 */
export const SUPPORTED_LANGUAGES = LOCALE_CONFIG.SUPPORTED_LOCALES;
export type SupportedLanguage = SupportedLocale;

/**
 * 語系驗證函數 - 重新導出以便在 API 中使用
 */
export const { isValidLocale } = LOCALE_CONFIG;