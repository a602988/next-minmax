module.exports = {

"[project]/src/i18n/routing.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-rsc] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // 支援的語系 - 這個會被 API 動態覆蓋
    locales: [
        'zh-TW',
        'zh-CN',
        'en',
        'ja'
    ],
    // 預設語系 - 這個也會被 API 動態覆蓋
    defaultLocale: 'zh-TW',
    // 預設語系不加前綴
    localePrefix: 'as-needed',
    // 啟用語系檢測
    localeDetection: true
});
}),
"[project]/src/env.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
;
/**
 * 環境變數配置 - 程式碼優先的配置管理
 *
 * 設計原則：
 * 1. env.mjs 包含所有預設值和業務邏輯配置
 * 2. .env 檔案只覆寫需要變更或敏感的設定
 * 3. 開發時依賴預設值，生產時用環境變數覆蓋
 */ /**
 * 伺服器端環境變數配置
 * 這些變數只在伺服器端使用，確保安全性，不會暴露給客戶端
 */ const server = {
    // ==========================================
    // 國際化與語系配置
    // 控制多語系、地理位置偵測及語系重導功能
    // ==========================================
    /** 國際化功能總開關 */ INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 多語系功能開關 */ MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** ip 地理偵測功能開關 */ GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 強制重導開關 */ FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================
    /** 專案代碼 */ PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
    /** 預設語系 */ DEFAULT_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** 國家子網域對應表 (JSON) {"TW": "tw", "US": "us", "JP": "jp"} */ COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
    // ==========================================
    // 🔄 快取系統配置
    // 控制整體快取策略和生存時間
    // ==========================================
    /** 快取系統總開關 */ CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** CDN 快取協作開關 */ CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 國際化快取策略 */ I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "memory",
        "redis",
        "none"
    ]).default("memory"),
    /** 快取預設生存時間 (秒) */ CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("3600"),
    // ==========================================
    // API 與外部服務配置
    // API 網址、超時設定及第三方服務配置
    // ==========================================
    /** 外部後端 API 基礎網址 */ EXTERNAL_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("https://v5.jeffy.test"),
    /** 一般 API 請求超時 (毫秒) */ API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("5000"),
    /** 內容 API 請求超時 (毫秒) */ CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("10000"),
    /** 地理位置 API 超時 (毫秒) */ GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("800"),
    /** 地理位置服務提供商 */ GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ipapi",
        "ipinfo",
        "geoplugin"
    ]).default("geoplugin"),
    // ==========================================
    // 開發與測試配置
    // Mock API、錯誤模擬及開發工具設定
    // ==========================================
    /** Mock API 開關 */ USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** Mock API 延遲模擬 (毫秒) */ MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("100"),
    /** 錯誤模擬開關 */ MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 錯誤模擬機率 (0.0-1.0) */ MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseFloat(val)).default("0.0"),
    // ==========================================
    // 監控與日誌配置
    // API 日誌記錄及效能監控開關
    // ==========================================
    /** API 請求日誌記錄 */ API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 效能監控開關 */ PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 功能開關
    // 各項業務功能的開關控制
    // ==========================================
    /** 會員功能開關 */ MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false")
};
/**
 * 客戶端環境變數配置
 * 這些變數會暴露給瀏覽器，請避免包含敏感資訊
 * 所有變數都必須以 NEXT_PUBLIC_ 前綴開始
 */ const client = {
    // ==========================================
    // 🏗️ 專案基本資訊
    // 前端顯示用的專案資訊和基礎配置
    // ==========================================
    /** 專案顯示名稱 */ NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("demo測試網站"),
    /** 前端預設語系 */ NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** API 版本號 */ NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
    // ==========================================
    // 🌐 API 與服務配置
    // 客戶端 API 呼叫相關設定
    // ==========================================
    /** 前端 API 基礎網址 */ NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000"),
    // ==========================================
    // 🌍 國際化功能開關
    // 前端國際化相關的功能控制
    // ==========================================
    /** 前端多語系功能開關 */ NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    // ==========================================
    // 🗺️ 地理位置偵測配置
    // 使用者地理位置偵測與重導邏輯設定
    // ==========================================
    /** 地理位置偵測策略 */ NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "cdn-only",
        "api-only",
        "cdn-fallback"
    ]).default("api-only"),
    /** 地理重導模式 */ NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "off",
        "suggest",
        "force"
    ]).default("suggest"),
    /** CDN 國家標頭名稱 */ NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
    // ==========================================
    // ⚙️ 前端功能配置
    // 前端特有的功能開關和配置
    // ==========================================
    /** 前端快取功能開關 */ NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 開發模式開關 */ NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 🔧 外部服務配置
    // 第三方服務的公開配置項目
    // ==========================================
    /** 錯誤追蹤服務 DSN */ NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
};
// 取得所有 schema 的鍵名
const serverKeys = Object.keys(server);
const clientKeys = Object.keys(client);
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
    server,
    client,
    /**
     * 運行時環境變數映射
     * 精確地從 process.env 映射我們定義的變數
     */ runtimeEnv: {
        ...Object.fromEntries(serverKeys.map((key)=>[
                key,
                process.env[key]
            ])),
        ...Object.fromEntries(clientKeys.map((key)=>[
                key,
                process.env[key]
            ]))
    }
});
}),
"[project]/src/config/app.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "APP_CONFIG": ()=>APP_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // API 配置
    API: {
        BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
        EXTERNAL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
        TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 功能開關
    FEATURES: {
        INTERNATIONALIZATION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED,
        GEO_DETECTION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].FORCE_REDIRECT,
        MULTI_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        MEMBERSHIP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MEMBERSHIP_ENABLED,
        CACHE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED
    },
    // 快取配置
    CACHE: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
        CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
    },
    // 地理位置配置
    GEO: {
        DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_API_PROVIDER,
        API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // Mock 與測試配置
    MOCK: {
        USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
        API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY,
        ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED,
        ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
    },
    // 開發與監控
    DEV: {
        API_LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
        PERFORMANCE_MONITORING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PERFORMANCE_MONITORING_ENABLED,
        DEV_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEV_MODE_ENABLED
    },
    // 語系配置
    LOCALE: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
        CLIENT_DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
        MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP
    }
};
}),
"[project]/src/config/locale.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LOCALE_CONFIG": ()=>LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
;
const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales,
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
    FALLBACK_LOCALE: 'zh-TW',
    // 前端語系配置
    CLIENT_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
    MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
    // 國家與子網域映射
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP),
    // 語系偵測設定
    DETECTION: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        GEO_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        CACHE_TTL: 3600
    },
    // 快取配置
    CACHE: {
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        TTL: 3600
    },
    // 語系驗證函數：檢查語系是否為支援的語系
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale);
    },
    // 取得國家對應的子網域：根據國家代碼取得對應的子網域
    getSubdomainByCountry: (country)=>{
        const map = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
};
}),
"[project]/src/config/api.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const API_CONFIG = {
    // 基礎配置
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
    EXTERNAL_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // 超時設定
    TIMEOUT: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 重試設定
    RETRY: {
        ATTEMPTS: 3,
        DELAY: 1000,
        EXPONENTIAL_BACKOFF: true
    },
    // 模式設定
    USE_MOCK: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
    LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
    // API 端點 - Mock 與正式版本統一管理
    ENDPOINTS: {
        // Mock API 端點 (Next.js API Routes)
        MOCK: {
            LANGUAGE: '/api/ssr/languages',
            LOCALES: '/api/ssr/locales',
            SYSTEM_MENUS: '/api/ssr/system-menus',
            WEB_DATA: '/api/ssr/web-data',
            DETAIL: '/api/ssr/detail'
        },
        // 正式 API 端點 (外部後端)
        EXTERNAL: {
            LANGUAGE: '/api/v1/languages',
            LOCALES: '/api/v1/locales',
            SYSTEM_MENUS: '/api/v1/system-menus',
            WEB_DATA: '/api/v1/web-data',
            DETAIL: '/api/v1/detail'
        }
    }
};
}),
"[project]/src/config/cache.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 快取系統配置檔案
 *
 * **主要職責**：
 * - 統一管理所有快取相關的配置設定
 * - 定義各種資料類型的快取策略（TTL、標籤、描述）
 * - 提供快取鍵值生成和標籤管理的輔助函數
 *
 * **配置內容**：
 * - **基礎設定**：快取開關、CDN協作、預設TTL、快取策略
 * - **Redis設定**：連線配置、鍵值前綴、分隔符號
 * - **資料類型**：8種快取資料類型的完整配置（語言、選單、頁面等）
 *
 * **提供功能**：
 * - 取得特定資料類型的快取配置、TTL、標籤
 * - 根據標籤查找相關的資料類型
 * - 生成統一格式的快取鍵值
 * - 快取配置摘要（用於除錯和監控）
 *
 * **設計特點**：
 * - 單一數據源：所有快取設定集中在 CACHE_DATA_TYPES
 * - 自動同步：TTL 和 TAGS 從主配置自動生成，避免不一致
 * - 類型安全：完整的 TypeScript 類型定義和推斷
 * - 易於維護：新增快取類型只需在一個地方定義
 */ __turbopack_context__.s({
    "CACHE_CONFIG": ()=>CACHE_CONFIG,
    "getAllCacheTags": ()=>getAllCacheTags,
    "getCacheConfig": ()=>getCacheConfig,
    "getCacheConfigSummary": ()=>getCacheConfigSummary,
    "getCacheTTL": ()=>getCacheTTL,
    "getCacheTags": ()=>getCacheTags,
    "getDataTypesByTag": ()=>getDataTypesByTag
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 */ const CACHE_DATA_TYPES = {
    LANGUAGES: {
        ttl: 7200,
        tags: [
            'languages',
            'static-data'
        ],
        description: '語言資料快取'
    },
    LOCALES: {
        ttl: 7200,
        tags: [
            'locales',
            'static-data'
        ],
        description: '地區設定快取'
    },
    MENUS: {
        ttl: 3600,
        tags: [
            'menus',
            'navigation'
        ],
        description: '選單資料快取'
    },
    WEB_DATA: {
        ttl: 3600,
        tags: [
            'web-data',
            'static-data'
        ],
        description: '網站資料快取'
    },
    PAGES: {
        ttl: 1800,
        tags: [
            'pages',
            'content'
        ],
        description: '頁面內容快取'
    },
    GEO_DATA: {
        ttl: 1800,
        tags: [
            'geo-data',
            'location'
        ],
        description: '地理位置資料快取'
    },
    USER_DATA: {
        ttl: 600,
        tags: [
            'user-data',
            'dynamic-data'
        ],
        description: '使用者資料快取'
    },
    API_RESPONSE: {
        ttl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
        tags: [
            'api-response'
        ],
        description: 'API 回應快取'
    }
};
const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
    CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
    DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
    STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
    // Redis 配置
    REDIS: {
        URL: undefined,
        PREFIX: 'minmax:',
        KEY_SEPARATOR: ':'
    },
    // 從 CACHE_DATA_TYPES 自動生成 TTL 和 TAGS
    TTL: {
        LANGUAGES: CACHE_DATA_TYPES.LANGUAGES.ttl,
        LOCALES: CACHE_DATA_TYPES.LOCALES.ttl,
        MENUS: CACHE_DATA_TYPES.MENUS.ttl,
        WEB_DATA: CACHE_DATA_TYPES.WEB_DATA.ttl,
        PAGES: CACHE_DATA_TYPES.PAGES.ttl,
        GEO_DATA: CACHE_DATA_TYPES.GEO_DATA.ttl,
        USER_DATA: CACHE_DATA_TYPES.USER_DATA.ttl,
        API_RESPONSE: CACHE_DATA_TYPES.API_RESPONSE.ttl
    },
    TAGS: {
        LANGUAGES: CACHE_DATA_TYPES.LANGUAGES.tags,
        LOCALES: CACHE_DATA_TYPES.LOCALES.tags,
        MENUS: CACHE_DATA_TYPES.MENUS.tags,
        WEB_DATA: CACHE_DATA_TYPES.WEB_DATA.tags,
        PAGES: CACHE_DATA_TYPES.PAGES.tags,
        GEO_DATA: CACHE_DATA_TYPES.GEO_DATA.tags,
        USER_DATA: CACHE_DATA_TYPES.USER_DATA.tags,
        API_RESPONSE: CACHE_DATA_TYPES.API_RESPONSE.tags
    },
    // 快取鍵值生成函數
    generateKey: (type, identifier, locale)=>{
        const parts = [
            CACHE_CONFIG.REDIS.PREFIX,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(CACHE_CONFIG.REDIS.KEY_SEPARATOR);
    }
};
function getCacheConfig(type) {
    return CACHE_DATA_TYPES[type];
}
function getCacheTTL(type) {
    return CACHE_DATA_TYPES[type].ttl * 1000;
}
function getCacheTags(type) {
    return CACHE_DATA_TYPES[type].tags;
}
function getDataTypesByTag(tag) {
    return Object.entries(CACHE_DATA_TYPES).filter(([_, config])=>config.tags.includes(tag)).map(([key])=>key);
}
function getAllCacheTags() {
    const allTags = Object.values(CACHE_DATA_TYPES).flatMap((config)=>config.tags);
    return [
        ...new Set(allTags)
    ];
}
function getCacheConfigSummary() {
    return Object.entries(CACHE_DATA_TYPES).map(([type, config])=>({
            type,
            ttl: `${config.ttl}s (${config.ttl / 60}min)`,
            tags: config.tags.join(', '),
            description: config.description
        }));
}
}),
"[project]/src/config/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-rsc] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-rsc] (ecmascript)");
// 導出 API 配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BaseApiService": ()=>BaseApiService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
;
class BaseApiService {
    serviceName;
    constructor(serviceName){
        this.serviceName = serviceName;
    }
    /**
     * 通用的 API 請求方法
     * @param endpoint 端點配置 { mock: string, external: string }
     * @param options 額外的 fetch 選項
     * @returns Promise<T>
     */ async apiRequest(endpoint, options = {}) {
        const url = this.buildApiUrl(endpoint);
        try {
            this.logApiCall(url);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                // 只有正式 API 需要超時設定
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK ? {} : {
                    signal: AbortSignal.timeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].TIMEOUT.DEFAULT)
                },
                ...options
            });
            if (!response.ok) {
                throw new Error(`${this.serviceName} API 請求失敗: ${response.status} ${response.statusText}`);
            }
            const apiResponse = await response.json();
            // 處理 API 回應格式 { code, message, data }
            const data = apiResponse.data || apiResponse; // 兼容不同的回應格式
            this.logSuccess(data);
            return data;
        } catch (error) {
            this.logError(error);
            throw error;
        }
    }
    /**
     * 根據環境變數建構 API 網址
     */ buildApiUrl(endpoint) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK) {
            // Mock API - 使用內部 Next.js API Routes
            return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}${endpoint.mock}`;
        } else {
            // 正式 API - 使用外部後端 API
            return `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].EXTERNAL_BASE_URL}${endpoint.external}`;
        }
    }
    /**
     * 記錄 API 呼叫日誌
     */ logApiCall(url) {
        console.log(`🌐 ${this.serviceName} API 呼叫: ${url} (Mock: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK})`);
    }
    /**
     * 記錄成功日誌 - 子類別可以覆寫自定義格式
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            console.log(`✅ ${this.serviceName}資料載入成功`);
        }
    }
    /**
     * 記錄錯誤日誌
     */ logError(error) {
        console.error(`❌ ${this.serviceName} API 呼叫失敗:`, error);
    }
}
}),
"[project]/src/services/language.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "languageService": ()=>languageService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
;
;
/**
 * 支援語系服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */ class LanguageService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('支援語系');
    }
    /**
     * 取得支援的語系清單
     * @returns Promise<Language[]>
     */ async getLanguages() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.MOCK.LANGUAGE,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.EXTERNAL.LANGUAGE
        };
        return this.apiRequest(endpoint);
    }
    /**
     * 覆寫成功日誌，顯示語系數量
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            console.log(`✅ ${this.serviceName}資料載入成功:`, data.length, '個語系');
        }
    }
}
const languageService = new LanguageService();
}),
"[project]/src/services/i18n-integration.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "I18nIntegrationService": ()=>I18nIntegrationService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-rsc] (ecmascript)");
;
;
;
class I18nIntegrationService {
    static cachedLanguages = null;
    static lastFetchTime = 0;
    /**
     * 取得動態語系清單並快取
     */ static async getLanguages() {
        const now = Date.now();
        const cacheExpiry = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].CACHE.TTL * 1000; // 轉為毫秒
        // 檢查快取是否有效
        if (this.cachedLanguages && now - this.lastFetchTime < cacheExpiry) {
            return this.cachedLanguages;
        }
        try {
            const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
            this.cachedLanguages = languages;
            this.lastFetchTime = now;
            return languages;
        } catch (error) {
            console.warn('📦 無法載入動態語系，使用靜態配置', error);
            // 降級處理：返回靜態配置的語系
            return this.getStaticFallbackLanguages();
        }
    }
    /**
     * 將 Language[] 轉換為 next-intl 需要的 locales 陣列
     */ static async getSupportedLocales() {
        const languages = await this.getLanguages();
        return languages.map((lang)=>lang.id);
    }
    /**
     * 取得預設語系
     */ static async getDefaultLocale() {
        const languages = await I18nIntegrationService.getLanguages();
        const defaultLang = languages.find((lang)=>lang.default);
        return defaultLang?.id || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].DEFAULT_LOCALE;
    }
    /**
     * 靜態備援語系資料
     */ /**
     * 靜態備援語系資料
     */ static getStaticFallbackLanguages() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales.map((locale, index)=>({
                id: locale,
                title: locale.toUpperCase(),
                native: locale.toUpperCase(),
                icon: '🌐',
                default: locale === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale
            }));
    }
}
}),
"[project]/src/i18n/request.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Next.js 國際化請求配置
 * 
 * 處理流程：
 * 1. 使用者訪問帶有語言參數的路由 (例如: /zh/about, /en/about)
 * 2. Next.js 從 URL 路由段中提取語言識別碼
 * 3. 驗證語言識別碼是否在支援的語言清單中
 * 4. 動態載入對應的語言資源檔案
 * 5. 將語言配置和翻譯資源提供給應用程式
 */ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/core.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/i18n-integration.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    const requested = await requestLocale;
    let locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    // 🔄 動態語系驗證流程
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].DETECTION.ENABLED) {
        try {
            // 取得動態語系清單
            const supportedLocales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getSupportedLocales();
            const dynamicDefaultLocale = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getDefaultLocale();
            // 使用動態語系清單驗證
            if (requested && supportedLocales.includes(requested)) {
                // 確保 requested 是有效的 locale
                locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, requested) ? requested : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
            } else {
                // 確保 dynamicDefaultLocale 是有效的 locale
                locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, dynamicDefaultLocale) ? dynamicDefaultLocale : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
            }
            console.log(`🌍 動態語系決策: 請求=${requested} → 最終=${locale}`);
        } catch (error) {
            console.warn('⚠️ 動態語系載入失敗，使用靜態配置', error);
            // 降級至靜態驗證
            locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, requested) ? requested : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
        }
    } else {
        // 使用靜態驗證
        locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, requested) ? requested : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    return {
        locale,
        messages: (await __turbopack_context__.f({
            "../../messages/en.json": {
                id: ()=>"[project]/messages/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/en.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/ja.json": {
                id: ()=>"[project]/messages/ja.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/ja.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-CN.json": {
                id: ()=>"[project]/messages/zh-CN.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-CN.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-TW.json": {
                id: ()=>"[project]/messages/zh-TW.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-TW.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../messages/${locale}.json`)).default
    };
});
}),
"[next]/internal/font/google/geist_e531dabc.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_e531dabc-module__QGiZLq__className",
  "variable": "geist_e531dabc-module__QGiZLq__variable",
});
}),
"[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/geist_mono_68a01160.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "geist_mono_68a01160-module__YLcDdW__className",
  "variable": "geist_mono_68a01160-module__YLcDdW__variable",
});
}),
"[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/features/language/application/use-cases/getLanguagesForSSR.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/features/language/application/use-cases/getLanguagesForSSR.ts
__turbopack_context__.s({
    "getLanguagesForSSR": ()=>getLanguagesForSSR
});
(()=>{
    const e = new Error("Cannot find module '../language.repository'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
async function getLanguagesForSSR() {
    return languageRepository.getLanguages();
}
}),
"[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguageContext": ()=>useLanguageContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LanguageProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/presentation/LanguageProvider.tsx <module evaluation>", "LanguageProvider");
const useLanguageContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLanguageContext() from the server but useLanguageContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/presentation/LanguageProvider.tsx <module evaluation>", "useLanguageContext");
}),
"[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguageContext": ()=>useLanguageContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LanguageProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LanguageProvider() from the server but LanguageProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/presentation/LanguageProvider.tsx", "LanguageProvider");
const useLanguageContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLanguageContext() from the server but useLanguageContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/presentation/LanguageProvider.tsx", "useLanguageContext");
}),
"[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LocaleLayout,
    "metadata": ()=>metadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript) <export setCachedRequestLocale as setRequestLocale>"); // 靜態渲染
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/core.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$application$2f$use$2d$cases$2f$getLanguagesForSSR$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/application/use-cases/getLanguagesForSSR.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/presentation/LanguageProvider.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const metadata = {
    title: {
        default: '我的網站',
        template: '%s | 我的網站'
    },
    description: '這是我網站的預設描述。',
    keywords: [
        'Next.js',
        'React',
        '開發'
    ],
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: 'https://yourwebsite.com',
        siteName: '我的網站'
    }
};
async function LocaleLayout({ children, params }) {
    // 驗證 locale 是否有效
    const { locale } = await params;
    // 更嚴格的類型檢查
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, locale)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // 啟用靜態渲染
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__["setRequestLocale"])(locale);
    // 快取優先
    const languages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$application$2f$use$2d$cases$2f$getLanguagesForSSR$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesForSSR"])(); // 快取優先
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LanguageProvider"], {
                    languages: languages,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/layout.tsx",
                    lineNumber: 68,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/layout.tsx",
                lineNumber: 67,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/layout.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/layout.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d5f0f2eb._.js.map