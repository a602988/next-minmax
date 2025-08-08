module.exports = {

"[project]/.next-internal/server/app/api/ssr/languages/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
    /** 國際化功能總開關 */ INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 多語系功能開關 */ MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** ip 地理偵測功能開關 */ GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 強制重導開關 */ FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================
    /** 專案代碼 */ PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
    /** 預設語系 */ DEFAULT_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
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
    /** 前端預設語系 */ NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
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
(()=>{
    const e = new Error("Cannot find module '@/lib/config'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
;
function extractStandardParams(request) {
    const { searchParams } = new URL(request.url);
    return {
        // 優先使用 URL 參數，沒有的話使用統一配置的預設值
        project: searchParams.get('project') || APP_CONFIG.PROJECT_NAME,
        language: searchParams.get('language') || LOCALE_CONFIG.DEFAULT_LOCALE
    };
}
async function simulateApiDelay(delay) {
    if ("TURBOPACK compile-time truthy", 1) {
        await new Promise((resolve)=>setTimeout(resolve, delay));
    }
}
function createCacheHeaders(ttl = CACHE_CONFIG.DEFAULT_TTL) {
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
"[project]/src/app/api/ssr/_utils/mock.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "MOCK_API_CONFIG": ()=>MOCK_API_CONFIG,
    "MOCK_DELAYS": ()=>MOCK_DELAYS,
    "SUPPORTED_LANGUAGES": ()=>SUPPORTED_LANGUAGES,
    "isValidLocale": ()=>isValidLocale
});
(()=>{
    const e = new Error("Cannot find module '@/lib/config'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const SUPPORTED_LANGUAGES = LOCALE_CONFIG.SUPPORTED_LOCALES;
const { isValidLocale } = LOCALE_CONFIG;
}),
"[project]/src/config/app.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "APP_CONFIG": ()=>APP_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const APP_CONFIG = {
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
"[project]/src/i18n/routing.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-route] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
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
"[project]/src/config/locale.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LOCALE_CONFIG": ()=>LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
;
const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].locales,
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
    FALLBACK_LOCALE: 'zh-TW',
    // 前端語系配置
    CLIENT_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
    MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
    // 國家與子網域映射
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP),
    // 語系偵測設定
    DETECTION: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        GEO_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        CACHE_TTL: 3600
    },
    // 快取配置
    CACHE: {
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        TTL: 3600
    },
    // 語系驗證函數：檢查語系是否為支援的語系
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale);
    },
    // 取得國家對應的子網域：根據國家代碼取得對應的子網域
    getSubdomainByCountry: (country)=>{
        const map = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
};
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
"[project]/src/config/cache.config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "CACHE_CONFIG": ()=>CACHE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
;
const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
    CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
    DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
    STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
    // 各類型資料的 TTL 設定 (秒)
    TTL: {
        LANGUAGES: 7200,
        LOCALES: 7200,
        MENUS: 3600,
        WEB_DATA: 3600,
        PAGES: 1800,
        GEO_DATA: 1800,
        API_RESPONSE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
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
"[project]/src/config/index.ts [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-route] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-route] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript)");
// 導出 API 配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-route] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <locals>");
}),
"[project]/src/app/api/ssr/languages/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_data/languages.data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/mock.config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET() {
    // 開發環境才模擬延遲
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateApiDelay"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$mock$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_DELAYS"].LANGUAGES);
    // 回傳深拷貝的資料，避免原始資料被修改
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepClone"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["languagesData"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCacheHeaders"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].TTL.LANGUAGES)
    });
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b215e89c._.js.map