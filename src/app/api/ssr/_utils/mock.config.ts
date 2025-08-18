import { clientLocaleConfig } from '@/config';

/**
 * Mock API 專用配置
 */
export const MOCK_API_CONFIG = { // 改名避免衝突
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

// 其他配置保持不變...
export const MOCK_DELAYS = {
    LANGUAGES: 100,    // 語系清單
    LOCALES: 150,      // 國家語系對照
    MENUS: 200,        // 系統選單
    WEB_DATA: 120,     // 網站資訊
    DETAIL: 300,       // 頁面詳細內容
} as const;

export const SUPPORTED_LANGUAGES = clientLocaleConfig.supportedLocales;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];
export const { isValidLocale } = clientLocaleConfig;