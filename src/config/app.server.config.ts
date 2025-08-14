import { env } from '@/env.mjs';

/**
 * 應用程式服務端配置
 * 包含所有服務端專用的配置，包括敏感資訊
 */
export const SERVER_APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: env.PROJECT_CODE, // 專案代碼名稱

    // API 配置
    API: {
        BASE_URL: env.NEXT_PUBLIC_API_BASE_URL, // 前端 API 基礎網址
        EXTERNAL_URL: env.EXTERNAL_API_BASE_URL, // 外部後端 API 基礎網址
        TIMEOUT: env.API_TIMEOUT, // 一般 API 請求超時 (毫秒)
        CONTENT_TIMEOUT: env.CONTENT_API_TIMEOUT, // 內容 API 請求超時 (毫秒)
        GEO_TIMEOUT: env.GEO_API_TIMEOUT, // 地理位置 API 超時 (毫秒)
    },

    // 功能開關
    FEATURES: {
        INTERNATIONALIZATION: env.INTERNATIONALIZATION_ENABLED, // 國際化功能總開關
        GEO_DETECTION: env.GEO_DETECTION_ENABLED, // IP 地理偵測功能開關
        FORCE_REDIRECT: env.FORCE_REDIRECT, // 強制重導開關
        MULTI_LANGUAGE: env.MULTI_LANGUAGE_ENABLED, // 多語系功能開關
        MEMBERSHIP: env.MEMBERSHIP_ENABLED, // 會員功能開關
        CACHE: env.CACHE_ENABLED, // 快取系統總開關
    },

    // 快取配置
    CACHE: {
        ENABLED: env.CACHE_ENABLED, // 快取系統總開關
        CDN_ENABLED: env.CACHE_CDN_ENABLED, // CDN 快取協作開關
        STRATEGY: env.I18N_CACHE_STRATEGY, // 國際化快取策略
        DEFAULT_TTL: env.CACHE_DEFAULT_TTL, // 快取預設生存時間 (秒)
    },

    // 地理位置配置
    GEO: {
        DETECTION_STRATEGY: env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY, // 地理位置偵測策略
        REDIRECT_MODE: env.NEXT_PUBLIC_GEO_REDIRECT_MODE, // 地理重導模式
        CDN_COUNTRY_HEADER: env.NEXT_PUBLIC_CDN_COUNTRY_HEADER, // CDN 國家標頭名稱
        API_PROVIDER: env.GEO_API_PROVIDER, // 地理位置服務提供商
        API_TIMEOUT: env.GEO_API_TIMEOUT, // 地理位置 API 超時 (毫秒)
    },

    // Mock 與測試配置
    MOCK: {
        USE_MOCK_API: env.USE_MOCK_API, // Mock API 開關
        API_DELAY: env.MOCK_API_DELAY, // Mock API 延遲模擬 (毫秒)
        ERROR_ENABLED: env.MOCK_ERROR_ENABLED, // 錯誤模擬開關
        ERROR_RATE: env.MOCK_ERROR_RATE, // 錯誤模擬機率 (0.0-1.0)
    },

    // 開發與監控
    DEV: {
        API_LOGGING: env.API_LOGGING_ENABLED, // API 請求日誌記錄開關
        PERFORMANCE_MONITORING: env.PERFORMANCE_MONITORING_ENABLED, // 效能監控開關
        DEV_MODE: env.NEXT_PUBLIC_DEV_MODE_ENABLED, // 開發模式開關
    },

    // 語系配置
    LOCALE: {
        DEFAULT: env.DEFAULT_LANGUAGE, // 預設語系
        CLIENT_DEFAULT: env.NEXT_PUBLIC_DEFAULT_LOCALE, // 前端預設語系
        MULTI_LANGUAGE_ENABLED: env.NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED, // 前端多語系功能開關
        COUNTRY_SUBDOMAIN_MAP: env.COUNTRY_SUBDOMAIN_MAP, // 國家子網域對應表 (JSON)
    }
} as const;

// 導出類型
export type ServerAppConfig = typeof SERVER_APP_CONFIG;