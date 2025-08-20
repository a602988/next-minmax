(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/env.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    /**
     * 伺服器端專用環境變數。
     * 這些變數「不會」暴露給客戶端，適合放置敏感資訊如 API 金鑰。
     */ server: {
        // ==========================================
        // 專案核心配置 - 伺服器端專用
        // ==========================================
        PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
        // ==========================================
        // API 與外部服務配置 - 伺服器端專用
        // ==========================================
        API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("https://v5.jeffy.test"),
        I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
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
        NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("測試網站"),
        NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
        // ==========================================
        // 🌍 國際化與語系配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
        NEXT_PUBLIC_SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW'),
        NEXT_PUBLIC_LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'always',
            'as-needed',
            'never'
        ]).default('as-needed'),
        NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        // ==========================================
        // 🗺️ 地理位置偵測配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "cdn-only",
            "api-only",
            "cdn-fallback"
        ]).default("api-only"),
        NEXT_PUBLIC_GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "off",
            "suggest",
            "force"
        ]).default("suggest"),
        NEXT_PUBLIC_FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
        NEXT_PUBLIC_GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ipapi",
            "ipinfo",
            "geoplugin"
        ]).default("geoplugin"),
        NEXT_PUBLIC_GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(5000),
        // ==========================================
        // 🔄 快取系統配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(3600),
        // ==========================================
        // ⚙️ 功能開關 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // 🔧 開發與測試配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(100),
        NEXT_PUBLIC_MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0).max(1).default(0.0),
        // ==========================================
        // 📊 監控與日誌配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // ⏱️ 超時設定 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(30000),
        NEXT_PUBLIC_CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(60000),
        // ==========================================
        // 🌐 API 與服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("http://localhost:3000/api/ssr/"),
        // ==========================================
        // 🔧 外部服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
    },
    /**
     * 運行時的環境變數來源。
     * 對於 Next.js，這應該總是 `process.env`。
     * createEnv 會自動處理 server-side 和 client-side 的變數分離。
     */ runtimeEnv: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/api.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiConfig": ()=>apiConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_BASE_URL,
    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? {
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
        api: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT,
        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CONTENT_API_TIMEOUT,
        geo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_API_TIMEOUT
    },
    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true
    },
    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY > 0,
    getMockDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY,
    shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_RATE
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/app.client.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "appConfig": ()=>appConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
var _env_NEXT_PUBLIC_API_TIMEOUT;
const appConfig = {
    // 衍生：API 超時（毫秒），若無設定則回退 30000
    apiTimeout: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT : Number.parseInt(String((_env_NEXT_PUBLIC_API_TIMEOUT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT) !== null && _env_NEXT_PUBLIC_API_TIMEOUT !== void 0 ? _env_NEXT_PUBLIC_API_TIMEOUT : ''), 10) || 30000,
    // 衍生：i18n 啟用（客戶端視角）的布林正規化
    i18nEnabled: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'boolean' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED : String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED).toLowerCase() === 'true'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/app.server.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SERVER_APP_CONFIG": ()=>SERVER_APP_CONFIG,
    "SERVER_COMPUTED": ()=>SERVER_COMPUTED
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const SERVER_APP_CONFIG = {
    // 國際化配置 - 數據轉換
    i18n: {
        supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((locale)=>locale.trim()),
        countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}')
    },
    // API 配置 - 條件邏輯
    api: {
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_BASE_URL
    }
};
const SERVER_COMPUTED = {
    /** 是否啟用完整國際化功能（伺服端視角） */ isI18nEnabled: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
    /** 檢查是否支援特定語系 */ isLocaleSupported: (locale)=>SERVER_APP_CONFIG.i18n.supportedLocales.includes(locale),
    /** 是否應該模擬 API 延遲 */ shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY > 0,
    /** 是否應該模擬錯誤 */ shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/locale.server.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "serverLocaleConfig": ()=>serverLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const serverLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：語系驗證（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return serverLocaleConfig.supportedLocales.includes(locale);
    },
    // 工具：取得有效的預設語系
    getValidDefaultLocale: ()=>{
        const envDefault = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
        return serverLocaleConfig.supportedLocales.includes(envDefault) ? envDefault : serverLocaleConfig.supportedLocales[0];
    },
    // 衍生：國家子網域映射
    countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}'),
    // 工具：依國家取子網域（使用衍生 countrySubdomainMap）
    getSubdomainByCountry: (country)=>{
        return serverLocaleConfig.countrySubdomainMap[country] || null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/locale.client.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "clientLocaleConfig": ()=>clientLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const clientLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：驗證語系是否被支援（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return clientLocaleConfig.supportedLocales.includes(locale);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/cache.client.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
    return Object.entries(cacheDataTypes).filter((param)=>{
        let [_, config] = param;
        return config.tags.includes(tag);
    }).map((param)=>{
        let [key] = param;
        return key;
    });
}
function getAllCacheTags() {
    const allTags = Object.values(cacheDataTypes).flatMap((config)=>config.tags);
    return [
        ...new Set(allTags)
    ];
}
function getCacheConfigSummary() {
    return Object.entries(cacheDataTypes).map((param)=>{
        let [type, config] = param;
        return {
            type,
            ttl: "".concat(config.ttl, "s (").concat(config.ttl / 60, "min)"),
            tags: config.tags.join(', '),
            description: config.description
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/cache.server.config.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-client] (ecmascript)");
;
;
// 服務端覆寫：僅作必要差異（例：apiResponse）
const serverTtl = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheConfig"].ttl,
    apiResponse: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
};
const serverTags = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheConfig"].tags
};
const serverCacheConfig = {
    // key 規則（沿用 client）
    redis: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheConfig"].redis,
    // ttl/tags 聚合（server 覆寫）
    ttl: serverTtl,
    tags: serverTags,
    // 快取鍵值生成（純規則）
    generateKey: (type, identifier, locale)=>{
        const parts = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheConfig"].redis.prefix,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cacheConfig"].redis.keySeparator);
    }
};
const isCacheEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED;
const isCdnEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED;
const getDefaultTtl = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL; // 秒
const getCacheStrategy = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY;
;
function getServerCacheConfig(type) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCacheConfig"])(type);
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
            ttl: "".concat(serverTtl[type], "s (").concat(serverTtl[type] / 60, "min)"),
            tags: serverTags[type].join(', '),
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCacheConfig"])(type).description
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/cache.server.config.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/config/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
// export { env } from '../env.mjs';
// 導出 API 配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-client] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-client] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-client] (ecmascript) <module evaluation>");
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/i18n/routing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverLocaleConfig"].supportedLocales,
    // 預設語系 - 先用 env，若不在支援清單內則回退第一個
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverLocaleConfig"].getValidDefaultLocale(),
    // 語系前綴模式 - 從環境變數讀取
    localePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].LOCALE_PREFIX_MODE,
    // 啟用語系檢測 - 從環境變數讀取
    localeDetection: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].LOCALE_DETECTION_ENABLED
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/i18n/navigation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Link": ()=>Link,
    "getPathname": ()=>getPathname,
    "redirect": ()=>redirect,
    "usePathname": ()=>usePathname,
    "useRouter": ()=>useRouter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/locale-utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "appendSearchParams": ()=>appendSearchParams,
    "getBasePathWithoutLocale": ()=>getBasePathWithoutLocale,
    "hasLocalePrefix": ()=>hasLocalePrefix,
    "prepareLanguageSwitcherHref": ()=>prepareLanguageSwitcherHref
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
function getBasePathWithoutLocale(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    // 檢查第一段是否為支援的語系
    const hasLocalePrefix = !!first && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales.includes(first);
    // 移除語系前綴
    const withoutLocale = hasLocalePrefix ? parts.slice(1) : parts;
    const path = "/".concat(withoutLocale.join('/'));
    return path === '' ? '/' : path;
}
function hasLocalePrefix(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    return !!first && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales.includes(first);
}
function appendSearchParams(path, searchParams) {
    const qsString = searchParams === null || searchParams === void 0 ? void 0 : searchParams.toString();
    return qsString ? "".concat(path, "?").concat(qsString) : path;
}
function prepareLanguageSwitcherHref(pathname, searchParams) {
    const basePath = getBasePathWithoutLocale(pathname);
    return appendSearchParams(basePath, searchParams);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locale-utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function LanguageSwitcher(param) {
    let { className, languages, currentLocale, pathname, searchParams, showLabels = true, showIcons = false, variant = 'inline', showDefaultBadge = false } = param;
    // 基礎資料檢查：若語系列表為空
    if (!languages || languages.length === 0) {
        // 開發環境下提示，協助定位資料注入問題
        if ("TURBOPACK compile-time truthy", 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 text-sm",
                    children: "⚠️ 無語系資料"
                }, void 0, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 57,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this);
        }
        //TURBOPACK unreachable
        ;
    }
    // 取得目前語系對應的語言物件（用於顯示圖示或標籤）
    const currentLanguage = languages.find((lang)=>lang.id === currentLocale);
    return(// nav 容器：指定 aria-label，協助讀屏器辨識此導覽區塊用途
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        children: variant === 'dropdown' ? // 下拉模式：目前僅示範按鈕，尚未加入彈出選單與鍵盤操作
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200",
                // 尚未開啟，下拉內容會對應 aria-expanded 與 aria-controls
                "aria-expanded": "false",
                // 表示將會打開 menu 類型的彈出內容
                "aria-haspopup": "menu",
                // 讀屏器描述目前語言
                "aria-label": "Current language: ".concat((currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.native) || (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.title)),
                children: [
                    showIcons && (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.icon) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "".concat(currentLanguage.icon, " inline-block h-4 w-4")
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 85,
                        columnNumber: 29
                    }, this),
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.native) || (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.title)
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 88,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                            lineNumber: 92,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 91,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 74,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 73,
            columnNumber: 17
        }, this) : // 內聯模式：直接列出所有可切換的語言
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap items-center gap-2",
            children: languages.map((lang)=>{
                // 顯示標籤：優先顯示原生語言名稱
                const label = lang.native || lang.title;
                // 產生「語系無關」的 href，以便由 Link 的 locale 屬性插入目標語系
                const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareLanguageSwitcherHref"])(pathname, searchParams);
                // 是否為當前語言
                const active = currentLocale === lang.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: active ? // 當前語言：不渲染為連結，避免重整同頁與誤點
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-blue-600 text-white cursor-default",
                        // 指示目前所處頁面語言
                        "aria-current": "page",
                        "aria-label": "Current language: ".concat(label),
                        children: [
                            showIcons && lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "".concat(lang.icon, " inline-block h-4 w-4")
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 119,
                                columnNumber: 68
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 121,
                                columnNumber: 56
                            }, this),
                            showDefaultBadge && lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                "aria-label": "Default language",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 124,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "(current)"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 132,
                                columnNumber: 41
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 112,
                        columnNumber: 37
                    }, this) : // 其他語言：渲染為可點擊的 Link，交由 Link 的 locale 屬性切換語系
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: href,
                        // 透過 locale 指定目標語系；型別上收斂為 routing.locales 的成員
                        locale: lang.id,
                        className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        // 讀屏器說明：切換到某語言（若有原生名稱則一併說明）
                        "aria-label": "Switch to ".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                        // 滑鼠提示：與 aria-label 保持一致
                        title: "".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                        // SEO 輔助：標示此連結目標的語言（可留可不留，hreflang 正式應放在 head alternates）
                        hrefLang: lang.id,
                        // HTML 語言屬性，輔助正確渲染語言特性
                        lang: lang.id,
                        children: [
                            showIcons && lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "".concat(lang.icon, " inline-block h-4 w-4")
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 151,
                                columnNumber: 68
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 153,
                                columnNumber: 56
                            }, this),
                            showDefaultBadge && lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                "aria-label": "Default language",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 156,
                                columnNumber: 45
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 136,
                        columnNumber: 37
                    }, this)
                }, lang.id, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 109,
                    columnNumber: 29
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 99,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this));
}
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLanguageSwitcher": ()=>useLanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function useLanguageSwitcher() {
    _s();
    // 取得當前路徑，用於生成語言切換連結
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    // 取得當前語系
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    // 取得 URL 查詢參數，用於保持切換語言時的參數
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 語言列表狀態
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // 載入狀態
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 錯誤狀態
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 載入語言列表
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLanguageSwitcher.useEffect": ()=>{
            let isMounted = true;
            const loadLanguages = {
                "useLanguageSwitcher.useEffect.loadLanguages": async ()=>{
                    try {
                        setIsLoading(true);
                        setError(null);
                        // 使用客戶端 API 路由來獲取語言列表
                        const response = await fetch('/api/languages');
                        if (!response.ok) {
                            throw new Error('Failed to fetch languages');
                        }
                        const languageList = await response.json();
                        if (isMounted) {
                            setLanguages(languageList);
                        }
                    } catch (err) {
                        if (isMounted) {
                            setError(err instanceof Error ? err.message : '載入語言列表失敗');
                            console.error('Failed to load languages:', err);
                        }
                    } finally{
                        if (isMounted) {
                            setIsLoading(false);
                        }
                    }
                }
            }["useLanguageSwitcher.useEffect.loadLanguages"];
            loadLanguages();
            return ({
                "useLanguageSwitcher.useEffect": ()=>{
                    isMounted = false;
                }
            })["useLanguageSwitcher.useEffect"];
        }
    }["useLanguageSwitcher.useEffect"], []);
    return {
        pathname,
        currentLocale,
        searchParams,
        languages,
        isLoading,
        error
    };
}
_s(useLanguageSwitcher, "NPZ9QG+1qAl/DJNtoO/uDQMLRcs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/language/hooks/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/language/hooks/index.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LanguageSwitcherContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function LanguageSwitcherContainer(param) {
    let { className, showLabels = true, variant = 'inline', loadingComponent, errorComponent, languages: providedLanguages } = param;
    _s();
    const { pathname, currentLocale, searchParams, languages: hookLanguages, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcher"])();
    // 如果有提供語言資料，就使用提供的，否則使用 hook 載入的
    const languages = providedLanguages || hookLanguages;
    const shouldShowLoading = !providedLanguages && isLoading;
    const shouldShowError = !providedLanguages && error;
    // 載入中狀態
    if (shouldShowLoading) {
        return loadingComponent || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-500 text-sm",
                children: "載入語言選項..."
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcherContainer.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcherContainer.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this);
    }
    // 錯誤狀態
    if (shouldShowError) {
        return errorComponent || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-sm",
                children: [
                    "⚠️ ",
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/language/components/LanguageSwitcherContainer.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcherContainer.tsx",
            lineNumber: 62,
            columnNumber: 13
        }, this);
    }
    // 正常渲染
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: className,
        languages: languages,
        currentLocale: currentLocale,
        pathname: pathname,
        searchParams: searchParams,
        showLabels: showLabels,
        variant: variant
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageSwitcherContainer.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcherContainer, "5gdwEeTiIlvEUJFM/Eg7hXqM1nU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageSwitcher"]
    ];
});
_c = LanguageSwitcherContainer;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcherContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_6aad038d._.js.map