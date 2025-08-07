import { env } from '../../env.mjs';

/**
 * 應用程式核心配置
 * 整合環境變數與預設值
 */
export const APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: env.PROJECT_CODE,

    // API 配置
    API: {
        BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://v5.jeffy.test',
        TIMEOUT: env.API_TIMEOUT,
        CONTENT_TIMEOUT: env.CONTENT_API_TIMEOUT,
    },

    // 功能開關
    FEATURES: {
        GEO_REDIRECT: env.ENABLE_GEO_REDIRECT,
        FORCE_REDIRECT: env.FORCE_REDIRECT,
        MULTI_LANGUAGE: env.ENABLE_MULTI_LANGUAGE,
        MEMBERSHIP: process.env.FEATURES_MEMBERSHIP_ENABLED === 'true',
    },

    // 快取配置
    CACHE: {
        STRATEGY: process.env.I18N_CACHE_STRATEGY || 'memory',
        DEFAULT_TTL: parseInt(process.env.CACHE_DEFAULT_TTL || '3600'),
    },

    // 地理位置配置
    GEO: {
        DETECTION_STRATEGY: process.env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY || 'api-only',
        REDIRECT_MODE: process.env.NEXT_PUBLIC_GEO_REDIRECT_MODE || 'suggest',
        CDN_COUNTRY_HEADER: process.env.NEXT_PUBLIC_CDN_COUNTRY_HEADER || 'cf-ipcountry',
    },

    // 開發相關
    DEV: {
        USE_MOCK_API: process.env.USE_MOCK_API === 'true',
        API_LOGGING: process.env.API_LOGGING_ENABLED === 'true',
        PERFORMANCE_MONITORING: process.env.PERFORMANCE_MONITORING === 'true',
    }
} as const;