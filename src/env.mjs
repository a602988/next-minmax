import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境變數配置 - 完全用程式碼管理預設值
 * 開發時使用預設值，production 時用環境變數覆蓋
 */
export const env = createEnv({
    server: {
        // 功能開關 - 開發時的安全預設值
        ENABLE_GEO_REDIRECT: z.string().transform((val) => val === "true").default("false"),
        FORCE_REDIRECT: z.string().transform((val) => val === "true").default("false"),
        ENABLE_MULTI_LANGUAGE: z.string().transform((val) => val === "true").default("true"),
        INTERNATIONALIZATION_ENABLED: z.string().transform((val) => val === "true").default("true"),

        // API 配置 - 開發友好的預設值
        API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("5000"),
        CONTENT_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("10000"),
        GEO_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("800"),

        // 專案配置 - 統一的預設值
        PROJECT_CODE: z.string().default("minmax2025"),
        DEFAULT_LANGUAGE: z.string().default("zh-TW"),
        COUNTRY_SUBDOMAIN_MAP: z.string().default('{"TW": "tw", "US": "us", "JP": "jp"}'),

        // 快取配置 - 合理的預設值
        I18N_CACHE_STRATEGY: z.enum(["memory", "redis", "none"]).default("memory"),
        CACHE_DEFAULT_TTL: z.string().transform((val) => parseInt(val)).default("3600"),

        // 功能開關 - 開發時的安全預設值
        FEATURES_MEMBERSHIP_ENABLED: z.string().transform((val) => val === "true").default("false"),
        USE_MOCK_API: z.string().transform((val) => val === "true").default("true"),
        API_LOGGING_ENABLED: z.string().transform((val) => val === "true").default("false"),
        PERFORMANCE_MONITORING: z.string().transform((val) => val === "true").default("false"),
    },

    client: {
        // 前端環境變數 - 開發友好的預設值
        NEXT_PUBLIC_PROJECT_CODE: z.string().default("minmax2025"),
        NEXT_PUBLIC_PROJECT_NAME: z.string().default("minmax2025"),
        NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default("zh-TW"),
        NEXT_PUBLIC_API_BASE_URL: z.string().default("http://localhost:3000"),
        NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE: z.string().transform((val) => val === "true").default("true"),
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: z.enum(["cdn-only", "api-only", "cdn-fallback"]).default("api-only"),
        NEXT_PUBLIC_GEO_REDIRECT_MODE: z.enum(["off", "suggest", "force"]).default("suggest"),
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: z.string().default("cf-ipcountry"),
    },

    runtimeEnv: {
        // 伺服器端環境變數映射 - 開發時這些都會是 undefined，使用預設值
        ENABLE_GEO_REDIRECT: process.env.ENABLE_GEO_REDIRECT,
        FORCE_REDIRECT: process.env.FORCE_REDIRECT,
        ENABLE_MULTI_LANGUAGE: process.env.ENABLE_MULTI_LANGUAGE,
        INTERNATIONALIZATION_ENABLED: process.env.INTERNATIONALIZATION_ENABLED,
        API_TIMEOUT: process.env.API_TIMEOUT,
        CONTENT_API_TIMEOUT: process.env.CONTENT_API_TIMEOUT,
        GEO_API_TIMEOUT: process.env.GEO_API_TIMEOUT,
        PROJECT_CODE: process.env.PROJECT_CODE,
        DEFAULT_LANGUAGE: process.env.DEFAULT_LANGUAGE,
        COUNTRY_SUBDOMAIN_MAP: process.env.COUNTRY_SUBDOMAIN_MAP,
        I18N_CACHE_STRATEGY: process.env.I18N_CACHE_STRATEGY,
        CACHE_DEFAULT_TTL: process.env.CACHE_DEFAULT_TTL,
        FEATURES_MEMBERSHIP_ENABLED: process.env.FEATURES_MEMBERSHIP_ENABLED,
        USE_MOCK_API: process.env.USE_MOCK_API,
        API_LOGGING_ENABLED: process.env.API_LOGGING_ENABLED,
        PERFORMANCE_MONITORING: process.env.PERFORMANCE_MONITORING,

        // 客戶端環境變數映射 - 開發時這些都會是 undefined，使用預設值
        NEXT_PUBLIC_PROJECT_CODE: process.env.NEXT_PUBLIC_PROJECT_CODE,
        NEXT_PUBLIC_PROJECT_NAME: process.env.NEXT_PUBLIC_PROJECT_NAME,
        NEXT_PUBLIC_DEFAULT_LOCALE: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
        NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
        NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE: process.env.NEXT_PUBLIC_ENABLE_MULTI_LANGUAGE,
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: process.env.NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        NEXT_PUBLIC_GEO_REDIRECT_MODE: process.env.NEXT_PUBLIC_GEO_REDIRECT_MODE,
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: process.env.NEXT_PUBLIC_CDN_COUNTRY_HEADER,
    },
});