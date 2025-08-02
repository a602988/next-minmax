
// Cookie 名稱常數
export const COOKIE_NAMES = {
    LANGUAGE_DATA: 'languageData',
    USER_PREFERRED_LANGUAGE: 'userPreferredLanguage'
} as const;

// 語系版本號常數 (用於快取控制)
export const LANGUAGE_VERSION = '1.0.0';

// 快取配置
export const CACHE_CONFIG = {
    LANGUAGE_DATA_TTL: 3600, // 語系資料快取 1 小時
    VERSION_CHECK_INTERVAL: 86400, // 版本檢查間隔 24 小時
} as const;

// API 配置
export const API_CONFIG = {
    TIMEOUT: 5000, // API 請求超時時間 (毫秒)
    RETRY_ATTEMPTS: 3, // 重試次數
    RETRY_DELAY: 1000, // 重試延遲 (毫秒)
} as const;

// 預設網站配置
export const DEFAULT_SITE_CONFIG = {
    enableMultiLanguage: true,
    enableGeoRedirect: false,
    forceRedirect: false,
    defaultLanguage: 'zh-TW',
    supportedLanguages: ['zh-TW', 'zh-CN', 'en', 'ja'],
    countryMapping: {
        'TW': 'tw',
        'CN': 'cn',
        'US': 'us',
        'JP': 'jp'
    },
    apiTimeout: 5000,
    cookieOptions: {
        languageDataMaxAge: 3600,
        userPreferenceMaxAge: 86400 * 30, // 30 天
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const
    }
} as const;