module.exports = {

"[project]/.next-internal/server/app/api/ssr/locales/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/ssr/_data/languages.data.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "languagesData": ()=>languagesData
});
const languagesData = {
    code: "0000",
    message: "成功",
    data: [
        {
            "id": "zh-TW",
            "title": "中文(繁體)",
            "native": "TW",
            "icon": "flag-icon-tw",
            "default": true
        },
        {
            "id": "zh-CN",
            "title": "中文（簡體）",
            "native": "CN",
            "icon": "flag-icon-cn",
            "default": false
        },
        {
            "id": "en",
            "title": "English",
            "native": "EN",
            "icon": "flag-icon-us",
            "default": false
        },
        {
            "id": "ja",
            "title": "日文",
            "native": "JA",
            "icon": "flag-icon-ja",
            "default": false
        }
    ]
};
}),
"[project]/src/env.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "env": ()=>env
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@t3-oss/env-nextjs/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
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
    /** 前端國家站點判斷 開關 */ INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 多語系功能開關 */ MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** ip 地理偵測功能開關 */ GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 強制重導開關 */ FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================
    /** 專案代碼 */ PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
    /** routing - 預設語系 */ DEFAULT_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** routing - 支援的語系 */ SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW'),
    /** routing - 語系前綴  預設 不加*/ LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'always',
        'as-needed',
        'never'
    ]).default('as-needed'),
    /** routing - 啟用語系檢測 */ LOCALE_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    /** 國家子網域對應表 (JSON) {"TW": "tw", "US": "us", "JP": "jp"} */ COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
    // ==========================================
    // 🔄 快取系統配置
    // 控制整體快取策略和生存時間
    // ==========================================
    /** 快取系統總開關 */ CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** CDN 快取協作開關 */ CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 國際化快取策略 */ I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "memory",
        "redis",
        "none"
    ]).default("memory"),
    /** 快取預設生存時間 (秒) */ CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("3600"),
    // ==========================================
    // API 與外部服務配置
    // API 網址、超時設定及第三方服務配置
    // ==========================================
    /** 外部後端 API 基礎網址 */ API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("https://v5.jeffy.test"),
    /** 一般 API 請求超時 (毫秒) */ API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("5000"),
    /** 內容 API 請求超時 (毫秒) */ CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("10000"),
    /** 地理位置 API 超時 (毫秒) */ GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("800"),
    /** 地理位置服務提供商 */ GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ipapi",
        "ipinfo",
        "geoplugin"
    ]).default("geoplugin"),
    // ==========================================
    // 開發與測試配置
    // Mock API、錯誤模擬及開發工具設定
    // ==========================================
    /** Mock API 開關 */ USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** Mock API 延遲模擬 (毫秒) */ MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("100"),
    /** 錯誤模擬開關 */ MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 錯誤模擬機率 (0.0-1.0) */ MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseFloat(val)).default("0.0"),
    // ==========================================
    // 監控與日誌配置
    // API 日誌記錄及效能監控開關
    // ==========================================
    /** API 請求日誌記錄 */ API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 效能監控開關 */ PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 功能開關
    // 各項業務功能的開關控制
    // ==========================================
    /** 會員功能開關 */ MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false")
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
    /** 專案顯示名稱 */ NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("測試網站"),
    /** routing - 預設語系 */ NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** routing - 支援的語系 */ NEXT_PUBLIC_SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW'),
    /** routing - 語系前綴  預設 不加*/ NEXT_PUBLIC_LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'always',
        'as-needed',
        'never'
    ]).default('as-needed'),
    /** routing - 啟用語系檢測 */ NEXT_PUBLIC_LOCALE_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    /** API 版本號 */ NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
    // ==========================================
    // 🌐 API 與服務配置
    // 客戶端 API 呼叫相關設定
    // ==========================================
    /** 前端 API 基礎網址 */ NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000/api/ssr/"),
    // ==========================================
    // 🌍 國際化功能開關
    // 前端國際化相關的功能控制
    // ==========================================
    /** 前端多語系功能開關 */ NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 前端國家站點判斷 開關 */ NEXT_PUBLIC_INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    // ==========================================
    // 🗺️ 地理位置偵測配置
    // 使用者地理位置偵測與重導邏輯設定
    // ==========================================
    /** 地理位置偵測策略 */ NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "cdn-only",
        "api-only",
        "cdn-fallback"
    ]).default("api-only"),
    /** ip 地理偵測功能開關 */ NEXT_PUBLIC_GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 地理重導模式 */ NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "off",
        "suggest",
        "force"
    ]).default("suggest"),
    /** 強制重導開關 */ NEXT_PUBLIC_FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** CDN 國家標頭名稱 */ NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
    // ==========================================
    // 🔄 快取系統配置
    // 前端快取策略和生存時間
    // ==========================================
    /** 前端快取功能開關 */ NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 前端 CDN 快取協作開關 */ NEXT_PUBLIC_CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 前端快取預設生存時間 (秒) */ NEXT_PUBLIC_CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("3600"),
    // ==========================================
    // ⚙️ 前端功能配置
    // 前端特有的功能開關和配置
    // ==========================================
    /** 開發模式開關 */ NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 會員功能開關 */ NEXT_PUBLIC_MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 🔧 開發與測試配置
    // 前端可見的開發工具設定
    // ==========================================
    /** 前端 Mock API 開關 */ NEXT_PUBLIC_USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 前端 Mock API 延遲模擬 (毫秒) */ NEXT_PUBLIC_MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("100"),
    /** 前端錯誤模擬開關 */ NEXT_PUBLIC_MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 前端錯誤模擬機率 (0.0-1.0) */ NEXT_PUBLIC_MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseFloat(val)).default("0.0"),
    // ==========================================
    // 📊 監控與日誌配置
    // 前端監控和日誌記錄設定
    // ==========================================
    /** 前端 API 請求日誌記錄 */ NEXT_PUBLIC_API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 前端效能監控開關 */ NEXT_PUBLIC_PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 🔧 外部服務配置
    // 第三方服務的公開配置項目
    // ==========================================
    /** 錯誤追蹤服務 DSN */ NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    /** 前端地理位置服務提供商 */ NEXT_PUBLIC_GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ipapi",
        "ipinfo",
        "geoplugin"
    ]).default("geoplugin"),
    // ==========================================
    // ⏱️ 超時設定
    // 前端 API 請求超時配置
    // ==========================================
    /** 前端一般 API 請求超時 (毫秒) */ NEXT_PUBLIC_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("30000"),
    /** 前端內容 API 請求超時 (毫秒) */ NEXT_PUBLIC_CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("60000"),
    /** 前端地理位置 API 超時 (毫秒) */ NEXT_PUBLIC_GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("5000")
};
// 取得所有 schema 的鍵名
const serverKeys = Object.keys(server);
const clientKeys = Object.keys(client);
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createEnv"])({
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
"[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createCacheHeaders": ()=>createCacheHeaders,
    "createErrorResponse": ()=>createErrorResponse,
    "deepClone": ()=>deepClone,
    "extractStandardParams": ()=>extractStandardParams,
    "isSupportedLocale": ()=>isSupportedLocale,
    "shouldSimulateError": ()=>shouldSimulateError,
    "simulateApiDelay": ()=>simulateApiDelay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
/**
 * 模組級衍生：支援語系清單（從 env 轉換一次即可）
 */ const supportedLocales = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim());
function extractStandardParams(request) {
    const { searchParams } = new URL(request.url);
    const project = searchParams.get('project') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE;
    const rawLanguage = searchParams.get('language');
    const language = isSupportedLocale(rawLanguage) ? rawLanguage : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
    return {
        project,
        language
    };
}
function isSupportedLocale(locale) {
    if (!locale) return false;
    return supportedLocales.includes(locale);
}
async function simulateApiDelay(delay) {
    if ("TURBOPACK compile-time truthy", 1) {
        await new Promise((resolve)=>setTimeout(resolve, delay));
    }
}
function createCacheHeaders(ttl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL) {
    return {
        'Cache-Control': `public, max-age=${ttl}, s-maxage=${ttl}`,
        Vary: 'Accept-Language, Accept-Encoding'
    };
}
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>deepClone(item));
    }
    const source = obj;
    const cloned = {};
    for (const [key, value] of Object.entries(source)){
        cloned[key] = deepClone(value);
    }
    return cloned;
}
function shouldSimulateError() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED) return false;
    return Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE;
}
function createErrorResponse(status = 500, message = 'Internal Server Error') {
    return Response.json({
        success: false,
        error: {
            code: status,
            message,
            timestamp: new Date().toISOString()
        }
    }, {
        status,
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
    });
}
}),
"[project]/src/config/api.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "apiConfig": ()=>apiConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const apiConfig = {
    // 衍生：根據是否使用 Mock 選擇實際 baseUrl
    baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_BASE_URL,
    // 衍生：根據是否使用 Mock 切換端點路徑
    endpoints: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API ? {
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
        api: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT,
        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CONTENT_API_TIMEOUT,
        geo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_API_TIMEOUT
    },
    // 業務常數：重試策略（如需環境化，於此處加衍生邏輯）
    retry: {
        attempts: 3,
        delay: 1000,
        exponentialBackoff: true
    },
    // 業務判斷：是否模擬延遲/錯誤與相關參數
    shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY > 0,
    getMockDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_API_DELAY,
    shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MOCK_ERROR_RATE
};
}),
"[project]/src/config/app.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "appConfig": ()=>appConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const appConfig = {
    // 衍生：API 超時（毫秒），若無設定則回退 30000
    apiTimeout: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT === 'number' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT : Number.parseInt(String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_TIMEOUT ?? ''), 10) || 30000,
    // 衍生：i18n 啟用（客戶端視角）的布林正規化
    i18nEnabled: typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED === 'boolean' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED : String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED).toLowerCase() === 'true'
};
}),
"[project]/src/config/app.server.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SERVER_APP_CONFIG": ()=>SERVER_APP_CONFIG,
    "SERVER_COMPUTED": ()=>SERVER_COMPUTED
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const SERVER_APP_CONFIG = {
    // 國際化配置 - 數據轉換
    i18n: {
        supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((locale)=>locale.trim()),
        countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}')
    },
    // API 配置 - 條件邏輯
    api: {
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_BASE_URL : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_BASE_URL
    }
};
const SERVER_COMPUTED = {
    /** 是否啟用完整國際化功能（伺服端視角） */ isI18nEnabled: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
    /** 檢查是否支援特定語系 */ isLocaleSupported: (locale)=>SERVER_APP_CONFIG.i18n.supportedLocales.includes(locale),
    /** 是否應該模擬 API 延遲 */ shouldSimulateDelay: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY > 0,
    /** 是否應該模擬錯誤 */ shouldSimulateError: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED && Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
};
}),
"[project]/src/config/locale.server.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "serverLocaleConfig": ()=>serverLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const serverLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：語系驗證（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return serverLocaleConfig.supportedLocales.includes(locale);
    },
    // 工具：取得有效的預設語系
    getValidDefaultLocale: ()=>{
        const envDefault = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE;
        return serverLocaleConfig.supportedLocales.includes(envDefault) ? envDefault : serverLocaleConfig.supportedLocales[0];
    },
    // 衍生：國家子網域映射
    countrySubdomainMap: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP || '{}'),
    // 工具：依國家取子網域（使用衍生 countrySubdomainMap）
    getSubdomainByCountry: (country)=>{
        return serverLocaleConfig.countrySubdomainMap[country] || null;
    }
};
}),
"[project]/src/config/locale.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clientLocaleConfig": ()=>clientLocaleConfig
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const clientLocaleConfig = {
    // 衍生：支援語系陣列
    supportedLocales: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    // 工具：驗證語系是否被支援（使用衍生 supportedLocales）
    isValidLocale: (locale)=>{
        return clientLocaleConfig.supportedLocales.includes(locale);
    }
};
}),
"[project]/src/config/cache.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
;
;
// 服務端覆寫：僅作必要差異（例：apiResponse）
const serverTtl = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheConfig"].ttl,
    apiResponse: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
};
const serverTags = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheConfig"].tags
};
const serverCacheConfig = {
    // key 規則（沿用 client）
    redis: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheConfig"].redis,
    // ttl/tags 聚合（server 覆寫）
    ttl: serverTtl,
    tags: serverTags,
    // 快取鍵值生成（純規則）
    generateKey: (type, identifier, locale)=>{
        const parts = [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheConfig"].redis.prefix,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cacheConfig"].redis.keySeparator);
    }
};
const isCacheEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED;
const isCdnEnabled = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED;
const getDefaultTtl = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL; // 秒
const getCacheStrategy = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY;
;
function getServerCacheConfig(type) {
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheConfig"])(type);
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
            description: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheConfig"])(type).description
        }));
}
}),
"[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/config/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
// export { env } from '../env.mjs';
// 導出 API 配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-route] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <module evaluation>");
;
;
;
;
;
;
;
}),
"[project]/src/config/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/app/api/ssr/_utils/mock.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MOCK_API_CONFIG": ()=>MOCK_API_CONFIG,
    "MOCK_DELAYS": ()=>MOCK_DELAYS,
    "SUPPORTED_LANGUAGES": ()=>SUPPORTED_LANGUAGES,
    "isValidLocale": ()=>isValidLocale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
;
const MOCK_API_CONFIG = {
    // 快取配置
    CACHE: {
        DEFAULT_TTL: 300,
        STATIC_TTL: 3600,
        DYNAMIC_TTL: 60
    },
    // 錯誤模擬配置
    ERROR_SIMULATION: {
        ENABLED: false,
        RATE: 0.05
    }
};
const MOCK_DELAYS = {
    LANGUAGES: 100,
    LOCALES: 150,
    MENUS: 200,
    WEB_DATA: 120,
    DETAIL: 300
};
const SUPPORTED_LANGUAGES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clientLocaleConfig"].supportedLocales;
const { isValidLocale } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clientLocaleConfig"];
}),
"[project]/src/app/api/ssr/locales/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_data/languages.data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/mock.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <locals>");
;
;
;
;
;
;
// 型別守衛：{ data: unknown[] } 結構
function hasArrayData(obj) {
    return typeof obj === 'object' && obj !== null && 'data' in obj && Array.isArray(obj.data);
}
// 取得語系列表長度（支援 Array 或 {data: Array}）
function getLanguagesCount(value) {
    if (Array.isArray(value)) return value.length;
    if (hasArrayData(value)) return value.data.length;
    return 0;
}
async function GET() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateApiDelay"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_DELAYS"].LANGUAGES);
    // 回傳深拷貝，避免外部改動
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepClone"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["languagesData"]);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED) {
        console.log(`🌐 語系列表回應：${getLanguagesCount(data)} 筆`);
    }
    const ttlSeconds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getServerCacheTtl"])('languages');
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCacheHeaders"])(ttlSeconds)
    });
}
async function POST() {
// 未實作
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__d58ed0e3._.js.map