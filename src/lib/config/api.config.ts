import { env } from '../../env.mjs';

/**
 * API 相關配置
 */
export const API_CONFIG = {
    // 基礎配置
    BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://v5.jeffy.test',
    PROJECT_NAME: env.PROJECT_CODE,

    // 超時設定
    TIMEOUT: {
        DEFAULT: env.API_TIMEOUT,
        CONTENT: env.CONTENT_API_TIMEOUT,
        GEO: parseInt(process.env.GEO_API_TIMEOUT || '800'),
    },

    // 重試設定
    RETRY: {
        ATTEMPTS: 3,
        DELAY: 1000, // 1秒
        EXPONENTIAL_BACKOFF: true,
    },

    // 模式設定
    USE_MOCK: process.env.USE_MOCK_API === 'true',
    LOGGING: process.env.API_LOGGING_ENABLED === 'true',

    // API 端點
    ENDPOINTS: {
        LANGUAGE: '/api/ssr/languages',
        LOCALES: '/api/ssr/locales',
        SYSTEM_MENUS: '/api/ssr/system-menus',
        WEB_DATA: '/api/ssr/web-data',
        DETAIL: '/api/ssr/detail',
    }
} as const;