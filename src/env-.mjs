import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境變數配置 - 程式碼優先的配置管理
 *
 * 設計原則：
 * 1. env.mjs 包含所有預設值和業務邏輯配置
 * 2. .env 檔案只覆寫需要變更或敏感的設定
 * 3. 開發時依賴預設值，生產時用環境變數覆蓋
 */

/**
 * 伺服器端環境變數配置
 * 這些變數只在伺服器端使用，確保安全性，不會暴露給客戶端
 */
const server = {
    // ==========================================
    // 國際化與語系配置
    // 控制多語系、地理位置偵測及語系重導功能
    // ==========================================

    /** 前端國家站點判斷 開關 */
    INTERNATIONALIZATION_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 多語系功能開關 */
    MULTI_LANGUAGE_ENABLED: z.string().transform((val) => val === "true").default("true"),

    /** ip 地理偵測功能開關 */
    GEO_DETECTION_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 強制重導開關 */
    FORCE_REDIRECT: z.string().transform((val) => val === "true").default("false"),

    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================

    /** 專案代碼 */
    PROJECT_CODE: z.string().default("minmax2025"),

    /** routing - 預設語系 */
    DEFAULT_LANGUAGE: z.string().default("zh-TW"),

    /** routing - 支援的語系 */
    SUPPORTED_LOCALES: z.string().default('zh-TW'),

    /** routing - 語系前綴  預設 不加*/
    LOCALE_PREFIX_MODE: z.enum(['always', 'as-needed', 'never']).default('as-needed'),

    /** routing - 啟用語系檢測 */
    LOCALE_DETECTION_ENABLED: z.boolean().default(true),

    /** 國家子網域對應表 (JSON) {"TW": "tw", "US": "us", "JP": "jp"} */
    COUNTRY_SUBDOMAIN_MAP: z.string().default('{}'),

    // ==========================================
    // 🔄 快取系統配置
    // 控制整體快取策略和生存時間
    // ==========================================

    /** 快取系統總開關 */
    CACHE_ENABLED: z.string().transform((val) => val === "true").default("true"),

    /** CDN 快取協作開關 */
    CACHE_CDN_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 國際化快取策略 */
    I18N_CACHE_STRATEGY: z.enum(["memory", "redis", "none"]).default("memory"),

    /** 快取預設生存時間 (秒) */
    CACHE_DEFAULT_TTL: z.string().transform((val) => parseInt(val)).default("3600"),

    // ==========================================
    // API 與外部服務配置
    // API 網址、超時設定及第三方服務配置
    // ==========================================

    /** 外部後端 API 基礎網址 */
    API_BASE_URL: z.string().default("https://v5.jeffy.test"),

    /** 一般 API 請求超時 (毫秒) */
    API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("5000"),

    /** 內容 API 請求超時 (毫秒) */
    CONTENT_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("10000"),

    /** 地理位置 API 超時 (毫秒) */
    GEO_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("800"),

    /** 地理位置服務提供商 */
    GEO_API_PROVIDER: z.enum(["ipapi", "ipinfo", "geoplugin"]).default("geoplugin"),

    // ==========================================
    // 開發與測試配置
    // Mock API、錯誤模擬及開發工具設定
    // ==========================================

    /** Mock API 開關 */
    USE_MOCK_API: z.string().transform((val) => val === "true").default("true"),

    /** Mock API 延遲模擬 (毫秒) */
    MOCK_API_DELAY: z.string().transform((val) => parseInt(val)).default("100"),

    /** 錯誤模擬開關 */
    MOCK_ERROR_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 錯誤模擬機率 (0.0-1.0) */
    MOCK_ERROR_RATE: z.string().transform((val) => parseFloat(val)).default("0.0"),

    // ==========================================
    // 監控與日誌配置
    // API 日誌記錄及效能監控開關
    // ==========================================

    /** API 請求日誌記錄 */
    API_LOGGING_ENABLED: z.string().transform((val) => val === "true").default("true"),

    /** 效能監控開關 */
    PERFORMANCE_MONITORING_ENABLED: z.string().transform((val) => val === "true").default("false"),

    // ==========================================
    // 功能開關
    // 各項業務功能的開關控制
    // ==========================================

    /** 會員功能開關 */
    MEMBERSHIP_ENABLED: z.string().transform((val) => val === "true").default("false"),

    // ==========================================
    // 🔐 敏感資訊
    // 資料庫、API 金鑰等敏感資料，僅在 .env 中設定
    // ==========================================

    /** 資料庫連線字串 */
    //DATABASE_URL: z.string().optional(),

    /** Redis 連線字串 */
    //REDIS_URL: z.string().optional(),

    /** API 密鑰 */
    //API_SECRET_KEY: z.string().optional(),

    /** JWT 簽名密鑰 */
    // JWT_SECRET: z.string().optional(),

    /** 管理員 API 金鑰 */
    //ADMIN_API_KEY: z.string().optional(),

    /** 地理位置服務 API 金鑰 */
    //GEO_API_KEY: z.string().optional(),
};

/**
 * 客戶端環境變數配置
 * 這些變數會暴露給瀏覽器，請避免包含敏感資訊
 * 所有變數都必須以 NEXT_PUBLIC_ 前綴開始
 */

const client = {
    // ==========================================
    // 🏗️ 專案基本資訊
    // 前端顯示用的專案資訊和基礎配置
    // ==========================================

    /** 專案顯示名稱 */
    NEXT_PUBLIC_PROJECT_NAME: z.string().default("測試網站"),

    /** routing - 預設語系 */
    NEXT_PUBLIC_DEFAULT_LOCALE: z.string().default("zh-TW"),

    /** routing - 支援的語系 */
    NEXT_PUBLIC_SUPPORTED_LOCALES: z.string().default('zh-TW'),

    /** routing - 語系前綴  預設 不加*/
    NEXT_PUBLIC_LOCALE_PREFIX_MODE: z.enum(['always', 'as-needed', 'never']).default('as-needed'),

    /** routing - 啟用語系檢測 */
    NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: z.boolean().default(true),

    /** API 版本號 */
    NEXT_PUBLIC_API_VERSION: z.string().default("1.0.0"),

    // ==========================================
    // 🌐 API 與服務配置
    // 客戶端 API 呼叫相關設定
    // ==========================================

    /** 前端 API 基礎網址 */
    NEXT_PUBLIC_API_BASE_URL: z.string().default("http://localhost:3000/api/ssr/"),

    // ==========================================
    // 🌍 國際化功能開關
    // 前端國際化相關的功能控制
    // ==========================================

    /** 前端多語系功能開關 */
    NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: z.string().transform((val) => val === "true").default("true"),

    /** 前端國家站點判斷 開關 */
    NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: z.string().transform((val) => val === "true").default("true"),

    // ==========================================
    // 🗺️ 地理位置偵測配置
    // 使用者地理位置偵測與重導邏輯設定
    // ==========================================

    /** 地理位置偵測策略 */
    NEXT_PUBLIC_GEO_DETECTION_STRATEGY: z.enum(["cdn-only", "api-only", "cdn-fallback"]).default("api-only"),

    /** ip 地理偵測功能開關 */
    NEXT_PUBLIC_GEO_DETECTION_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 地理重導模式 */
    NEXT_PUBLIC_GEO_REDIRECT_MODE: z.enum(["off", "suggest", "force"]).default("suggest"),

    /** 強制重導開關 */
    NEXT_PUBLIC_FORCE_REDIRECT: z.string().transform((val) => val === "true").default("false"),

    /** CDN 國家標頭名稱 */
    NEXT_PUBLIC_CDN_COUNTRY_HEADER: z.string().default("cf-ipcountry"),

    // ==========================================
    // 🔄 快取系統配置
    // 前端快取策略和生存時間
    // ==========================================

    /** 前端快取功能開關 */
    NEXT_PUBLIC_CACHE_ENABLED: z.string().transform((val) => val === "true").default("true"),

    /** 前端 CDN 快取協作開關 */
    NEXT_PUBLIC_CACHE_CDN_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 前端快取預設生存時間 (秒) */
    NEXT_PUBLIC_CACHE_DEFAULT_TTL: z.string().transform((val) => parseInt(val)).default("3600"),

    // ==========================================
    // ⚙️ 前端功能配置
    // 前端特有的功能開關和配置
    // ==========================================

    /** 開發模式開關 */
    NEXT_PUBLIC_DEV_MODE_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 會員功能開關 */
    NEXT_PUBLIC_MEMBERSHIP_ENABLED: z.string().transform((val) => val === "true").default("false"),

    // ==========================================
    // 🔧 開發與測試配置
    // 前端可見的開發工具設定
    // ==========================================

    /** 前端 Mock API 開關 */
    NEXT_PUBLIC_USE_MOCK_API: z.string().transform((val) => val === "true").default("true"),

    /** 前端 Mock API 延遲模擬 (毫秒) */
    NEXT_PUBLIC_MOCK_API_DELAY: z.string().transform((val) => parseInt(val)).default("100"),

    /** 前端錯誤模擬開關 */
    NEXT_PUBLIC_MOCK_ERROR_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 前端錯誤模擬機率 (0.0-1.0) */
    NEXT_PUBLIC_MOCK_ERROR_RATE: z.string().transform((val) => parseFloat(val)).default("0.0"),

    // ==========================================
    // 📊 監控與日誌配置
    // 前端監控和日誌記錄設定
    // ==========================================

    /** 前端 API 請求日誌記錄 */
    NEXT_PUBLIC_API_LOGGING_ENABLED: z.string().transform((val) => val === "true").default("false"),

    /** 前端效能監控開關 */
    NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: z.string().transform((val) => val === "true").default("false"),

    // ==========================================
    // 🔧 外部服務配置
    // 第三方服務的公開配置項目
    // ==========================================

    /** 錯誤追蹤服務 DSN */
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),

    /** 前端地理位置服務提供商 */
    NEXT_PUBLIC_GEO_API_PROVIDER: z.enum(["ipapi", "ipinfo", "geoplugin"]).default("geoplugin"),

    // ==========================================
    // ⏱️ 超時設定
    // 前端 API 請求超時配置
    // ==========================================

    /** 前端一般 API 請求超時 (毫秒) */
    NEXT_PUBLIC_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("30000"),

    /** 前端內容 API 請求超時 (毫秒) */
    NEXT_PUBLIC_CONTENT_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("60000"),

    /** 前端地理位置 API 超時 (毫秒) */
    NEXT_PUBLIC_GEO_API_TIMEOUT: z.string().transform((val) => parseInt(val)).default("5000"),
};

// 取得所有 schema 的鍵名
const serverKeys = Object.keys(server);
const clientKeys = Object.keys(client);

export const env = createEnv({
    server,
    client,

    /**
     * 運行時環境變數映射
     * 精確地從 process.env 映射我們定義的變數
     */
    runtimeEnv: {
        ...Object.fromEntries(
            serverKeys.map(key => [key, process.env[key]])
        ),
        ...Object.fromEntries(
            clientKeys.map(key => [key, process.env[key]])
        ),
    },
});