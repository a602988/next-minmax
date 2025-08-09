module.exports = {

"[project]/.next-internal/server/app/[locale]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/i18n/navigation.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Link": ()=>Link,
    "getPathname": ()=>getPathname,
    "redirect": ()=>redirect,
    "usePathname": ()=>usePathname,
    "useRouter": ()=>useRouter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [app-rsc] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"]);
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

__turbopack_context__.s({
    "CACHE_CONFIG": ()=>CACHE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-rsc] (ecmascript)");
;
const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
    CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
    DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
    STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
    // 各類型資料的 TTL 設定 (秒)
    TTL: {
        LANGUAGES: 7200,
        LOCALES: 7200,
        MENUS: 3600,
        WEB_DATA: 3600,
        PAGES: 1800,
        GEO_DATA: 1800,
        API_RESPONSE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
    },
    // Redis 配置 (如果使用 Redis 策略)
    REDIS: {
        URL: undefined,
        PREFIX: 'minmax:',
        KEY_SEPARATOR: ':'
    },
    // 快取標籤 - 用於分組管理和批次清除
    TAGS: {
        LANGUAGES: 'languages',
        LOCALES: 'locales',
        MENUS: 'menus',
        WEB_DATA: 'web-data',
        PAGES: 'pages',
        GEO_DATA: 'geo-data',
        API_RESPONSE: 'api-response'
    },
    // 快取鍵值生成函數：統一生成快取鍵值，確保整個專案使用一致的命名規則。
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
"[project]/src/services/locales.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "localesService": ()=>localesService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
;
;
/**
 * 國家語系對應服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */ class LocalesService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('國家語系對應');
    }
    /**
     * 取得國家語系對照表
     * @returns Promise<CountryLocaleMapping>
     */ async getLocales() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.MOCK.LOCALES,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.EXTERNAL.LOCALES
        };
        return this.apiRequest(endpoint);
    }
    /**
     * 根據國家代碼取得對應語系
     * @param countryCode 國家代碼 (如 "TW", "US")
     * @returns Promise<string | null>
     */ async getLocaleByCountry(countryCode) {
        try {
            const locales = await this.getLocales();
            return locales[countryCode] || null;
        } catch (error) {
            console.error(`❌ 無法取得國家 ${countryCode} 對應的語系:`, error);
            return null;
        }
    }
    /**
     * 覆寫成功日誌，顯示國家數量
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            const countryCount = Object.keys(data).length;
            console.log(`✅ ${this.serviceName}資料載入成功:`, countryCount, '個國家對照');
        }
    }
}
const localesService = new LocalesService();
}),
"[project]/src/services/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// 統一導出所有服務
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/services/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/services/index.ts [app-rsc] (ecmascript) <module evaluation>"); // ✅ 使用統一導出
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
;
;
;
;
async function HomePage() {
    // 靜態渲染的翻譯資料
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])('navigation');
    const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
    const locales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localesService"].getLocales();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "頁面"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 15,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/",
                                children: t('home')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 17,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/about",
                                children: t('about')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/contact",
                                children: t('contact')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "支援的語系清單"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-3",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/${lang.id}`,
                                title: lang.id,
                                children: lang.title
                            }, lang.id, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "國家預設語系"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-3",
                        children: Object.entries(locales).map(([countryCode, locale])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    countryCode,
                                    " :  ",
                                    locale
                                ]
                            }, countryCode, true, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/page.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__07a6d9d6._.js.map