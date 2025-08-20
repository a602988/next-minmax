import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境變數配置 - 程式碼優先的配置管理
 *
 * 設計原則：
 * 1. env.mjs 包含所有預設值和業務邏輯配置
 * 2. .env 檔案只覆寫需要變更或敏感的設定
 * 3. 開發時依賴預設值，生產時用環境變數覆蓋
 * 4. 共享配置避免重複定義
 *
 * 主要修正：
 * 1. 使用 z.coerce 簡化類型轉換，例如 z.coerce.boolean() 會自動將 "true" 轉為 true。
 * 2. 移除動態生成 client config 的函式，直接在 client schema 中定義 NEXT_PUBLIC_ 變數。
 * 3. runtimeEnv 直接設為 process.env，這是 Next.js 環境下的標準做法。
 */

export const env = createEnv({
    /**
     * 伺服器端專用環境變數。
     * 這些變數「不會」暴露給客戶端，適合放置敏感資訊如 API 金鑰。
     */
    server: {
        // ==========================================
        // 專案核心配置 - 伺服器端專用
        // ==========================================
        PROJECT_CODE: z.string().default("minmax2025"),
        COUNTRY_SUBDOMAIN_MAP: z.string().default('{}'),

        // ==========================================
        // API 與外部服務配置 - 伺服器端專用
        // ==========================================
        API_BASE_URL: z.string().url().default("https://v5.jeffy.test"),
        I18N_CACHE_STRATEGY: z.enum(["memory", "redis", "none"]).default("memory"),

        // ==========================================
        // 🔐 敏感資訊 - 僅伺服器端 (可視需求取消註解)
        // ==========================================
        // DATABASE_URL: z.string().url().optional(),
        // REDIS_URL: z.string().url().optional(),
        // API_SECRET_KEY: z.string().min(1).optional(),
        // JWT_SECRET: z.string().min(1).optional(),
        // ADMIN_API_KEY: z.string().min(1).optional(),
        // GEO_API_KEY: z.string().min(1).optional(),
    },

    /**
     * 客戶端環境變數。
     * 必須以 `NEXT_PUBLIC_` 開頭，這些變數會被打包進客戶端的 JavaScript bundle 中。
     * 絕對不要在此處放置任何敏感資訊。
     */
    client: {
        // ==========================================
        // 🏗️ 專案基本資訊 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_PROJECT_NAME: z.string().default("測試網站"),
        NEXT_PUBLIC_API_VERSION: z.string().default("1.0.0"),

        // ==========================================
        // 🌍 國際化與語系配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default("zh-TW"),
        NEXT_PUBLIC_SUPPORTED_LOCALES: z.string().default('zh-TW'),
        NEXT_PUBLIC_LOCALE_PREFIX_MODE: z.enum(['always', 'as-needed', 'never']).default('as-needed'),
        NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: z.coerce.boolean().default(true),
        NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: z.coerce.boolean().default(true),
        NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: z.coerce.boolean().default(true),

        // ==========================================
        // 🗺️ 地理位置偵測配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: z.enum(["cdn-only", "api-only", "cdn-fallback"]).default("api-only"),
        NEXT_PUBLIC_GEO_DETECTION_ENABLED: z.coerce.boolean().default(false),
        NEXT_PUBLIC_GEO_REDIRECT_MODE: z.enum(["off", "suggest", "force"]).default("suggest"),
        NEXT_PUBLIC_FORCE_REDIRECT: z.coerce.boolean().default(false),
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: z.string().default("cf-ipcountry"),
        NEXT_PUBLIC_GEO_API_PROVIDER: z.enum(["ipapi", "ipinfo", "geoplugin"]).default("geoplugin"),
        NEXT_PUBLIC_GEO_API_TIMEOUT: z.coerce.number().default(5000),

        // ==========================================
        // 🔄 快取系統配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_CACHE_ENABLED: z.coerce.boolean().default(true),
        NEXT_PUBLIC_CACHE_CDN_ENABLED: z.coerce.boolean().default(false),
        NEXT_PUBLIC_CACHE_DEFAULT_TTL: z.coerce.number().default(3600),

        // ==========================================
        // ⚙️ 功能開關 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEV_MODE_ENABLED: z.coerce.boolean().default(false),
        NEXT_PUBLIC_MEMBERSHIP_ENABLED: z.coerce.boolean().default(false),

        // ==========================================
        // 🔧 開發與測試配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_USE_MOCK_API: z.coerce.boolean().default(true),
        NEXT_PUBLIC_MOCK_API_DELAY: z.coerce.number().default(100),
        NEXT_PUBLIC_MOCK_ERROR_ENABLED: z.coerce.boolean().default(false),
        NEXT_PUBLIC_MOCK_ERROR_RATE: z.coerce.number().min(0).max(1).default(0.0),

        // ==========================================
        // 📊 監控與日誌配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_LOGGING_ENABLED: z.coerce.boolean().default(false),
        NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: z.coerce.boolean().default(false),

        // ==========================================
        // ⏱️ 超時設定 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_TIMEOUT: z.coerce.number().default(30000),
        NEXT_PUBLIC_CONTENT_API_TIMEOUT: z.coerce.number().default(60000),

        // ==========================================
        // 🌐 API 與服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_API_BASE_URL: z.string().url().default("http://localhost:3000/api/ssr/"),

        // ==========================================
        // 🔧 外部服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    },

    /**
     * 運行時的環境變數來源。
     * 對於 Next.js，這應該總是 `process.env`。
     * createEnv 會自動處理 server-side 和 client-side 的變數分離。
     */
    runtimeEnv: process.env,

    /**
     * 如果你想在建置（build）階段，當缺少客戶端環境變數時就讓建置失敗，
     * 可以取消下面這行的註解。
     */
    // skipValidation: !!process.env.CI,
});