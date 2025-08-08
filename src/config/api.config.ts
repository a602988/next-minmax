import { env } from '@/env.mjs';

/**
 * API 相關配置
 */
export const API_CONFIG = {
    // 基礎配置
    BASE_URL: env.NEXT_PUBLIC_API_BASE_URL, // 前端 API 基礎網址
    EXTERNAL_BASE_URL: env.EXTERNAL_API_BASE_URL,  // 外部後端 API
    PROJECT_NAME: env.PROJECT_CODE, // 專案代碼名稱

    // 超時設定
    TIMEOUT: {
        DEFAULT: env.API_TIMEOUT, // 一般 API 請求超時 (毫秒)
        CONTENT: env.CONTENT_API_TIMEOUT, // 內容 API 請求超時 (毫秒)
        GEO: env.GEO_API_TIMEOUT, // 地理位置 API 超時 (毫秒)
    },

    // 重試設定
    RETRY: {
        ATTEMPTS: 3, // 重試次數
        DELAY: 1000, // 重試延遲 (毫秒)
        EXPONENTIAL_BACKOFF: true, // 指數退避策略
    },

    // 模式設定
    USE_MOCK: env.USE_MOCK_API, // Mock API 開關
    LOGGING: env.API_LOGGING_ENABLED, // API 請求日誌記錄開關

    // API 端點 - Mock 與正式版本統一管理
    ENDPOINTS: {
        // Mock API 端點 (Next.js API Routes)
        MOCK: {
            LANGUAGE: '/api/ssr/languages', // 語言資料端點
            LOCALES: '/api/ssr/locales', // 地區設定端點
            SYSTEM_MENUS: '/api/ssr/system-menus', // 系統選單端點
            WEB_DATA: '/api/ssr/web-data', // 網站資料端點
            DETAIL: '/api/ssr/detail', // 詳細資料端點
        },

        // 正式 API 端點 (外部後端)
        EXTERNAL: {
            LANGUAGE: '/api/v1/languages', // 語言資料端點
            LOCALES: '/api/v1/locales', // 地區設定端點
            SYSTEM_MENUS: '/api/v1/system-menus', // 系統選單端點
            WEB_DATA: '/api/v1/web-data', // 網站資料端點
            DETAIL: '/api/v1/detail', // 詳細資料端點
        }
    }
} as const;