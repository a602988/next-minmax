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
"[project]/src/app/api/ssr/_data/locales.data.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "localesData": ()=>localesData
});
const localesData = {
    code: "0000",
    message: "成功",
    data: {
        "TW": "zh-TW",
        "CN": "zh-CN",
        "HK": "zh-TW",
        "US": "en",
        "GB": "en",
        "JP": "ja",
        "KR": "ko"
    }
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
    /** 國際化功能總開關 */ INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 多語系功能開關 */ MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** ip 地理偵測功能開關 */ GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 強制重導開關 */ FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================
    /** 專案代碼 */ PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
    /** routing - 預設語系 */ DEFAULT_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** routing - 支援的語系 */ SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW,en'),
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
    /** 外部後端 API 基礎網址 */ EXTERNAL_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("https://v5.jeffy.test"),
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
    /** 專案顯示名稱 */ NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("demo測試網站"),
    /** routing - 預設語系 */ NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** routing - 支援的語系 */ NEXT_PUBLIC_SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('zh-TW,en'),
    /** routing - 語系前綴  預設 不加*/ NEXT_PUBLIC_LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'always',
        'as-needed',
        'never'
    ]).default('as-needed'),
    /** API 版本號 */ NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
    // ==========================================
    // 🌐 API 與服務配置
    // 客戶端 API 呼叫相關設定
    // ==========================================
    /** 前端 API 基礎網址 */ NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000"),
    // ==========================================
    // 🌍 國際化功能開關
    // 前端國際化相關的功能控制
    // ==========================================
    /** 前端多語系功能開關 */ NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    // ==========================================
    // 🗺️ 地理位置偵測配置
    // 使用者地理位置偵測與重導邏輯設定
    // ==========================================
    /** 地理位置偵測策略 */ NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "cdn-only",
        "api-only",
        "cdn-fallback"
    ]).default("api-only"),
    /** 地理重導模式 */ NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "off",
        "suggest",
        "force"
    ]).default("suggest"),
    /** CDN 國家標頭名稱 */ NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
    // ==========================================
    // ⚙️ 前端功能配置
    // 前端特有的功能開關和配置
    // ==========================================
    /** 前端快取功能開關 */ NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 開發模式開關 */ NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 🔧 外部服務配置
    // 第三方服務的公開配置項目
    // ==========================================
    /** 錯誤追蹤服務 DSN */ NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
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
"[project]/src/config/app.server.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SERVER_APP_CONFIG": ()=>SERVER_APP_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const SERVER_APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // API 配置
    API: {
        BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
        EXTERNAL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
        TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 功能開關
    FEATURES: {
        INTERNATIONALIZATION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED,
        GEO_DETECTION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].FORCE_REDIRECT,
        MULTI_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        MEMBERSHIP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MEMBERSHIP_ENABLED,
        CACHE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED
    },
    // 快取配置
    CACHE: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
        CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
    },
    // 地理位置配置
    GEO: {
        DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_API_PROVIDER,
        API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // Mock 與測試配置
    MOCK: {
        USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
        API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY,
        ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED,
        ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
    },
    // 開發與監控
    DEV: {
        API_LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
        PERFORMANCE_MONITORING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PERFORMANCE_MONITORING_ENABLED,
        DEV_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEV_MODE_ENABLED
    },
    // 語系配置
    LOCALE: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
        CLIENT_DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
        MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP
    }
};
}),
"[project]/src/config/locale.server.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SERVER_LOCALE_CONFIG": ()=>SERVER_LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const SERVER_LOCALE_CONFIG = {
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
    LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].LOCALE_PREFIX_MODE,
    FALLBACK_LOCALE: 'zh-TW',
    DETECTION: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        GEO_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        CACHE_TTL: 3600
    },
    CACHE: {
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        TTL: 3600
    },
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP),
    // 工具函數
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].SUPPORTED_LOCALES.split(',').map((l)=>l.trim()).includes(locale);
    },
    // 服務端專用函數
    getSubdomainByCountry: (country)=>{
        const map = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
};
}),
"[project]/src/config/cache.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 快取系統客戶端配置檔案
 * 只包含客戶端可安全使用的快取配置
 */ /**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 */ __turbopack_context__.s({
    "CACHE_CONFIG": ()=>CACHE_CONFIG,
    "getAllCacheTags": ()=>getAllCacheTags,
    "getCacheConfig": ()=>getCacheConfig,
    "getCacheConfigSummary": ()=>getCacheConfigSummary,
    "getCacheTTL": ()=>getCacheTTL,
    "getCacheTags": ()=>getCacheTags,
    "getDataTypesByTag": ()=>getDataTypesByTag
});
const CACHE_DATA_TYPES = {
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
        ttl: 3600,
        tags: [
            'api-response'
        ],
        description: 'API 回應快取'
    }
};
const CACHE_CONFIG = {
    // 基礎配置 (客戶端預設值)
    ENABLED: true,
    CDN_ENABLED: false,
    DEFAULT_TTL: 3600,
    STRATEGY: 'memory',
    // Redis 配置 (客戶端不使用)
    REDIS: {
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
"[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 快取系統服務端配置檔案
 * 包含完整的快取配置，包括環境變數
 */ __turbopack_context__.s({
    "SERVER_CACHE_CONFIG": ()=>SERVER_CACHE_CONFIG,
    "getServerCacheConfig": ()=>getServerCacheConfig,
    "getServerCacheConfigSummary": ()=>getServerCacheConfigSummary,
    "getServerCacheTTL": ()=>getServerCacheTTL,
    "getServerCacheTags": ()=>getServerCacheTags
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
;
;
/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 */ const SERVER_CACHE_DATA_TYPES = {
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
        ttl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
        tags: [
            'api-response'
        ],
        description: 'API 回應快取'
    }
};
const SERVER_CACHE_CONFIG = {
    // 基礎配置 (從環境變數讀取)
    ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
    CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
    DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
    STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
    // Redis 配置
    REDIS: {
        URL: undefined,
        PREFIX: 'minmax:',
        KEY_SEPARATOR: ':'
    },
    // 從 SERVER_CACHE_DATA_TYPES 自動生成 TTL 和 TAGS
    TTL: {
        LANGUAGES: SERVER_CACHE_DATA_TYPES.LANGUAGES.ttl,
        LOCALES: SERVER_CACHE_DATA_TYPES.LOCALES.ttl,
        MENUS: SERVER_CACHE_DATA_TYPES.MENUS.ttl,
        WEB_DATA: SERVER_CACHE_DATA_TYPES.WEB_DATA.ttl,
        PAGES: SERVER_CACHE_DATA_TYPES.PAGES.ttl,
        GEO_DATA: SERVER_CACHE_DATA_TYPES.GEO_DATA.ttl,
        USER_DATA: SERVER_CACHE_DATA_TYPES.USER_DATA.ttl,
        API_RESPONSE: SERVER_CACHE_DATA_TYPES.API_RESPONSE.ttl
    },
    TAGS: {
        LANGUAGES: SERVER_CACHE_DATA_TYPES.LANGUAGES.tags,
        LOCALES: SERVER_CACHE_DATA_TYPES.LOCALES.tags,
        MENUS: SERVER_CACHE_DATA_TYPES.MENUS.tags,
        WEB_DATA: SERVER_CACHE_DATA_TYPES.WEB_DATA.tags,
        PAGES: SERVER_CACHE_DATA_TYPES.PAGES.tags,
        GEO_DATA: SERVER_CACHE_DATA_TYPES.GEO_DATA.tags,
        USER_DATA: SERVER_CACHE_DATA_TYPES.USER_DATA.tags,
        API_RESPONSE: SERVER_CACHE_DATA_TYPES.API_RESPONSE.tags
    },
    // 快取鍵值生成函數
    generateKey: (type, identifier, locale)=>{
        const parts = [
            SERVER_CACHE_CONFIG.REDIS.PREFIX,
            type,
            identifier
        ];
        if (locale) parts.push(locale);
        return parts.join(SERVER_CACHE_CONFIG.REDIS.KEY_SEPARATOR);
    }
};
;
function getServerCacheConfig(type) {
    return SERVER_CACHE_DATA_TYPES[type];
}
function getServerCacheTTL(type) {
    return SERVER_CACHE_DATA_TYPES[type].ttl * 1000;
}
function getServerCacheTags(type) {
    return SERVER_CACHE_DATA_TYPES[type].tags;
}
function getServerCacheConfigSummary() {
    return Object.entries(SERVER_CACHE_DATA_TYPES).map(([type, config])=>({
            type,
            ttl: `${config.ttl}s (${config.ttl / 60}min)`,
            tags: config.tags.join(', '),
            description: config.description
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
"[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createCacheHeaders": ()=>createCacheHeaders,
    "createErrorResponse": ()=>createErrorResponse,
    "deepClone": ()=>deepClone,
    "extractStandardParams": ()=>extractStandardParams,
    "shouldSimulateError": ()=>shouldSimulateError,
    "simulateApiDelay": ()=>simulateApiDelay
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.server.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.server.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/cache.server.config.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
;
;
;
function extractStandardParams(request) {
    const { searchParams } = new URL(request.url);
    return {
        // 優先使用 URL 參數，沒有的話使用統一配置的預設值
        project: searchParams.get('project') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SERVER_APP_CONFIG"].PROJECT_NAME,
        language: searchParams.get('language') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SERVER_LOCALE_CONFIG"].DEFAULT_LOCALE
    };
}
async function simulateApiDelay(delay) {
    // 開發環境才模擬延遲
    if ("TURBOPACK compile-time truthy", 1) {
        await new Promise((resolve)=>setTimeout(resolve, delay));
    }
}
function createCacheHeaders(ttl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$server$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SERVER_CACHE_CONFIG"].DEFAULT_TTL) {
    return {
        'Cache-Control': `public, max-age=${ttl}, s-maxage=${ttl}`,
        'Vary': 'Accept-Language, Accept-Encoding'
    };
}
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    if (Array.isArray(obj)) {
        return obj.map((item)=>deepClone(item));
    }
    const cloned = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}
function shouldSimulateError() {
    // 直接使用 env 中的錯誤模擬設定
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED) {
        return false;
    }
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
"[project]/src/config/app.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "APP_CONFIG": ()=>APP_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // API 配置 (僅前端可用)
    API: {
        BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
        TIMEOUT: 30000
    },
    // 功能開關 (僅前端相關)
    FEATURES: {
        MULTI_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
        DEV_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEV_MODE_ENABLED
    },
    // 地理位置配置 (僅前端相關)
    GEO: {
        DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER
    },
    // 語系配置 (僅前端相關)
    LOCALE: {
        CLIENT_DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
        MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED
    }
};
}),
"[project]/src/config/locale.client.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CLIENT_LOCALE_CONFIG": ()=>CLIENT_LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const CLIENT_LOCALE_CONFIG = {
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()),
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
    LOCALE_PREFIX_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_LOCALE_PREFIX_MODE,
    MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
    DETECTION: {
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER
    },
    // 客戶端工具函數
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_SUPPORTED_LOCALES.split(',').map((l)=>l.trim()).includes(locale);
    }
};
}),
"[project]/src/config/locale.config.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一的語系配置入口
 * 根據執行環境動態導入適當的配置
 */ // 動態導入，避免客戶端打包服務端配置
__turbopack_context__.s({
    "getClientLocaleConfig": ()=>getClientLocaleConfig,
    "getLocaleConfig": ()=>getLocaleConfig
});
// 直接導出客戶端配置（供客戶端組件使用）
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
const getLocaleConfig = async ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        // 服務端：導入服務端配置
        const { SERVER_LOCALE_CONFIG } = await __turbopack_context__.r("[project]/src/config/locale.server.config.ts [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
        return SERVER_LOCALE_CONFIG;
    } else //TURBOPACK unreachable
    ;
};
const getClientLocaleConfig = async ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        throw new Error('getClientLocaleConfig 只能在客戶端調用');
    }
    // 使用動態 import 替代 require
    const { CLIENT_LOCALE_CONFIG } = await __turbopack_context__.r("[project]/src/config/locale.client.config.ts [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
    return CLIENT_LOCALE_CONFIG;
};
;
}),
"[project]/src/config/locale.config.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/config/api.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const API_CONFIG = {
    // 基礎配置
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
    EXTERNAL_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // 超時設定
    TIMEOUT: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 重試設定
    RETRY: {
        ATTEMPTS: 3,
        DELAY: 1000,
        EXPONENTIAL_BACKOFF: true
    },
    // 模式設定
    USE_MOCK: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
    LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
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
"[project]/src/config/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-route] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <module evaluation>");
// 導出 API 配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/config/index.ts [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/config/locale.config.ts [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CLIENT_LOCALE_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CLIENT_LOCALE_CONFIG"],
    "getClientLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getClientLocaleConfig"],
    "getLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLocaleConfig"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/config/locale.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CLIENT_LOCALE_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["CLIENT_LOCALE_CONFIG"],
    "getClientLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getClientLocaleConfig"],
    "getLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["getLocaleConfig"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript) <exports>");
}),
"[project]/src/config/index.ts [app-route] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"],
    "APP_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APP_CONFIG"],
    "CACHE_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_CONFIG"],
    "CLIENT_LOCALE_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CLIENT_LOCALE_CONFIG"],
    "env": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"],
    "getAllCacheTags": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllCacheTags"],
    "getCacheConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheConfig"],
    "getCacheConfigSummary": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheConfigSummary"],
    "getCacheTTL": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheTTL"],
    "getCacheTags": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCacheTags"],
    "getClientLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClientLocaleConfig"],
    "getDataTypesByTag": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDataTypesByTag"],
    "getLocaleConfig": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLocaleConfig"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.client.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <exports>");
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
const SUPPORTED_LANGUAGES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LOCALE_CONFIG"].SUPPORTED_LOCALES;
const { isValidLocale } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LOCALE_CONFIG"];
}),
"[project]/src/app/api/ssr/locales/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$locales$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_data/locales.data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/mock.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.client.config.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request) {
    // 提取標準參數 (使用統一的參數處理)
    const { project, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractStandardParams"])(request);
    // 開發環境才模擬延遲
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateApiDelay"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_DELAYS"].LOCALES);
    // 回傳深拷貝的資料，避免原始資料被修改
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepClone"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$locales$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["localesData"]);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
        const countryCount = Object.keys(data.data || data).length;
        console.log(`📍 地區語系資料回應 [${project}/${language}]:`, countryCount, '個國家對照');
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCacheHeaders"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$client$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].TTL.LOCALES)
    });
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__427921c6._.js.map