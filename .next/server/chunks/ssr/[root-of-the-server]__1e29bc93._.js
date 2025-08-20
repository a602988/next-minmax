module.exports = {

"[project]/src/env.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
;
;
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEnv"])({
    /**
     * 伺服器端專用環境變數。
     * 這些變數「不會」暴露給客戶端，適合放置敏感資訊如 API 金鑰。
     */ server: {
        // ==========================================
        // 專案核心配置 - 伺服器端專用
        // ==========================================
        PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
        // ==========================================
        // API 與外部服務配置 - 伺服器端專用
        // ==========================================
        API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("https://v5.jeffy.test"),
        I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
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
        NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("測試網站"),
        NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
        // ==========================================
        // 🌍 國際化與語系配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
        NEXT_PUBLIC_SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW'),
        NEXT_PUBLIC_LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            'always',
            'as-needed',
            'never'
        ]).default('as-needed'),
        NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        // ==========================================
        // 🗺️ 地理位置偵測配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "cdn-only",
            "api-only",
            "cdn-fallback"
        ]).default("api-only"),
        NEXT_PUBLIC_GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "off",
            "suggest",
            "force"
        ]).default("suggest"),
        NEXT_PUBLIC_FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
        NEXT_PUBLIC_GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "ipapi",
            "ipinfo",
            "geoplugin"
        ]).default("geoplugin"),
        NEXT_PUBLIC_GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(5000),
        // ==========================================
        // 🔄 快取系統配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(3600),
        // ==========================================
        // ⚙️ 功能開關 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // 🔧 開發與測試配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(true),
        NEXT_PUBLIC_MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(100),
        NEXT_PUBLIC_MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().min(0).max(1).default(0.0),
        // ==========================================
        // 📊 監控與日誌配置 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().default(false),
        // ==========================================
        // ⏱️ 超時設定 (來自共享配置)
        // ==========================================
        NEXT_PUBLIC_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(30000),
        NEXT_PUBLIC_CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().default(60000),
        // ==========================================
        // 🌐 API 與服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().default("http://localhost:3000/api/ssr/"),
        // ==========================================
        // 🔧 外部服務配置 - 客戶端專用
        // ==========================================
        NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().optional()
    },
    /**
     * 運行時的環境變數來源。
     * 對於 Next.js，這應該總是 `process.env`。
     * createEnv 會自動處理 server-side 和 client-side 的變數分離。
     */ runtimeEnv: process.env
});
}),
"[project]/src/config/api.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "apiConfig": ()=>apiConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_BASE_URL,
    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? {
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
        api: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT,
        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CONTENT_API_TIMEOUT,
        geo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_API_TIMEOUT
    },
    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true
    },
    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY > 0,
    getMockDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY,
    shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_RATE
};
}),
"[project]/src/config/app.client.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "appConfig": ()=>appConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const appConfig = {
    // 衍生：API 超時（毫秒），若無設定則回退 30000
    apiTimeout: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT : Number.parseInt(String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT ?? ''), 10) || 30000,
    // 衍生：i18n 啟用（客戶端視角）的布林正規化
    i18nEnabled: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'boolean' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED : String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED).toLowerCase() === 'true'
};
}),
"[project]/src/config/app.server.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SERVER_APP_CONFIG": ()=>SERVER_APP_CONFIG,
    "SERVER_COMPUTED": ()=>SERVER_COMPUTED
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const SERVER_APP_CONFIG = {
    // 國際化配置 - 數據轉換
    i18n: {
        supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((locale)=>locale.trim()),
        countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}')
    },
    // API 配置 - 條件邏輯
    api: {
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_BASE_URL
    }
};
const SERVER_COMPUTED = {
    /** 是否啟用完整國際化功能（伺服端視角） */ isI18nEnabled: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
    /** 檢查是否支援特定語系 */ isLocaleSupported: (locale)=>SERVER_APP_CONFIG.i18n.supportedLocales.includes(locale),
    /** 是否應該模擬 API 延遲 */ shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY > 0,
    /** 是否應該模擬錯誤 */ shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
};
}),
"[project]/src/config/locale.server.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serverLocaleConfig": ()=>serverLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const serverLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：語系驗證（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return serverLocaleConfig.supportedLocales.includes(locale);
    },
    // 工具：取得有效的預設語系
    getValidDefaultLocale: ()=>{
        const envDefault = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
        return serverLocaleConfig.supportedLocales.includes(envDefault) ? envDefault : serverLocaleConfig.supportedLocales[0];
    },
    // 衍生：國家子網域映射
    countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}'),
    // 工具：依國家取子網域（使用衍生 countrySubdomainMap）
    getSubdomainByCountry: (country)=>{
        return serverLocaleConfig.countrySubdomainMap[country] || null;
    }
};
}),
"[project]/src/config/locale.client.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clientLocaleConfig": ()=>clientLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const clientLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：驗證語系是否被支援（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return clientLocaleConfig.supportedLocales.includes(locale);
    }
};
}),
"[project]/src/config/cache.client.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-rsc] (ecmascript)");
;
;
// 服務端覆寫：僅作必要差異（例：apiResponse）
const serverTtl = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheConfig"].ttl,
    apiResponse: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
};
const serverTags = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheConfig"].tags
};
const serverCacheConfig = {
    // key 規則（沿用 client）
    redis: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheConfig"].redis,
    // ttl/tags 聚合（server 覆寫）
    ttl: serverTtl,
    tags: serverTags,
    // 快取鍵值生成（純規則）
    generateKey: (type, identifier, locale)=>{
        const parts = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheConfig"].redis.prefix,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cacheConfig"].redis.keySeparator);
    }
};
const isCacheEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED;
const isCdnEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED;
const getDefaultTtl = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL; // 秒
const getCacheStrategy = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY;
;
function getServerCacheConfig(type) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheConfig"])(type);
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
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheConfig"])(type).description
        }));
}
}),
"[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/config/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
// export { env } from '../env.mjs';
// 導出 API 配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-rsc] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-rsc] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <module evaluation>");
;
;
;
;
;
;
;
}),
"[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/i18n/routing.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-rsc] (ecmascript) <export default as defineRouting>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
;
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
    locales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverLocaleConfig"].supportedLocales,
    // 預設語系 - 先用 env，若不在支援清單內則回退第一個
    defaultLocale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverLocaleConfig"].getValidDefaultLocale(),
    // 語系前綴模式 - 從環境變數讀取
    localePrefix: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].LOCALE_PREFIX_MODE,
    // 啟用語系檢測 - 從環境變數讀取
    localeDetection: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].LOCALE_DETECTION_ENABLED
});
}),
"[project]/src/lib/dev-logger.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 開發環境專用日誌工具
 *
 * 功能：
 * - 只在開發環境輸出日誌
 * - 提供不同等級的日誌方法
 * - 統一的日誌格式和樣式
 * - 支援業務日誌（可在生產環境使用）
 */ /**
 * 檢查是否為開發環境
 */ __turbopack_context__.s({
    "DevTimer": ()=>DevTimer,
    "apiError": ()=>apiError,
    "apiLog": ()=>apiLog,
    "apiSuccess": ()=>apiSuccess,
    "devDebug": ()=>devDebug,
    "devError": ()=>devError,
    "devInfo": ()=>devInfo,
    "devInspect": ()=>devInspect,
    "devLog": ()=>devLog,
    "devSuccess": ()=>devSuccess,
    "devTable": ()=>devTable,
    "devWarn": ()=>devWarn
});
const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
const devLog = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`📝 ${message}`, data ? data : '');
    }
};
const devInfo = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.info(`ℹ️ ${message}`, data ? data : '');
    }
};
const devWarn = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.warn(`⚠️ ${message}`, data ? data : '');
    }
};
const devError = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.error(`❌ ${message}`, data ? data : '');
    }
};
const devDebug = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`🐛 ${message}`, data ? data : '');
    }
};
const devSuccess = (message, data)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`✅ ${message}`, data ? data : '');
    }
};
const apiLog = (message, data)=>{
    const apiLoggingEnabled = process.env.API_LOGGING_ENABLED === 'true';
    if (apiLoggingEnabled) {
        console.log(`🌐 ${message}`, data ? data : '');
    }
};
const apiSuccess = (message, data)=>{
    const apiLoggingEnabled = process.env.API_LOGGING_ENABLED === 'true';
    if (apiLoggingEnabled) {
        console.log(`✅ ${message}`, data ? data : '');
    }
};
const apiError = (message, data)=>{
    console.error(`❌ ${message}`, data ? data : '');
};
class DevTimer {
    startTime;
    label;
    constructor(label){
        this.label = label;
        this.startTime = performance.now();
        if ("TURBOPACK compile-time truthy", 1) {
            console.time(label);
        }
    }
    end() {
        if ("TURBOPACK compile-time truthy", 1) {
            console.timeEnd(this.label);
            const duration = performance.now() - this.startTime;
            console.log(`⏱️ ${this.label}: ${duration.toFixed(2)}ms`);
        }
    }
}
const devInspect = (label, obj)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.group(`🔍 ${label}`);
        console.log(obj);
        console.groupEnd();
    }
};
const devTable = (label, data)=>{
    if (isDevelopment && Array.isArray(data)) {
        console.log(`📊 ${label}`);
        console.table(data);
    }
};
}),
"[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "BaseApiService": ()=>BaseApiService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dev-logger.ts [app-rsc] (ecmascript)");
;
;
;
class BaseApiService {
    serviceName;
    constructor(serviceName){
        this.serviceName = serviceName;
    }
    /**
     * 通用的 API 請求方法
     */ async apiRequest(endpoint, options = {}) {
        const url = this.buildApiUrl(endpoint);
        // 開發環境的詳細除錯日誌
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devDebug"])(`開始 API 請求: ${this.serviceName}`, {
            url,
            options
        });
        // 效能監控（僅開發環境）
        const timer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DevTimer"](`${this.serviceName} API 請求`);
        try {
            this.logApiCall(url);
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...options.headers
                },
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? {} : {
                    signal: AbortSignal.timeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].timeouts.api)
                },
                ...options
            });
            // HTTP 狀態碼錯誤處理
            if (!response.ok) {
                const errorDetails = {
                    url,
                    status: response.status,
                    statusText: response.statusText,
                    headers: Object.fromEntries(response.headers.entries())
                };
                // 根據狀態碼決定日誌等級
                if (response.status >= 500) {
                    // 5xx 伺服器錯誤 - 使用 error 等級
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devError"])(`伺服器錯誤 (${response.status}): ${this.serviceName}`, errorDetails);
                } else if (response.status >= 400) {
                    // 4xx 客戶端錯誤 - 使用 warn 等級
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])(`客戶端錯誤 (${response.status}): ${this.serviceName}`, {
                        ...errorDetails,
                        possibleCauses: this.getPossibleCauses(response.status)
                    });
                } else {
                    // 其他非 2xx 狀態碼
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])(`非預期回應 (${response.status}): ${this.serviceName}`, errorDetails);
                }
                throw new Error(`${this.serviceName} API 請求失敗: ${response.status} ${response.statusText}`);
            }
            const apiResponse = await response.json();
            const data = apiResponse.data ?? apiResponse;
            // 開發環境的回應資料檢查
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devDebug"])(`API 回應資料: ${this.serviceName}`, data);
            this.logSuccess(data);
            timer.end(); // 結束效能計時
            return data;
        } catch (error) {
            timer.end(); // 即使錯誤也要結束計時
            // 區分不同類型的錯誤
            if (error instanceof TypeError && error.message.includes('fetch')) {
                // 網路連線錯誤
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devError"])(`網路連線失敗: ${this.serviceName}`, {
                    url,
                    error: error.message,
                    possibleCauses: [
                        '網路斷線',
                        'DNS 解析失敗',
                        '防火牆阻擋',
                        'CORS 問題'
                    ]
                });
            } else if (error instanceof DOMException && error.name === 'AbortError') {
                // 請求超時
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])(`API 請求超時: ${this.serviceName}`, {
                    url,
                    timeout: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? 'N/A' : `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].timeouts.api}ms`,
                    suggestion: '考慮增加超時時間或檢查網路狀況'
                });
            } else if (error instanceof SyntaxError) {
                // JSON 解析錯誤
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devError"])(`回應格式錯誤: ${this.serviceName}`, {
                    url,
                    error: error.message,
                    suggestion: '檢查 API 回應是否為有效的 JSON 格式'
                });
            } else if (error instanceof Error && error.message.includes('API 請求失敗')) {
            // HTTP 狀態碼錯誤（已在上面處理過日誌）
            // 這裡不需要額外的開發日誌
            } else {
                // 其他未知錯誤
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devError"])(`未知錯誤: ${this.serviceName}`, {
                    url,
                    error,
                    stack: error instanceof Error ? error.stack : null
                });
            }
            this.logError(error);
            throw error;
        }
    }
    /**
     * 根據環境變數建構 API 網址
     */ buildApiUrl(endpoint) {
        const path = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? endpoint.mock : endpoint.external;
        const fullUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].baseUrl}${path}`;
        // 開發環境顯示 URL 建構過程
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devDebug"])(`建構 API URL: ${this.serviceName}`, {
            baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].baseUrl,
            path,
            fullUrl,
            useMock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API
        });
        return fullUrl;
    }
    /**
     * 記錄 API 呼叫日誌
     */ logApiCall(url) {
        // 業務日誌：使用統一的 apiLog 函數
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiLog"])(`${this.serviceName} API 呼叫: ${url} (mock: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API})`);
        // 開發日誌：僅開發環境，提供更詳細的資訊
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devLog"])(`啟動 ${this.serviceName} API 請求: ${url}`);
    }
    /**
     * 記錄成功日誌
     */ logSuccess(data) {
        // 業務日誌：使用統一的 apiSuccess 函數
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiSuccess"])(`${this.serviceName} 資料載入成功`);
        // 開發日誌：僅開發環境，提供更多細節
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devSuccess"])(`${this.serviceName} 成功取得資料`, {
            dataType: typeof data,
            hasData: !!data,
            dataKeys: data && typeof data === 'object' ? Object.keys(data) : null
        });
    }
    /**
     * 記錄錯誤日誌
     */ logError(error) {
        // 業務日誌：使用統一的 apiError 函數（總是記錄）
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiError"])(`${this.serviceName} API 呼叫失敗`, error);
        // 開發日誌：提供更詳細的錯誤資訊（僅開發環境）
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devError"])(`${this.serviceName} 詳細錯誤資訊`, {
            error,
            stack: error instanceof Error ? error.stack : null,
            timestamp: new Date().toISOString()
        });
    }
    /**
     * 根據 HTTP 狀態碼提供可能的原因
     */ getPossibleCauses(status) {
        switch(status){
            case 400:
                return [
                    '請求參數錯誤',
                    '請求格式不正確',
                    '缺少必要參數'
                ];
            case 401:
                return [
                    '未授權',
                    'API 金鑰無效',
                    '登入狀態過期',
                    'Token 失效'
                ];
            case 403:
                return [
                    '權限不足',
                    '資源被禁止存取',
                    '帳號被停用'
                ];
            case 404:
                return [
                    'API 端點不存在',
                    '資源未找到',
                    'URL 路徑錯誤'
                ];
            case 405:
                return [
                    'HTTP 方法不被允許',
                    '檢查請求方法 (GET/POST/PUT/DELETE)'
                ];
            case 409:
                return [
                    '資源衝突',
                    '重複的資料',
                    '併發更新衝突'
                ];
            case 422:
                return [
                    '請求格式正確但語義錯誤',
                    '驗證失敗',
                    '業務邏輯錯誤'
                ];
            case 429:
                return [
                    '請求頻率過高',
                    '超過 API 限制',
                    '需要等待後重試'
                ];
            case 500:
                return [
                    '伺服器內部錯誤',
                    '後端程式異常',
                    '資料庫連線問題'
                ];
            case 502:
                return [
                    '閘道錯誤',
                    '上游伺服器無回應',
                    '負載平衡器問題'
                ];
            case 503:
                return [
                    '服務暫時無法使用',
                    '伺服器維護中',
                    '系統過載'
                ];
            case 504:
                return [
                    '閘道超時',
                    '上游伺服器回應太慢',
                    '網路延遲過高'
                ];
            default:
                return [
                    '請檢查 API 文件',
                    '聯絡後端開發人員',
                    '檢查網路連線'
                ];
        }
    }
}
}),
"[project]/src/services/language.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "languageService": ()=>languageService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
;
;
/**
 * 支援語系服務 - 抽象化 API 呼叫
 * - 不重複 env：基底類別負責超時與 baseUrl 邏輯
 * - 本類別只決定端點 path 與成功日誌格式
 */ class LanguageService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('支援語系');
    }
    /**
     * 取得支援的語系清單
     */ async getLanguages() {
        // 端點 path 已由 apiConfig 依 USE_MOCK_API 切換
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].endpoints.language,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].endpoints.language
        };
        const data = await this.apiRequest(endpoint);
        // 成功日誌（不覆寫 base 的 logSuccess，以避免簽名不一致）
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED) {
            console.log(`✅ ${this.serviceName}資料載入成功:`, data.length, '個語系');
        }
        return data;
    }
}
const languageService = new LanguageService();
}),
"[project]/src/services/locales.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "localesService": ()=>localesService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dev-logger.ts [app-rsc] (ecmascript)");
;
;
;
/**
 * 國家語系對應服務
 */ class LocalesService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('國家語系對應');
    }
    /**
     * 取得國家語系對照表
     */ async getLocales() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].endpoints.locales,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiConfig"].endpoints.locales
        };
        return await this.apiRequest(endpoint);
    }
    /**
     * 覆寫成功日誌，提供業務特定的資訊
     */ logSuccess(data) {
        // 業務日誌：使用統一的 apiSuccess 函數
        if (data && typeof data === 'object' && !Array.isArray(data)) {
            const keys = Object.keys(data);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiSuccess"])(`${this.serviceName} 資料載入成功: ${keys.length} 個國家對照`);
        } else {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiSuccess"])(`${this.serviceName} 資料載入成功`);
        }
        // 開發日誌：使用統一的 devSuccess 函數
        if (data && typeof data === 'object') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devSuccess"])(`${this.serviceName} 成功載入國家語系對照表`);
            // 開發環境的詳細檢查
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devInspect"])('國家語系對照表詳細資訊', {
                總數量: Object.keys(data).length,
                前5個國家: Object.keys(data).slice(0, 5),
                範例對照: Object.entries(data).slice(0, 3),
                完整資料: data
            });
        }
    }
    /**
     * 根據國家代碼取得對應語系
     */ async getLocaleByCountry(countryCode) {
        try {
            const locales = await this.getLocales();
            const result = locales[countryCode] || null;
            // 開發環境記錄查詢結果
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devInspect"])(`國家代碼查詢: ${countryCode}`, {
                輸入: countryCode,
                結果: result,
                是否找到: !!result,
                可用國家: Object.keys(locales).slice(0, 10) // 顯示前10個可用國家
            });
            return result;
        } catch (error) {
            // 使用統一的錯誤日誌函數
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiError"])(`無法取得國家 ${countryCode} 對應的語系`, {
                countryCode,
                error: error instanceof Error ? error.message : error
            });
            return null;
        }
    }
}
const localesService = new LocalesService();
}),
"[project]/src/i18n/i18n-integration.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "I18nIntegration": ()=>I18nIntegration
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dev-logger.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
class I18nIntegration {
    // ==========================================
    // 資料快取
    // ==========================================
    /** 語系列表 - 快取 */ static cachedLanguages = null;
    /** 語系列表 - 最後更新時間 */ static lastFetchTime = 0;
    /** 國家語系對應表 - 快取 */ static cachedCountryLocaleMap = null;
    /** 國家語系對應表- 最後更新時間 */ static lastLocalesFetchTime = 0;
    // ==========================================
    // 取得資料快取
    // ==========================================
    /**
     * 語系清單 - 取得動態並快取
     *
     * 功能：
     * - 從 API 獲取最新語系列表
     * - 實現記憶體快取，避免重複請求
     * - API 失敗時自動降級使用靜態配置
     *
     * @returns Promise<Language[]> 語系列表
     */ static async getLanguages() {
        // 取得現在時間以作為快取效期
        const now = Date.now();
        // JavaScript 的 Date.now() 回傳的是毫秒，而配置檔中的 TTL 通常設定為秒，所以需要轉換單位才能正確比較。
        const cacheExpiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getServerCacheTtl"])('languages') * 1000; // 快取時間 (秒) - 1小時 * 轉為毫秒
        // 檢查快取是否有效
        // 計算距離上次獲取資料經過了多少時間，比較是否小於快取有效期，如果有效，直接返回快取資料
        if (this.cachedLanguages && now - this.lastFetchTime < cacheExpiry) {
            return this.cachedLanguages;
        }
        // 如果快取無效，從 API 取得語系列表，並存到快取中
        try {
            // 從 API 獲取最新語系資料
            const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
            // 儲存到快取中
            this.cachedLanguages = languages;
            this.lastFetchTime = now;
            return languages;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])('無法載入動態語系，使用靜態配置', error);
            // 降級處理：返回靜態配置的語系
            return this.getStaticFallbackLanguages();
        }
    }
    /**
     * 國家語系對應表 - 取得動態並快取
     *
     * 功能：
     * - 從 API 獲取國家代碼與語系的對應關係
     * - 用於地理位置偵測後的語系重導
     * - 支援記憶體快取機制
     *
     * 使用場景：
     * - 中間件根據 IP 地理位置重導語系
     * - 語系切換器顯示地區相關選項
     *
     * @returns Promise<Locale> 國家語系對應表
     */ static async getLocales() {
        // 取得現在時間以作為快取效期
        const now = Date.now();
        // JavaScript 的 Date.now() 回傳的是毫秒，而配置檔中的 TTL 通常設定為秒，所以需要轉換單位才能正確比較。
        const cacheExpiry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getServerCacheTtl"])('locales') * 1000; // 快取時間 (秒) - 1小時 * 轉為毫秒
        // 檢查快取是否有效
        // 計算距離上次獲取資料經過了多少時間，比較是否小於快取有效期，如果有效，直接返回快取資料
        if (this.cachedCountryLocaleMap && now - this.lastLocalesFetchTime < cacheExpiry) {
            return this.cachedCountryLocaleMap;
        }
        // 如果快取無效，從 API 取得語系列表，並存到快取中
        try {
            // 從 API 獲取最新對應表
            const map = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localesService"].getLocales();
            // 儲存到快取中
            this.cachedCountryLocaleMap = map;
            this.lastLocalesFetchTime = now;
            return map;
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])('無法載入地區對應表，使用空對應表', error);
            // 降級處理：返回空的對應表
            return {};
        }
    }
    /**
     * 將 Language[] 轉換為 next-intl 需要的 locales 陣列
     *
     * 用途：橋接動態語系資料與 Next.js 路由系統
     *
     * @returns Promise<string[]> 支援的語系代碼陣列
     */ static async getSupportedLocales() {
        const languages = await this.getLanguages();
        return languages.map((lang)=>lang.id);
    }
    /**
     * 取得預設語系
     *
     * 邏輯：
     * 1. 優先使用動態資料中標記為 default 的語系
     * 2. 找不到時使用配置檔的預設值
     *
     * @returns Promise<string> 預設語系代碼
     */ static async getDefaultLocale() {
        const languages = await I18nIntegration.getLanguages();
        const defaultLang = languages.find((lang)=>lang.default);
        return defaultLang?.id || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
    }
    // ==========================================
    // 私有輔助方法
    // ==========================================
    /**
     * 靜態備援語系資料
     *
     * 當 API 不可用時的降級方案：
     * - 使用 locales.config 的靜態配置
     * - 自動生成基本的語系資訊
     * - 確保系統基本功能不受影響
     *
     * @returns Language[] 靜態語系列表
     */ static getStaticFallbackLanguages() {
        const locales = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SERVER_APP_CONFIG"].i18n.supportedLocales;
        const defaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
        return locales.map((locale)=>({
                id: locale,
                title: locale.toUpperCase(),
                native: locale.toUpperCase(),
                icon: '🌐',
                default: locale === defaultLocale
            }));
    }
}
}),
"[project]/src/i18n/request.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2d$integration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n-integration.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dev-logger.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    // 取得請求中的語系參數（來自 URL 路徑、Accept-Language Header 或 Cookie）
    const requested = await requestLocale;
    // 檢查是否啟用多語系功能
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED) {
        // 單語系模式：直接使用預設語系，不執行動態語系邏輯
        const locale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devLog"])(`🌍 單語系模式: 使用預設語系 ${locale}`);
        return {
            locale,
            // 載入預設語系的翻譯檔案
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
    }
    // 多語系模式：執行完整的動態語系邏輯
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devLog"])(`🌍 多語系模式: 開始動態語系處理`);
    // 1) 取得動態有效語系與動態預設語系（內含快取機制）
    let supportedLocales = [];
    let dynamicDefaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    try {
        // 從 API 取得最新的支援語系清單
        supportedLocales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2d$integration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegration"].getSupportedLocales();
        // 從 API 取得動態設定的預設語系
        dynamicDefaultLocale = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2d$integration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegration"].getDefaultLocale();
    } catch (e) {
        // 動態載入失敗時，使用 routing 的靜態預設作為兜底
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])('⚠️ 載入動態 locales 失敗，使用靜態 routing 作為兜底', e);
        supportedLocales = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales
        ]; // 建立可變副本
        dynamicDefaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    // 2) 依優先序決定候選語系：URL 參數 → Cookie 儲存 → 動態預設 → 靜態預設
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
    const candidate = requested || // 優先使用 URL 中的語系
    (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].localeDetection ? cookieLocale : undefined) || // 若啟用偵測則使用 Cookie
    dynamicDefaultLocale || // 使用 API 設定的預設語系
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale; // 最後回退到靜態預設
    // 3) 嚴格驗證候選語系是否在支援清單中，無效則依序回退
    const isValid = supportedLocales.includes(candidate);
    const locale = isValid ? candidate // 候選語系有效，直接使用
     : supportedLocales.includes(dynamicDefaultLocale) ? dynamicDefaultLocale // 回退到動態預設語系
     : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale; // 最終回退到靜態預設語系
    // 4) 載入對應語系的翻譯檔案，失敗時回退到預設語系檔案
    let messages;
    try {
        // 嘗試載入目標語系的翻譯檔案
        messages = (await __turbopack_context__.f({
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
        }).import(`../../messages/${locale}.json`)).default;
    } catch (e) {
        // 翻譯檔案不存在時，回退到預設語系的翻譯檔案
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devWarn"])(`⚠️ 找不到 ${locale}.json，回退至 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale}.json`, e);
        messages = (await __turbopack_context__.f({
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
        }).import(`../../messages/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale}.json`)).default;
    }
    // 開發環境下輸出語系決策過程，便於除錯
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dev$2d$logger$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["devLog"])(`🌍 語系決策: requested=${requested} cookie=${cookieLocale} final=${locale}`);
    return {
        locale,
        messages
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
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LocaleLayout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/RequestLocaleCache.js [app-rsc] (ecmascript) <export setCachedRequestLocale as setRequestLocale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-server/NextIntlClientProviderServer.js [app-rsc] (ecmascript) <export default as NextIntlClientProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/core.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2d$integration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/i18n-integration.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    // SSR 初始化語系列表（預熱快取，供後續使用）
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$i18n$2d$integration$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegration"].getLanguages();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$core$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasLocale"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales, locale)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$RequestLocaleCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__setCachedRequestLocale__as__setRequestLocale$3e$__["setRequestLocale"])(locale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: locale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$server$2f$NextIntlClientProviderServer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__NextIntlClientProvider$3e$__["NextIntlClientProvider"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/layout.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/layout.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/layout.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1e29bc93._.js.map