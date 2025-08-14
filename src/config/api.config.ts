import { env } from '@/env.mjs';

/**
 * API 應用配置層
 * 將環境變數組織成邏輯群組，添加業務邏輯和計算屬性
 */
export const API_CONFIG = {
    // 基礎配置 - 根據環境變數計算實際使用的端點
    BASE_URL: env.USE_MOCK_API
        ? env.NEXT_PUBLIC_API_BASE_URL
        : env.EXTERNAL_API_BASE_URL,

    // 超時設定 - 邏輯分組
    TIMEOUT: {
        DEFAULT: env.API_TIMEOUT,
        CONTENT: env.CONTENT_API_TIMEOUT,
        GEO: env.GEO_API_TIMEOUT,
    },

    // 重試設定 - 業務邏輯配置
    RETRY: {
        ATTEMPTS: 3,
        DELAY: 1000,
        EXPONENTIAL_BACKOFF: true,
    },

    // API 端點 - 根據 Mock 開關動態選擇
    ENDPOINTS: env.USE_MOCK_API ? {
        LANGUAGE: '/api/ssr/languages',
        LOCALES: '/api/ssr/locales',
        SYSTEM_MENUS: '/api/ssr/system-menus',
        WEB_DATA: '/api/ssr/web-data',
        DETAIL: '/api/ssr/detail',
    } : {
        LANGUAGE: '/api/v1/languages',
        LOCALES: '/api/v1/locales',
        SYSTEM_MENUS: '/api/v1/system-menus',
        WEB_DATA: '/api/v1/web-data',
        DETAIL: '/api/v1/detail',
    },

    // Mock 配置 - 組合相關設定
    MOCK: {
        ENABLED: env.USE_MOCK_API,
        DELAY: env.MOCK_API_DELAY,
        ERROR_SIMULATION: {
            ENABLED: env.MOCK_ERROR_ENABLED,
            RATE: env.MOCK_ERROR_RATE,
        },
    },

    // 功能開關組合
    FEATURES: {
        LOGGING: env.API_LOGGING_ENABLED,
        PERFORMANCE_MONITORING: env.PERFORMANCE_MONITORING_ENABLED,
    },
} as const;