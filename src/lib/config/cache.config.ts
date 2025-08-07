/**
 * 快取相關配置
 */
export const CACHE_CONFIG = {
    // 預設 TTL 設定
    DEFAULT_TTL: parseInt(process.env.CACHE_DEFAULT_TTL || '3600'),

    // 各類型資料的 TTL
    TTL: {
        LANGUAGES: 7200,    // 2小時
        LOCALES: 7200,      // 2小時
        MENUS: 3600,        // 1小時
        WEB_DATA: 3600,     // 1小時
        PAGES: 1800,        // 30分鐘
    },

    // 快取策略
    STRATEGY: process.env.I18N_CACHE_STRATEGY || 'memory',

    // Redis 配置 (如果使用)
    REDIS: {
        URL: process.env.REDIS_URL,
        PREFIX: 'minmax:',
    },

    // 快取標籤
    TAGS: {
        LANGUAGES: 'languages',
        LOCALES: 'locales',
        MENUS: 'menus',
        WEB_DATA: 'web-data',
        PAGES: 'pages',
    }
} as const;