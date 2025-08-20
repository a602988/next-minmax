(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__ff7ceaf3._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/env.mjs [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [middleware-edge] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createEnv"])({
    /**
     * 伺服器端專用環境變數。
     * 這些變數「不會」暴露給客戶端，適合放置敏感資訊如 API 金鑰。
     */ server: {
        // ==========================================
        // 專案核心配置 - 伺服器端專用
        // ==========================================
        PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
        // ==========================================
        // API 與外部服務配置 - 伺服器端專用
        // ==========================================
        API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("https://v5.jeffy.test"),
        I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "memory",
            "redis",
            "none"
        ]).default("memory")
    },
    /**
     * 客戶端環境變數。
     * 必須以 `NEXT_PUBLIC_` 開頭，這些變數會被打包進客戶端的 JavaScript bundle 中。
     * 絕對不要在此處放置任何敏感資訊。
     */ client: {
        // ==========================================
        // 🏗️ 專案基本資訊 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("測試網站"),
        NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
        // ==========================================
        // 🌍 國際化與語系配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
        NEXT_PUBLIC_SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW'),
        NEXT_PUBLIC_LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'always',
            'as-needed',
            'never'
        ]).default('as-needed'),
        NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        // ==========================================
        // 🗺️ 地理位置偵測配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "cdn-only",
            "api-only",
            "cdn-fallback"
        ]).default("api-only"),
        NEXT_PUBLIC_GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "off",
            "suggest",
            "force"
        ]).default("suggest"),
        NEXT_PUBLIC_FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
        NEXT_PUBLIC_GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ipapi",
            "ipinfo",
            "geoplugin"
        ]).default("geoplugin"),
        NEXT_PUBLIC_GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(5000),
        // ==========================================
        // 🔄 快取系統配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(3600),
        // ==========================================
        // ⚙️ 功能開關 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // 🔧 開發與測試配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(100),
        NEXT_PUBLIC_MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0).max(1).default(0.0),
        // ==========================================
        // 📊 監控與日誌配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // ⏱️ 超時設定 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(30000),
        NEXT_PUBLIC_CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(60000),
        // ==========================================
        // 🌐 API 與服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("http://localhost:3000/api/ssr/"),
        // ==========================================
        // 🔧 外部服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
    },
    /**
     * 運行時的環境變數來源。
     * 對於 Next.js，這應該總是 `process.env`。
     * createEnv 會自動處理 server-side 和 client-side 的變數分離。
     */ runtimeEnv: process.env
});
}),
"[project]/src/config/api.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "apiConfig": ()=>apiConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].API_BASE_URL,
    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? {
        language: 'languages',
        locales: 'locales',
        systemMenus: 'system-menus',
        webData: 'web-data',
        detail: 'detail'
    } : {
        language: '/api/v1/languages',
        locales: '/api/v1/locales',
        systemMenus: '/api/v1/system-menus',
        webData: '/api/v1/web-data',
        detail: '/api/v1/detail'
    },
    // 群組：超時（毫秒）直接取 env，集中使用
    timeouts: {
        api: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT,
        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CONTENT_API_TIMEOUT,
        geo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_API_TIMEOUT
    },
    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true
    },
    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY > 0,
    getMockDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY,
    shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_RATE
};
}),
"[project]/src/config/app.client.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "appConfig": ()=>appConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
const appConfig = {
    // 衍生：API 超時（毫秒），若無設定則回退 30000
    apiTimeout: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT : Number.parseInt(String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT ?? ''), 10) || 30000,
    // 衍生：i18n 啟用（客戶端視角）的布林正規化
    i18nEnabled: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'boolean' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED : String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED).toLowerCase() === 'true'
};
}),
"[project]/src/config/app.server.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SERVER_APP_CONFIG": ()=>SERVER_APP_CONFIG,
    "SERVER_COMPUTED": ()=>SERVER_COMPUTED
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
const SERVER_APP_CONFIG = {
    // 國際化配置 - 數據轉換
    i18n: {
        supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((locale)=>locale.trim()),
        countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}')
    },
    // API 配置 - 條件邏輯
    api: {
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].API_BASE_URL
    }
};
const SERVER_COMPUTED = {
    /** 是否啟用完整國際化功能（伺服端視角） */ isI18nEnabled: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
    /** 檢查是否支援特定語系 */ isLocaleSupported: (locale)=>SERVER_APP_CONFIG.i18n.supportedLocales.includes(locale),
    /** 是否應該模擬 API 延遲 */ shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY > 0,
    /** 是否應該模擬錯誤 */ shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
};
}),
"[project]/src/config/locale.server.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serverLocaleConfig": ()=>serverLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
const serverLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：語系驗證（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return serverLocaleConfig.supportedLocales.includes(locale);
    },
    // 工具：取得有效的預設語系
    getValidDefaultLocale: ()=>{
        const envDefault = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
        return serverLocaleConfig.supportedLocales.includes(envDefault) ? envDefault : serverLocaleConfig.supportedLocales[0];
    },
    // 衍生：國家子網域映射
    countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}'),
    // 工具：依國家取子網域（使用衍生 countrySubdomainMap）
    getSubdomainByCountry: (country)=>{
        return serverLocaleConfig.countrySubdomainMap[country] || null;
    }
};
}),
"[project]/src/config/locale.client.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clientLocaleConfig": ()=>clientLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
const clientLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：驗證語系是否被支援（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return clientLocaleConfig.supportedLocales.includes(locale);
    }
};
}),
"[project]/src/config/cache.client.config.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 快取系統客戶端配置檔案（僅業務邏輯）
 */ // redis 相關鍵格式（客戶端僅作 key 規則使用，不連線）
__turbopack_context__.s({
    "cacheConfig": ()=>cacheConfig,
    "getAllCacheTags": ()=>getAllCacheTags,
    "getCacheConfig": ()=>getCacheConfig,
    "getCacheConfigSummary": ()=>getCacheConfigSummary,
    "getCacheTags": ()=>getCacheTags,
    "getCacheTtl": ()=>getCacheTtl,
    "getDataTypesByTag": ()=>getDataTypesByTag
});
const redisConfig = {
    prefix: 'minmax:',
    keySeparator: ':'
};
/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 * - 僅保留客戶端需要的預設 ttl/tags/描述
 */ const cacheDataTypes = {
    languages: {
        ttl: 7200,
        tags: [
            'languages',
            'static-data'
        ],
        description: '語言資料快取'
    },
    locales: {
        ttl: 7200,
        tags: [
            'locales',
            'static-data'
        ],
        description: '地區設定快取'
    },
    menus: {
        ttl: 3600,
        tags: [
            'menus',
            'navigation'
        ],
        description: '選單資料快取'
    },
    webData: {
        ttl: 3600,
        tags: [
            'web-data',
            'static-data'
        ],
        description: '網站資料快取'
    },
    pages: {
        ttl: 1800,
        tags: [
            'pages',
            'content'
        ],
        description: '頁面內容快取'
    },
    geoData: {
        ttl: 1800,
        tags: [
            'geo-data',
            'location'
        ],
        description: '地理位置資料快取'
    },
    userData: {
        ttl: 600,
        tags: [
            'user-data',
            'dynamic-data'
        ],
        description: '使用者資料快取'
    },
    apiResponse: {
        ttl: 3600,
        tags: [
            'api-response'
        ],
        description: 'API 回應快取'
    }
};
const cacheConfig = {
    // 基礎配置（客戶端預設值）
    enabled: true,
    cdnEnabled: false,
    defaultTtl: 3600,
    strategy: 'memory',
    // key 規則（僅作為 key 生成規範）
    redis: redisConfig,
    // 從 cacheDataTypes 自動生成 ttl 與 tags 映射
    ttl: {
        languages: cacheDataTypes.languages.ttl,
        locales: cacheDataTypes.locales.ttl,
        menus: cacheDataTypes.menus.ttl,
        webData: cacheDataTypes.webData.ttl,
        pages: cacheDataTypes.pages.ttl,
        geoData: cacheDataTypes.geoData.ttl,
        userData: cacheDataTypes.userData.ttl,
        apiResponse: cacheDataTypes.apiResponse.ttl
    },
    tags: {
        languages: cacheDataTypes.languages.tags,
        locales: cacheDataTypes.locales.tags,
        menus: cacheDataTypes.menus.tags,
        webData: cacheDataTypes.webData.tags,
        pages: cacheDataTypes.pages.tags,
        geoData: cacheDataTypes.geoData.tags,
        userData: cacheDataTypes.userData.tags,
        apiResponse: cacheDataTypes.apiResponse.tags
    },
    // 快取鍵值生成（不依賴自身物件，避免初始化順序問題）
    generateKey: (type, identifier, locale)=>{
        const parts = [
            redisConfig.prefix,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(redisConfig.keySeparator);
    }
};
function getCacheConfig(type) {
    return cacheDataTypes[type];
}
function getCacheTtl(type) {
    return cacheDataTypes[type].ttl * 1000;
}
function getCacheTags(type) {
    return cacheDataTypes[type].tags;
}
function getDataTypesByTag(tag) {
    return Object.entries(cacheDataTypes).filter(([_, config])=>config.tags.includes(tag)).map(([key])=>key);
}
function getAllCacheTags() {
    const allTags = Object.values(cacheDataTypes).flatMap((config)=>config.tags);
    return [
        ...new Set(allTags)
    ];
}
function getCacheConfigSummary() {
    return Object.entries(cacheDataTypes).map(([type, config])=>({
            type,
            ttl: `${config.ttl}s (${config.ttl / 60}min)`,
            tags: config.tags.join(', '),
            description: config.description
        }));
}
}),
"[project]/src/config/cache.server.config.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 快取系統服務端配置（僅業務邏輯）
 * - 不重複 env：用 getter 直接回傳 env 值
 * - 保留 server 覆寫 ttl 與鍵規則（generateKey）
 * - 命名使用小寫（camelCase）
 */ __turbopack_context__.s({
    "getCacheStrategy": ()=>getCacheStrategy,
    "getDefaultTtl": ()=>getDefaultTtl,
    "getServerCacheConfig": ()=>getServerCacheConfig,
    "getServerCacheConfigSummary": ()=>getServerCacheConfigSummary,
    "getServerCacheTags": ()=>getServerCacheTags,
    "getServerCacheTtl": ()=>getServerCacheTtl,
    "getServerCacheTtlMs": ()=>getServerCacheTtlMs,
    "isCacheEnabled": ()=>isCacheEnabled,
    "isCdnEnabled": ()=>isCdnEnabled,
    "serverCacheConfig": ()=>serverCacheConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [middleware-edge] (ecmascript)");
;
;
// 服務端覆寫：僅作必要差異（例：apiResponse）
const serverTtl = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cacheConfig"].ttl,
    apiResponse: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
};
const serverTags = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cacheConfig"].tags
};
const serverCacheConfig = {
    // key 規則（沿用 client）
    redis: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cacheConfig"].redis,
    // ttl/tags 聚合（server 覆寫）
    ttl: serverTtl,
    tags: serverTags,
    // 快取鍵值生成（純規則）
    generateKey: (type, identifier, locale)=>{
        const parts = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cacheConfig"].redis.prefix,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cacheConfig"].redis.keySeparator);
    }
};
const isCacheEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED;
const isCdnEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED;
const getDefaultTtl = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL; // 秒
const getCacheStrategy = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY;
;
function getServerCacheConfig(type) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCacheConfig"])(type);
    return {
        type,
        ttl: serverTtl[type],
        tags: serverTags[type],
        description: base.description
    };
}
function getServerCacheTtl(type) {
    return serverTtl[type]; // 秒
}
function getServerCacheTtlMs(type) {
    return serverTtl[type] * 1000; // 毫秒
}
function getServerCacheTags(type) {
    return serverTags[type];
}
function getServerCacheConfigSummary() {
    return Object.keys(serverTtl).map((type)=>({
            type,
            ttl: `${serverTtl[type]}s (${serverTtl[type] / 60}min)`,
            tags: serverTags[type].join(', '),
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCacheConfig"])(type).description
        }));
}
}),
"[project]/src/config/cache.server.config.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [middleware-edge] (ecmascript) <locals>");
}),
"[project]/src/config/index.ts [middleware-edge] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
// export { env } from '../env.mjs';
// 導出 API 配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [middleware-edge] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [middleware-edge] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [middleware-edge] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [middleware-edge] (ecmascript) <module evaluation>");
;
;
;
;
;
;
;
}),
"[project]/src/config/index.ts [middleware-edge] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [middleware-edge] (ecmascript) <locals>");
}),
"[project]/src/i18n/routing.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [middleware-edge] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serverLocaleConfig"].supportedLocales,
    // 預設語系 - 先用 env，若不在支援清單內則回退第一個
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["serverLocaleConfig"].getValidDefaultLocale(),
    // 語系前綴模式 - 從環境變數讀取
    localePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].LOCALE_PREFIX_MODE,
    // 啟用語系檢測 - 從環境變數讀取
    localeDetection: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].LOCALE_DETECTION_ENABLED
});
}),
"[project]/src/features/geo/providers/geoplugin.provider.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * geoplugin.com 地理位置偵測供應商實作
 *
 * 此模組實作了 geoplugin.com 的地理位置偵測服務，將其 API 回應轉換為
 * 標準化的 GeoResult 格式。geoplugin 是一個免費的 IP 地理位置服務，
 * 無需 API 金鑰即可使用，適合開發和測試環境。
 *
 * 主要特性：
 * - 免費服務，無需註冊或 API 金鑰
 * - 支援 IPv4 和 IPv6 地址查詢
 * - 提供國家、地區、城市、經緯度等資訊
 * - 包含時區和貨幣資訊
 * - 支援自訂逾時控制和 fetch 實作
 *
 * 使用限制：
 * - 免費服務可能有請求頻率限制
 * - 準確度可能不如付費服務
 * - 生產環境建議搭配快取和備援策略
 *
 * API 端點：https://www.geoplugin.net/json.gp
 * 文件：http://www.geoplugin.com/webservices/json
 */ __turbopack_context__.s({
    "geoPluginProvider": ()=>geoPluginProvider
});
const geoPluginProvider = {
    name: 'geoplugin',
    async lookup ({ ip, timeoutMs, fetchImpl }) {
        const baseUrl = 'https://www.geoplugin.net/json.gp'; // geoplugin JSON 端點
        const url = ip ? `${baseUrl}?ip=${encodeURIComponent(ip)}` : baseUrl; // 可選：指定 IP，未指定則以來源 IP 判斷
        // 逾時控制：避免阻塞 SSR / 中介層
        const controller = new AbortController(); // 用於中止 fetch 的控制器
        const timer = setTimeout(()=>controller.abort(), Math.max(1, timeoutMs)); // 在 timeoutMs 後中止請求
        const started = Date.now(); // 記錄起始時間以計算耗時
        try {
            // 可注入自訂 fetch（測試用或加代理/重試），預設使用全域 fetch
            const fetchFn = fetchImpl ?? fetch; // 若未提供則採用全域 fetch
            const res = await fetchFn(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                },
                signal: controller.signal
            });
            // HTTP 非 2xx 視為失敗，降級為 null（不拋例外，保持上層流程平順）
            if (!res.ok) {
                return null; // 回傳 null 表示未取得有效資料
            }
            const json = await res.json(); // 解析 JSON 回應
            const elapsedMs = Date.now() - started; // 計算本次請求耗時（毫秒）
            // 將 geoplugin 回應映射到標準 GeoResult
            const result = {
                ip: safeString(json?.geoplugin_request),
                countryCode: safeString(json?.geoplugin_countryCode) ?? null,
                countryName: safeString(json?.geoplugin_countryName) ?? null,
                region: safeString(json?.geoplugin_region) // 優先採用名稱
                 ?? safeString(json?.geoplugin_regionCode) // 次選代碼
                 ?? null,
                city: safeString(json?.geoplugin_city) ?? null,
                latitude: safeNumber(json?.geoplugin_latitude),
                longitude: safeNumber(json?.geoplugin_longitude),
                timeZone: safeString(json?.geoplugin_timezone) ?? null,
                currency: normalizeCurrency(json),
                raw: json,
                provider: 'geoplugin',
                fromCache: false,
                elapsedMs
            };
            return result; // 回傳標準化結果
        } catch  {
            // 包含逾時（AbortError）在內的任何錯誤皆降級為 null，避免中斷流程
            return null; // 回傳 null 交由上層兜底
        } finally{
            clearTimeout(timer); // 清理逾時計時器，避免資源洩漏
        }
    }
};
/* 工具函式（純函式，便於測試與重用） */ /**
 * 將未知值安全轉為非空字串
 * - 空字串、null、undefined 皆回傳 undefined
 */ function safeString(val) {
    if (val === null || val === undefined) return undefined; // 無值直接回 undefined
    const s = String(val).trim(); // 轉字串並去除前後空白
    return s.length ? s : undefined; // 空字串視為無效
}
/**
 * 將未知值安全轉為 number
 * - 非有限數字或無值回傳 null
 */ function safeNumber(val) {
    if (val === null || val === undefined) return null; // 無值回 null
    const n = Number(val); // 嘗試轉為數字
    return Number.isFinite(n) ? n : null; // 非有限數字視為無效
}
/**
 * 正規化 geoplugin 的貨幣資訊
 * - 若 code 與 symbol 皆缺失則回傳 null，避免產生空物件
 */ function normalizeCurrency(json) {
    const code = safeString(json?.geoplugin_currencyCode) ?? null; // 貨幣代碼（例如 TWD、USD）
    const symbol = safeString(json?.geoplugin_currencySymbol) ?? null; // 貨幣符號（例如 NT$、$）
    if (code === null && symbol === null) return null; // 兩者皆無 → 視為無資料
    return {
        code,
        symbol
    }; // 至少有一項則回傳物件
}
}),
"[project]/src/lib/cache/memory-adapter.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 記憶體快取適配器實作
 *
 * 基於 JavaScript Map 實作的記憶體快取系統，支援 TTL（生存時間）和標籤索引功能。
 * 適合開發環境或小型應用使用，資料存儲在應用程式記憶體中，重啟後會遺失。
 *
 * 主要特性：
 * - TTL 支援：可設定快取項目的過期時間
 * - 標籤索引：支援按標籤批量刪除快取項目
 * - 自動清理：讀取時自動清理過期項目
 * - 型別安全：支援泛型，確保型別安全
 *
 * 注意事項：
 * - 記憶體使用量會隨快取項目增加而增長
 * - 應用程式重啟後所有快取資料會遺失
 * - 適合單機部署，不支援分散式快取
 */ __turbopack_context__.s({
    "MemoryCacheAdapter": ()=>MemoryCacheAdapter
});
class MemoryCacheAdapter {
    /** 主要存儲結構：鍵值 -> 快取項目 */ store = new Map();
    /** 標籤索引：標籤 -> 包含該標籤的鍵值集合 */ tagIndex = new Map();
    /**
     * 取得快取值
     *
     * @template T 快取值的型別
     * @param key 快取鍵值
     * @returns 快取的值，如果不存在或已過期則回傳 null
     */ async get(key) {
        const item = this.store.get(key);
        if (!item) return null;
        // 檢查是否過期，過期則自動清理
        if (item.expireAt && Date.now() > item.expireAt) {
            this.evict(key, item);
            return null;
        }
        return item.value;
    }
    /**
     * 設定快取值
     *
     * @template T 快取值的型別
     * @param key 快取鍵值
     * @param value 要快取的值
     * @param options 快取選項，包含 TTL 和標籤
     */ async set(key, value, options) {
        const ttlSec = options?.ttl ?? 0;
        const expireAt = ttlSec > 0 ? Date.now() + ttlSec * 1000 : undefined;
        const tags = new Set(options?.tags ?? []);
        // 如果鍵值已存在，先清理舊的標籤索引
        const old = this.store.get(key);
        if (old) this.unindexTags(key, old.tags);
        // 設定新值並建立標籤索引
        this.store.set(key, {
            value,
            expireAt,
            tags
        });
        this.indexTags(key, tags);
    }
    /**
     * 刪除指定鍵值的快取
     *
     * @param key 要刪除的快取鍵值
     */ async del(key) {
        const item = this.store.get(key);
        if (!item) return;
        // 清理標籤索引並刪除項目
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }
    /**
     * 按標籤批量刪除快取
     *
     * 刪除所有包含指定標籤的快取項目，常用於相關資料的批量失效。
     *
     * @param tag 要刪除的標籤
     */ async delByTag(tag) {
        const keys = this.tagIndex.get(tag);
        if (!keys) return;
        // 遍歷所有包含該標籤的鍵值並刪除
        for (const key of keys){
            const item = this.store.get(key);
            if (!item) continue;
            this.unindexTags(key, item.tags);
            this.store.delete(key);
        }
        // 清理標籤索引
        this.tagIndex.delete(tag);
    }
    /**
     * 清空所有快取
     *
     * 刪除所有快取項目和標籤索引，重置快取狀態。
     */ async clear() {
        this.store.clear();
        this.tagIndex.clear();
    }
    /**
     * 清理過期項目
     *
     * 內部方法，用於清理過期的快取項目和相關的標籤索引。
     *
     * @private
     * @param key 要清理的鍵值
     * @param item 要清理的快取項目
     */ evict(key, item) {
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }
    /**
     * 建立標籤索引
     *
     * 為指定鍵值的標籤建立反向索引，用於支援按標籤查詢和刪除。
     *
     * @private
     * @param key 鍵值
     * @param tags 標籤集合
     */ indexTags(key, tags) {
        for (const tag of tags){
            if (!this.tagIndex.has(tag)) this.tagIndex.set(tag, new Set());
            this.tagIndex.get(tag).add(key);
        }
    }
    /**
     * 清理標籤索引
     *
     * 從標籤索引中移除指定鍵值的關聯，如果標籤下沒有其他鍵值則刪除該標籤。
     *
     * @private
     * @param key 鍵值
     * @param tags 標籤集合
     */ unindexTags(key, tags) {
        for (const tag of tags){
            const set = this.tagIndex.get(tag);
            if (!set) continue;
            set.delete(key);
            // 如果標籤下沒有其他鍵值，刪除該標籤索引
            if (set.size === 0) this.tagIndex.delete(tag);
        }
    }
}
}),
"[project]/src/lib/cache/factory.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 快取適配器工廠模組
 *
 * 此模組提供統一的快取適配器建立介面，根據環境變數配置動態選擇快取策略。
 * 支援記憶體快取、Redis 快取或無快取模式，並使用單例模式確保整個應用程式
 * 共用同一個快取實例，避免重複初始化和資源浪費。
 *
 * 支援的快取策略：
 * - memory: 使用記憶體快取，適合開發環境或小型應用
 * - redis: 使用 Redis 快取，適合生產環境或分散式部署（待實作）
 * - none: 無快取模式，所有操作都是 no-op，適合測試或特殊場景
 */ __turbopack_context__.s({
    "getCacheAdapter": ()=>getCacheAdapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/memory-adapter.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
;
// 單例實例，確保整個應用程式共用同一個快取適配器
let singleton = null;
function getCacheAdapter() {
    // 如果已有實例，直接回傳，避免重複建立
    if (singleton) return singleton;
    // 直接讀 env，避免依賴另一層 config 常量
    const strategy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY; // 'memory' | 'redis' | 'none'
    if (strategy === 'memory') {
        // 記憶體快取：適合開發環境，資料存在應用程式記憶體中
        singleton = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MemoryCacheAdapter"]();
    } else if (strategy === 'redis') {
        // Redis 快取：適合生產環境，支援分散式快取
        // TODO: 之後接 RedisAdapter
        singleton = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["MemoryCacheAdapter"]();
    } else {
        // 無快取模式：所有操作都是 no-op，適合測試或禁用快取的場景
        singleton = {
            async get () {
                return null;
            },
            async set () {},
            async del () {},
            async delByTag () {},
            async clear () {}
        };
    }
    return singleton;
}
}),
"[project]/src/features/geo/services/geo.service.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * GeoService（地理位置偵測服務）
 *
 * 作用與說明：
 * - 提供對外「單一入口」以取得使用者的地理資訊（國家代碼為主）。
 * - 封裝第三方供應商（目前 geoplugin）呼叫邏輯，並統一回傳標準化結果 GeoResult。
 * - 內建逾時控制（避免 SSR / Middleware 被外部 API 阻塞）、錯誤降級（失敗回傳 null）。
 * - 整合共用快取系統（CacheAdapter）：支援 memory/redis/none，並區分成功與失敗結果 TTL。
 * - 具粗粒度 IP 快取鍵（/24 for IPv4、前 4 段 for IPv6）以降低碎片與隱私風險。
 * - 提供便捷 API：detectGeo（完整資訊）、detectCountry（只取國碼）。
 * - 預留 tags（'geo', providerName），方便後續批次清除快取（delByTag）。
 *
 * 何時使用：
 * - Middleware 中進行「建議語系/站點」的前置偵測與 Cookie 寫入。
 * - SSR 流程中需要依國別做內容或語系的初步決策。
 *
 * 重要設計：
 * - 成功結果 TTL 較長（預設 15 分鐘）、失敗結果（null）負面快取 TTL 較短（預設 5 分鐘）。
 * - fromCache 與 elapsedMs 由服務層賦值，對上層提供可觀測性與除錯資訊。
 * - 可透過 forceRefresh 避開快取（除錯/緊急重查）。
 */ __turbopack_context__.s({
    "GeoService": ()=>GeoService,
    "geoService": ()=>geoService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$providers$2f$geoplugin$2e$provider$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geo/providers/geoplugin.provider.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/factory.ts [middleware-edge] (ecmascript)");
;
;
// 預設逾時（毫秒）。避免 SSR / Middleware 因第三方 API 卡住。
const GEO_DEFAULT_TIMEOUT_MS = 800;
// 成功結果快取時間（毫秒）。Geo IP 通常穩定，可設定較長（例如 15 分鐘）。
const GEO_SUCCESS_TTL_MS = 15 * 60 * 1000;
// 失敗（null）結果的「負面快取」時間（毫秒）。短一些可降低雪崩與重試風暴（例如 5 分鐘）。
const GEO_NEGATIVE_TTL_MS = 5 * 60 * 1000;
/**
 * 快取系統（CacheAdapter）使用秒為單位，因此需將毫秒轉為秒。
 * - 最小回傳 1 秒，避免 0 導致立即過期。
 */ function msToSec(ms) {
    return Math.max(1, Math.ceil(ms / 1000));
}
/**
 * 將 IP 正規化為較粗粒度的 key，避免快取碎片過多與隱私風險。
 * - IPv4: a.b.c.d → a.b.c.0
 * - IPv6: 取前 4 段 → xxxx:xxxx:xxxx:xxxx::
 * - 未指定 IP：使用 'self'
 */ function toCoarseIpKey(ip) {
    if (!ip) return 'self';
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(ip)) {
        const [a, b, c] = ip.split('.');
        return `${a}.${b}.${c}.0`;
    // IPv4 使用 /24 粒度，有效降低 key 數量，同時仍具區域代表性。
    }
    if (ip.includes(':')) {
        return ip.split(':').slice(0, 4).join(':') + '::';
    // IPv6 只取前 4 段作為粗粒度，精確性與隱私的折衷。
    }
    return ip;
}
class GeoService {
    // 預設供應商：geoplugin。之後可依環境變數改為 ipapi、ipinfo...等。
    provider = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$providers$2f$geoplugin$2e$provider$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["geoPluginProvider"];
    // 使用專案的快取抽象層（可切換 memory/redis/none）
    cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getCacheAdapter"])();
    /**
     * 取得完整地理資訊（標準化結果）。
     * - 具備：快取、逾時、降級（失敗回 null）
     * - 快取 Key 設計：geo:{provider}:{coarseIpKey}
     */ async detectGeo(opts = {}) {
        const { ip, forceRefresh, fetchImpl } = opts;
        const timeoutMs = opts.timeoutMs ?? GEO_DEFAULT_TIMEOUT_MS;
        const key = `geo:${this.provider.name}:${toCoarseIpKey(ip)}`;
        // 1) 讀取快取（若非強制刷新）
        //   - CacheAdapter.get 規格：回傳 T | null（沒有 undefined）
        if (!forceRefresh) {
            const cached = await this.cache.get(key);
            if (cached !== null) {
                // 命中快取：補上 fromCache 標記；若為負面快取（null），直接回 null。
                return cached ? {
                    ...cached,
                    fromCache: true
                } : null;
            }
        }
        // 2) 未命中快取 → 呼叫供應商
        const started = Date.now();
        let result = null;
        try {
            const params = {
                ip,
                timeoutMs,
                fetchImpl
            };
            const providerResult = await this.provider.lookup(params);
            // 標準化結果：確保 fromCache 與 elapsedMs 由服務層賦值
            result = providerResult ? {
                ...providerResult,
                fromCache: false,
                elapsedMs: Date.now() - started
            } : null;
            // 3) 寫入快取（使用秒作為單位；附帶 tags 便於日後群組清除）
            await this.cache.set(key, result, {
                ttl: msToSec(result ? GEO_SUCCESS_TTL_MS : GEO_NEGATIVE_TTL_MS),
                tags: [
                    'geo',
                    this.provider.name
                ]
            });
        } catch  {
            // 4) 任何錯誤（含逾時）都降級為 null，並做短期負面快取以防雪崩
            await this.cache.set(key, null, {
                ttl: msToSec(GEO_NEGATIVE_TTL_MS),
                tags: [
                    'geo',
                    this.provider.name
                ]
            });
            return null;
        }
        return result;
    }
    /**
     * 便捷方法：僅返回國家代碼（TW/US/JP...），失敗回 null。
     */ async detectCountry(opts = {}) {
        const geo = await this.detectGeo(opts);
        return geo?.countryCode ?? null;
    }
    /**
     * 失效特定 IP 的快取（管理/除錯用）。
     */ async invalidate(ip) {
        const key = `geo:${this.provider.name}:${toCoarseIpKey(ip)}`;
        await this.cache.del(key);
    }
    /**
     * 清除所有快取（謹慎使用；可優先考慮 delByTag('geo')）。
     */ async clearAll() {
        await this.cache.clear();
    }
}
const geoService = new GeoService();
}),
"[project]/src/features/geo/strategy/geo-strategy.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 地理位置偵測策略管理模組
 *
 * 此模組提供統一的地理位置偵測策略介面，抽象化不同的偵測方法，
 * 讓上層應用程式可以透過策略模式選擇最適合的地理偵測方式。
 *
 * 支援的偵測策略：
 * 1. api-only: 純第三方 API 偵測（目前實作 geoplugin）
 * 2. cdn-only: 僅使用 CDN 標頭偵測（預留擴充）
 * 3. cdn-fallback: CDN 優先，失敗時降級至 API（預留擴充）
 *
 * 設計原則：
 * - 策略模式：封裝不同偵測方法，便於切換和擴充
 * - 統一介面：提供一致的 API，隱藏底層實作細節
 * - 漸進增強：優先使用快速方法，失敗時自動降級
 * - 容錯設計：偵測失敗不阻塞主流程，回傳 null 讓上層處理
 *
 * 使用場景：
 * - middleware: 在請求初期快速偵測使用者地理位置
 * - SSR: 根據地理位置決定預設語系和內容
 * - 個人化: 提供地區相關的內容和服務
 *
 * 效能考量：
 * - API 偵測：準確但較慢，適合首次訪問或精確需求
 * - CDN 偵測：快速但精度較低，適合即時決策
 * - 混合策略：平衡速度與準確性，提供最佳使用者體驗
 *
 * 擴充性：
 * - 新增策略只需實作對應的 case 分支
 * - 參數結構支援各種偵測需求（IP、超時、快取等）
 * - 可注入自訂 fetch 實作，便於測試和代理
 */ // 作用：
// - 地理偵測策略的統一入口（目前先支援 api-only）
// - 抽象未來策略：cdn-only / cdn-fallback，讓上層呼叫端不需改動
// - 封裝 geoService，提供 detectCountry / detectGeo 便捷方法
__turbopack_context__.s({
    "detectCountryByStrategy": ()=>detectCountryByStrategy,
    "detectGeoByStrategy": ()=>detectGeoByStrategy
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$services$2f$geo$2e$service$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geo/services/geo.service.ts [middleware-edge] (ecmascript)");
;
async function detectGeoByStrategy(params = {}, strategy = 'api-only') {
    switch(strategy){
        case 'api-only':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$services$2f$geo$2e$service$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["geoService"].detectGeo(params);
        // 預留：之後擴充 CDN 標頭偵測
        // case 'cdn-only':
        //   return detectViaCdnHeaders(...);
        // 預留：之後擴充 CDN 優先、API 備援
        // case 'cdn-fallback':
        //   return (await detectViaCdnHeaders(...)) ?? geoService.detectGeo(params);
        default:
            // 未知策略時，保守降級：不阻塞流程
            return null;
    }
}
async function detectCountryByStrategy(params = {}, strategy = 'api-only') {
    switch(strategy){
        case 'api-only':
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$services$2f$geo$2e$service$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["geoService"].detectCountry(params);
        // 預留：之後擴充 CDN 標頭偵測
        // case 'cdn-only':
        //   return detectCountryViaCdnHeaders(...);
        // 預留：之後擴充 CDN 優先、API 備援
        // case 'cdn-fallback':
        //   // 先嘗試 CDN，取不到再走 API
        //   return (await detectCountryViaCdnHeaders(...)) ?? geoService.detectCountry(params);
        default:
            return null;
    }
}
}),
"[project]/src/features/geo/utils/ip.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// TypeScript
// 作用：提供跨層可重用的 IP 解析工具，避免直接耦合 Next 的型別
/**
 * 從 Headers 物件萃取客戶端 IP
 * 檢查順序：
 * 1) X-Forwarded-For 的第一個 IP（代理/負載均衡器常見）
 * 2) X-Real-IP（某些代理伺服器使用）
 */ __turbopack_context__.s({
    "extractClientIpFromHeaders": ()=>extractClientIpFromHeaders,
    "getClientIpFromRequest": ()=>getClientIpFromRequest,
    "isPrivateOrReservedIp": ()=>isPrivateOrReservedIp
});
function extractClientIpFromHeaders(headers) {
    // 讀取 header（相容 Headers 與一般物件）
    const getHeader = (name)=>{
        if (typeof headers?.get === 'function') {
            const v = headers.get(name);
            return v ?? undefined;
        }
        const raw = headers[name.toLowerCase()] ?? headers[name];
        if (Array.isArray(raw)) return raw[0];
        return raw;
    };
    // 1) x-forwarded-for: 可能是 "client, proxy1, proxy2"，取第一個
    const xff = getHeader('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        const ip = normalizeIp(first);
        if (ip) return ip;
    }
    // 2) x-real-ip
    const xri = getHeader('x-real-ip');
    if (xri) {
        const ip = normalizeIp(xri.trim());
        if (ip) return ip;
    }
    return undefined;
}
function getClientIpFromRequest(req) {
    const fromHeaders = extractClientIpFromHeaders(req.headers);
    if (fromHeaders) return fromHeaders;
    const possible = req.ip;
    return normalizeIp(possible);
}
function isPrivateOrReservedIp(ip) {
    if (!ip) return true;
    const v4 = ip.includes('.');
    if (v4) {
        if (ip.startsWith('10.')) return true;
        const parts = ip.split('.');
        const a = Number(parts[0]), b = Number(parts[1]);
        if (a === 172 && b >= 16 && b <= 31) return true;
        if (ip.startsWith('192.168.')) return true;
        if (ip === '127.0.0.1') return true;
    } else {
        // IPv6 常見本機/保留
        if (ip === '::1') return true;
        if (ip.toLowerCase().startsWith('fc') || ip.toLowerCase().startsWith('fd')) return true; // Unique local
    }
    return false;
}
/**
 * 將輸入正規化為非空的 IP 字串（若不合法則回傳 undefined）
 */ function normalizeIp(val) {
    if (typeof val !== 'string') return undefined;
    const s = val.trim();
    if (!s) return undefined;
    // 基礎檢核（不做嚴格驗證，保留彈性）
    if (!(s.includes('.') || s.includes(':'))) return undefined;
    return s;
}
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * Next.js Middleware - 國際化與地理位置偵測
 *
 * 此 middleware 整合了 next-intl 的國際化功能與自訂的地理位置偵測，
 * 在每個請求的早期階段執行以下處理：
 *
 * 1. 國際化處理：透過 next-intl 處理語系路由、重導向等
 * 2. 地理偵測：根據環境變數決定是否執行，避免不必要的處理
 * 3. 容錯設計：地理偵測失敗不影響主要的國際化流程
 *
 * 執行順序：
 * - 先執行 next-intl middleware 取得基礎回應
 * - 檢查地理偵測開關，決定是否執行偵測邏輯
 * - 在同一回應上追加地理偵測結果的 Cookie
 * - 確保原有的重導向、重寫等行為不受影響
 *
 * 地理偵測特性：
 * - 受 GEO_DETECTION_ENABLED 環境變數控制
 * - 使用 api-only 策略（透過第三方 API）
 * - 800ms 超時限制，避免阻塞請求
 * - 偵測結果存入 detected_country Cookie（1天有效期）
 * - 偵測失敗時清除舊的 Cookie 避免過期資料
 */ __turbopack_context__.s({
    "config": ()=>config,
    "default": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$strategy$2f$geo$2d$strategy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geo/strategy/geo-strategy.ts [middleware-edge] (ecmascript)"); // 地理位置的策略函數
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$utils$2f$ip$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/geo/utils/ip.ts [middleware-edge] (ecmascript)"); // 取得 IP 位置的函數
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [middleware-edge] (ecmascript)");
;
;
;
;
;
// 先建立 next-intl 的既有 middleware
const intlMiddleware = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["routing"]);
// 在模組層定義：將 NODE_ENV 正規化成一般字串再比較，避免字面量型別引發 TS2367
const isDevEnv = (()=>{
    const v = String(("TURBOPACK compile-time value", "development") || '').toLowerCase();
    return v === 'development';
})();
async function middleware(req) {
    // 1) 先執行 next-intl 的 middleware，保留其 redirect/rewrite 等行為
    const res = intlMiddleware(req);
    // 2) 依環境開關決定是否執行地理偵測
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED) {
        return res;
    }
    // 3) 在同一個回應上追加 geo 偵測（api-only）與 Cookie 寫入
    try {
        const ip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$utils$2f$ip$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["getClientIpFromRequest"])(req);
        const timeoutMs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT; // 來自環境的逾時（毫秒）
        const country = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$geo$2f$strategy$2f$geo$2d$strategy$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["detectCountryByStrategy"])({
            ip,
            timeoutMs
        }, 'api-only');
        // 僅在開發模式寫入 debug 用的 detected_ip Cookie
        if ("TURBOPACK compile-time truthy", 1) {
            const detectedIp = ip ?? '';
            res.cookies.set('detected_ip', detectedIp, {
                maxAge: 60 * 60 * 24,
                path: '/',
                sameSite: 'lax',
                secure: !isDevEnv,
                httpOnly: false
            });
        }
        if (country) {
            res.cookies.set('detected_country', country, {
                maxAge: 60 * 60 * 24,
                path: '/',
                sameSite: 'lax',
                secure: ("TURBOPACK compile-time value", "development") === 'production',
                httpOnly: false
            });
        } else {
            res.cookies.set('detected_country', '', {
                maxAge: 0,
                path: '/',
                sameSite: 'lax'
            });
        }
    } catch  {
    // 靜默失敗，不影響 i18n 的流程
    }
    return res;
}
const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__ff7ceaf3._.js.map