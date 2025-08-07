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
"[project]/src/lib/locale-constants.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LOCALE_CONFIG": ()=>LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-route] (ecmascript)");
;
const LOCALE_CONFIG = {
    // 從 next-intl 獲取支援的語系
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].locales,
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].defaultLocale,
    // 語系驗證函數
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale);
    }
};
}),
"[project]/src/app/api/ssr/_utils/config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG,
    "MOCK_DELAYS": ()=>MOCK_DELAYS,
    "SUPPORTED_LANGUAGES": ()=>SUPPORTED_LANGUAGES,
    "isValidLocale": ()=>isValidLocale
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locale-constants.ts [app-route] (ecmascript)");
;
const API_CONFIG = {
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
const SUPPORTED_LANGUAGES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].SUPPORTED_LOCALES;
const { isValidLocale } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$constants$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"];
}),
"[project]/src/lib/default-config.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * 應用程式預設配置
 * 統一管理所有預設值，避免硬編碼分散在各處
 */ __turbopack_context__.s({
    "DEFAULT_CONFIG": ()=>DEFAULT_CONFIG
});
const DEFAULT_CONFIG = {
    // 專案配置
    PROJECT_NAME: ("TURBOPACK compile-time value", "minmax2025") || 'minmax2025',
    // 語系配置 - 只放簡單的預設值
    DEFAULT_LANGUAGE: 'zh-TW',
    FALLBACK_LANGUAGE: 'zh-TW',
    // API 配置
    API_BASE_URL: ("TURBOPACK compile-time value", "http://localhost:3000") || 'https://v5.jeffy.test',
    API_TIMEOUT: 5000
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/config.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/default-config.ts [app-route] (ecmascript)");
;
;
function extractStandardParams(request) {
    const { searchParams } = new URL(request.url);
    return {
        // 優先使用 URL 參數，沒有的話使用統一配置的預設值
        project: searchParams.get('project') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_CONFIG"].PROJECT_NAME,
        language: searchParams.get('language') || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DEFAULT_CONFIG"].DEFAULT_LANGUAGE
    };
}
async function simulateApiDelay(delay) {
    if ("TURBOPACK compile-time truthy", 1) {
        await new Promise((resolve)=>setTimeout(resolve, delay));
    }
}
function createCacheHeaders(ttl = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"].CACHE.DEFAULT_TTL) {
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
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"].ERROR_SIMULATION.ENABLED) {
        return false;
    }
    return Math.random() < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"].ERROR_SIMULATION.RATE;
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
"[project]/src/app/api/ssr/languages/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_data/languages.data.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/api-helpers.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/ssr/_utils/config.ts [app-route] (ecmascript)");
;
;
;
;
async function GET() {
    // 模擬 API 延遲
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simulateApiDelay"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MOCK_DELAYS"].LANGUAGES);
    // 回傳純粹的語系資料
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepClone"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_data$2f$languages$2e$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["languagesData"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data, {
        headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$api$2d$helpers$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createCacheHeaders"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$ssr$2f$_utils$2f$config$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_CONFIG"].CACHE.DEFAULT_TTL)
    });
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__8cd4eac5._.js.map