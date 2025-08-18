// JavaScript
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

/**
 * 環境變數配置 - 程式碼優先的配置管理
 *
 * 原則：
 * 1) 單一來源：共享預設值與鏡射配對集中定義，避免重複
 * 2) 安全可暴露：只鏡射非敏感、且前端需要的設定
 * 3) 兼容既有：保留既有鍵名與轉型策略，避免破壞行為
 */

/** 共享預設值（單一來源） */
const SHARED_DEFAULTS = {
    PROJECT_NAME: "測試網站",

    // 語系與路由
    DEFAULT_LANGUAGE: "zh-TW",
    SUPPORTED_LOCALES: "zh-TW",
    LOCALE_PREFIX_MODE: "as-needed", // 'always' | 'as-needed' | 'never'
    LOCALE_DETECTION_ENABLED: true,

    // 國際化與站點行為
    MULTI_LANGUAGE_ENABLED: true,
    INTERNATIONALIZATION_ENABLED: true,
    GEO_DETECTION_ENABLED: false,
    GEO_DETECTION_STRATEGY: "api-only", // 'cdn-only' | 'api-only' | 'cdn-fallback'
    FORCE_REDIRECT: false,

    // Provider 與行為策略
    GEO_API_PROVIDER: "geoplugin", // 'ipapi' | 'ipinfo' | 'geoplugin'

    // 快取與 CDN
    CACHE_ENABLED: true,
    CACHE_CDN_ENABLED: false,
    CACHE_DEFAULT_TTL: 3600, // 秒

    // 超時（毫秒）
    API_TIMEOUT: 5000,
    CONTENT_API_TIMEOUT: 10000,
    GEO_API_TIMEOUT: 800,

    // 前端顯示/功能
    API_VERSION: "1.0.0",
    DEV_MODE_ENABLED: false,
    MEMBERSHIP_ENABLED: false,

    // API Base
    API_BASE_URL: "http://localhost:3000",

    // Mock 預設
    MOCK_API_DELAY: 100,
    MOCK_ERROR_ENABLED: false,
    MOCK_ERROR_RATE: 0.0,

    // 日誌與監控
    API_LOGGING_ENABLED: true,
    PERFORMANCE_MONITORING_ENABLED: false,
};

/**
 * 鏡射清單（只定義一次，兩邊自動生成）
 * - serverKey / clientKey：鍵名對應（client 帶 NEXT_PUBLIC_）
 * - serverSchema / clientSchema：雙方 Zod schema（含預設與轉型）
 */
const MIRRORS = [
    // 專案顯示
    {
        serverKey: "PROJECT_NAME",
        clientKey: "NEXT_PUBLIC_PROJECT_NAME",
        serverSchema: z.string().default(SHARED_DEFAULTS.PROJECT_NAME),
        clientSchema: z.string().default(SHARED_DEFAULTS.PROJECT_NAME),
    },

    // 語系與路由
    {
        serverKey: "DEFAULT_LANGUAGE",
        clientKey: "NEXT_PUBLIC_DEFAULT_LOCALE",
        serverSchema: z.string().default(SHARED_DEFAULTS.DEFAULT_LANGUAGE),
        clientSchema: z.string().default(SHARED_DEFAULTS.DEFAULT_LANGUAGE),
    },
    {
        serverKey: "SUPPORTED_LOCALES",
        clientKey: "NEXT_PUBLIC_SUPPORTED_LOCALES",
        serverSchema: z.string().default(SHARED_DEFAULTS.SUPPORTED_LOCALES),
        clientSchema: z.string().default(SHARED_DEFAULTS.SUPPORTED_LOCALES),
    },
    {
        serverKey: "LOCALE_PREFIX_MODE",
        clientKey: "NEXT_PUBLIC_LOCALE_PREFIX_MODE",
        serverSchema: z.enum(["always", "as-needed", "never"]).default(SHARED_DEFAULTS.LOCALE_PREFIX_MODE),
        clientSchema: z.enum(["always", "as-needed", "never"]).default(SHARED_DEFAULTS.LOCALE_PREFIX_MODE),
    },
    {
        serverKey: "LOCALE_DETECTION_ENABLED",
        clientKey: "NEXT_PUBLIC_LOCALE_DETECTION_ENABLED",
        serverSchema: z.boolean().default(SHARED_DEFAULTS.LOCALE_DETECTION_ENABLED),
        clientSchema: z.boolean().default(SHARED_DEFAULTS.LOCALE_DETECTION_ENABLED),
    },

    // 國際化開關
    {
        serverKey: "MULTI_LANGUAGE_ENABLED",
        clientKey: "NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MULTI_LANGUAGE_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MULTI_LANGUAGE_ENABLED)),
    },
    {
        serverKey: "INTERNATIONALIZATION_ENABLED",
        clientKey: "NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.INTERNATIONALIZATION_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.INTERNATIONALIZATION_ENABLED)),
    },
    {
        serverKey: "GEO_DETECTION_ENABLED",
        clientKey: "NEXT_PUBLIC_GEO_DETECTION_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.GEO_DETECTION_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.GEO_DETECTION_ENABLED)),
    },
    {
        serverKey: "FORCE_REDIRECT",
        clientKey: "NEXT_PUBLIC_FORCE_REDIRECT",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.FORCE_REDIRECT)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.FORCE_REDIRECT)),
    },

    // Provider 與行為策略（providers）
    {
        serverKey: "GEO_API_PROVIDER",
        clientKey: "NEXT_PUBLIC_GEO_API_PROVIDER",
        serverSchema: z.enum(["ipapi", "ipinfo", "geoplugin"]).default(SHARED_DEFAULTS.GEO_API_PROVIDER),
        clientSchema: z.enum(["ipapi", "ipinfo", "geoplugin"]).default(SHARED_DEFAULTS.GEO_API_PROVIDER),
    },

    // 新增：地理偵測策略（鏡射）
    {
        serverKey: "GEO_DETECTION_STRATEGY",
        clientKey: "NEXT_PUBLIC_GEO_DETECTION_STRATEGY",
        serverSchema: z.enum(["cdn-only", "api-only", "cdn-fallback"]).default(SHARED_DEFAULTS.GEO_DETECTION_STRATEGY),
        clientSchema: z.enum(["cdn-only", "api-only", "cdn-fallback"]).default(SHARED_DEFAULTS.GEO_DETECTION_STRATEGY),
    },

    // 快取
    {
        serverKey: "CACHE_ENABLED",
        clientKey: "NEXT_PUBLIC_CACHE_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.CACHE_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.CACHE_ENABLED)),
    },
    {
        serverKey: "CACHE_CDN_ENABLED",
        clientKey: "NEXT_PUBLIC_CACHE_CDN_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.CACHE_CDN_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.CACHE_CDN_ENABLED)),
    },
    {
        serverKey: "CACHE_DEFAULT_TTL",
        clientKey: "NEXT_PUBLIC_CACHE_DEFAULT_TTL",
        serverSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.CACHE_DEFAULT_TTL)),
        clientSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.CACHE_DEFAULT_TTL)),
    },

    // 超時
    {
        serverKey: "API_TIMEOUT",
        clientKey: "NEXT_PUBLIC_API_TIMEOUT",
        serverSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.API_TIMEOUT)),
        clientSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.API_TIMEOUT * 6)), // 前端較寬鬆
    },
    {
        serverKey: "CONTENT_API_TIMEOUT",
        clientKey: "NEXT_PUBLIC_CONTENT_API_TIMEOUT",
        serverSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.CONTENT_API_TIMEOUT)),
        clientSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.CONTENT_API_TIMEOUT * 6)),
    },
    {
        serverKey: "GEO_API_TIMEOUT",
        clientKey: "NEXT_PUBLIC_GEO_API_TIMEOUT",
        serverSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.GEO_API_TIMEOUT)),
        clientSchema: z.string().transform((v) => parseInt(v)).default(String(5000)), // 前端 5s
    },

    // 新增：API Base（鏡射）
    {
        serverKey: "API_BASE_URL",
        clientKey: "NEXT_PUBLIC_API_BASE_URL",
        serverSchema: z.string().default(SHARED_DEFAULTS.API_BASE_URL),
        clientSchema: z.string().default(SHARED_DEFAULTS.API_BASE_URL),
    },

    // 新增：API 版本（鏡射）
    {
        serverKey: "API_VERSION",
        clientKey: "NEXT_PUBLIC_API_VERSION",
        serverSchema: z.string().default(SHARED_DEFAULTS.API_VERSION),
        clientSchema: z.string().default(SHARED_DEFAULTS.API_VERSION),
    },

    // 前端顯示/功能
    {
        serverKey: "MEMBERSHIP_ENABLED",
        clientKey: "NEXT_PUBLIC_MEMBERSHIP_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MEMBERSHIP_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MEMBERSHIP_ENABLED)),
    },

    // 新增：Mock 相關（鏡射）
    {
        serverKey: "MOCK_API_DELAY",
        clientKey: "NEXT_PUBLIC_MOCK_API_DELAY",
        serverSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.MOCK_API_DELAY)),
        clientSchema: z.string().transform((v) => parseInt(v)).default(String(SHARED_DEFAULTS.MOCK_API_DELAY)),
    },
    {
        serverKey: "MOCK_ERROR_ENABLED",
        clientKey: "NEXT_PUBLIC_MOCK_ERROR_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MOCK_ERROR_ENABLED)),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.MOCK_ERROR_ENABLED)),
    },
    {
        serverKey: "MOCK_ERROR_RATE",
        clientKey: "NEXT_PUBLIC_MOCK_ERROR_RATE",
        serverSchema: z.string().transform((v) => parseFloat(v)).default(String(SHARED_DEFAULTS.MOCK_ERROR_RATE)),
        clientSchema: z.string().transform((v) => parseFloat(v)).default(String(SHARED_DEFAULTS.MOCK_ERROR_RATE)),
    },

    // 日誌與監控（只鏡射非敏感開關）
    {
        serverKey: "API_LOGGING_ENABLED",
        clientKey: "NEXT_PUBLIC_API_LOGGING_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.API_LOGGING_ENABLED)), // 改為使用 SHARED_DEFAULTS
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.API_LOGGING_ENABLED)),
    },
    {
        serverKey: "PERFORMANCE_MONITORING_ENABLED",
        clientKey: "NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED",
        serverSchema: z.string().transform((v) => v === "true").default("false"),
        clientSchema: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.PERFORMANCE_MONITORING_ENABLED)),
    },
];

/** 將 MIRRORS 轉為 server/client 片段 */
function buildMirrorPatches(mirrors) {
    const serverPatch = {};
    const clientPatch = {};

    for (const m of mirrors) {
        serverPatch[m.serverKey] = m.serverSchema;
        clientPatch[m.clientKey] = m.clientSchema;
    }
    return { serverPatch, clientPatch };
}

const { serverPatch: mirroredServer, clientPatch: mirroredClient } = buildMirrorPatches(MIRRORS);

/**
 * 伺服器端環境變數配置（非鏡射或僅伺服器使用的項目仍在此維護）
 */
const server = {
    // —— 鏡射項（自動生成） ——
    ...mirroredServer,

    // —— 僅伺服器使用或不需鏡射 ——
    // 專案核心
    PROJECT_CODE: z.string().default("minmax2025"),

    // 國家子網域對應表
    COUNTRY_SUBDOMAIN_MAP: z.string().default("{}"),

    // 快取策略（伺服器專用）
    I18N_CACHE_STRATEGY: z.enum(["memory", "redis", "none"]).default("memory"),

    // API 與外部服務（伺服器專用）
    EXTERNAL_API_BASE_URL: z.string().default("https://v5.jeffy.test"),

    // 開發與測試（伺服器專用，不鏡射 USE_MOCK_API）
    USE_MOCK_API: z.string().transform((v) => v === "true").default("true"),

    // 敏感資訊（請放 .env，並勿鏡射到 client）
    // DATABASE_URL: z.string().optional(),
    // REDIS_URL: z.string().optional(),
    // API_SECRET_KEY: z.string().optional(),
    // JWT_SECRET: z.string().optional(),
    // ADMIN_API_KEY: z.string().optional(),
    // GEO_API_KEY: z.string().optional(),
};

/**
 * 客戶端環境變數配置（所有鍵必須 NEXT_PUBLIC_ 前綴）
 */
const client = {
    // —— 鏡射項（自動生成） ——
    ...mirroredClient,

    // —— 僅前端使用或不需鏡射 ——
    NEXT_PUBLIC_DEV_MODE_ENABLED: z.string().transform((v) => v === "true").default(String(SHARED_DEFAULTS.DEV_MODE_ENABLED)),
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_CDN_COUNTRY_HEADER: z.string().default("cf-ipcountry"),
};

// 建構 runtimeEnv
const serverKeys = Object.keys(server);
const clientKeys = Object.keys(client);

export const env = createEnv({
    server,
    client,
    runtimeEnv: {
        ...Object.fromEntries(serverKeys.map((k) => [k, process.env[k]])),
        ...Object.fromEntries(clientKeys.map((k) => [k, process.env[k]])),
    },
});