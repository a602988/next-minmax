import { env } from '@/env.mjs';

/**
 * 快取相關配置
 */
export const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: env.CACHE_ENABLED, // 快取系統總開關
    CDN_ENABLED: env.CACHE_CDN_ENABLED, // CDN 快取協作開關
    DEFAULT_TTL: env.CACHE_DEFAULT_TTL, // 快取預設生存時間 (秒)
    STRATEGY: env.I18N_CACHE_STRATEGY, // 國際化快取策略

    // 各類型資料的 TTL 設定 (秒)
    TTL: {
        LANGUAGES: 7200, // 語言資料快取 - 2小時
        LOCALES: 7200, // 地區設定快取 - 2小時
        MENUS: 3600, // 選單資料快取 - 1小時
        WEB_DATA: 3600, // 網站資料快取 - 1小時
        PAGES: 1800, // 頁面內容快取 - 30分鐘
        GEO_DATA: 1800, // 地理位置資料快取 - 30分鐘
        API_RESPONSE: env.CACHE_DEFAULT_TTL, // API 回應快取 - 使用預設 TTL
    },

    // Redis 配置 (如果使用 Redis 策略)
    REDIS: {
        URL: undefined, // Redis 連線字串 - 由 env 設定 (敏感資訊)
        PREFIX: 'minmax:', // Redis 鍵值前綴
        KEY_SEPARATOR: ':', // 鍵值分隔符號
    },

    // 快取標籤 - 用於分組管理和批次清除
    TAGS: {
        LANGUAGES: 'languages', // 語言資料標籤
        LOCALES: 'locales', // 地區設定標籤
        MENUS: 'menus', // 選單資料標籤
        WEB_DATA: 'web-data', // 網站資料標籤
        PAGES: 'pages', // 頁面內容標籤
        GEO_DATA: 'geo-data', // 地理位置資料標籤
        API_RESPONSE: 'api-response', // API 回應標籤
    },

    // 快取鍵值生成函數：統一生成快取鍵值，確保整個專案使用一致的命名規則。
    generateKey: (type: string, identifier: string, locale?: string): string => {
        const parts = [CACHE_CONFIG.REDIS.PREFIX, type, identifier];
        if (locale) parts.push(locale);
        return parts.join(CACHE_CONFIG.REDIS.KEY_SEPARATOR);
    }
} as const;