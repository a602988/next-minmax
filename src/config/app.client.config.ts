import { env } from '@/env.mjs';

/**
 * 應用程式客戶端配置
 * 只包含可在瀏覽器中安全使用的配置
 */
export const APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: env.PROJECT_CODE, // 專案代碼名稱

    // API 配置 (僅前端可用)
    API: {
        BASE_URL: env.NEXT_PUBLIC_API_BASE_URL, // 前端 API 基礎網址
        TIMEOUT: 30000, // 客戶端預設超時
    },

    // 功能開關 (僅前端相關)
    FEATURES: {
        MULTI_LANGUAGE: env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED, // 多語系功能開關
        DEV_MODE: env.NEXT_PUBLIC_DEV_MODE_ENABLED, // 開發模式開關
    },

    // 地理位置配置 (僅前端相關)
    GEO: {
        DETECTION_STRATEGY: env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY, // 地理位置偵測策略
        REDIRECT_MODE: env.NEXT_PUBLIC_GEO_REDIRECT_MODE, // 地理重導模式
        CDN_COUNTRY_HEADER: env.NEXT_PUBLIC_CDN_COUNTRY_HEADER, // CDN 國家標頭名稱
    },

    // 語系配置 (僅前端相關)
    LOCALE: {
        CLIENT_DEFAULT: env.NEXT_PUBLIC_DEFAULT_LOCALE, // 前端預設語系
        MULTI_LANGUAGE_ENABLED: env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED, // 前端多語系功能開關
    }
} as const;

// 導出類型
export type AppClientConfig = typeof APP_CONFIG;