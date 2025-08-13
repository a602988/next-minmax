(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/i18n/routing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
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
    let { className, languages, currentLocale, pathname, searchParams, showLabels = true, variant = 'inline' } = param;
    // 錯誤處理：若無語系列表，顯示錯誤訊息或不渲染
    if (!languages || languages.length === 0) {
        // 開發環境下顯示警告訊息
        if ("TURBOPACK compile-time truthy", 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 text-sm",
                    children: "⚠️ 無語系資料"
                }, void 0, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 61,
                columnNumber: 17
            }, this);
        }
        //TURBOPACK unreachable
        ;
    }
    // 找到當前語言的詳細資訊
    const currentLanguage = languages.find((lang)=>lang.id === currentLocale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        role: "navigation",
        children: variant === 'dropdown' ? // 下拉選單版本（目前僅顯示當前語言按鈕）
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200",
                "aria-expanded": "false",
                "aria-haspopup": "true",
                "aria-label": "Current language: ".concat((currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.native) || (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.title), ". Click to change language"),
                children: [
                    (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.icon) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "".concat(currentLanguage.icon, " inline-block h-4 w-4")
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 90,
                        columnNumber: 29
                    }, this),
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.native) || (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.title)
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 97,
                        columnNumber: 29
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                            lineNumber: 101,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 100,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 82,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 81,
            columnNumber: 17
        }, this) : // 內聯版本：顯示所有語言選項
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap items-center gap-2",
            role: "list",
            children: languages.map((lang)=>{
                // 優先顯示原生語言名稱，否則顯示英文名稱
                const label = lang.native || lang.title;
                // 生成語言切換連結，保持當前路徑和查詢參數
                const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareLanguageSwitcherHref"])(pathname, searchParams);
                // 判斷是否為當前語言
                const active = currentLocale === lang.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    role: "listitem",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: href,
                        locale: lang.id,
                        className: 'inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors ' + (active ? 'bg-blue-600 text-white' // 當前語言樣式
                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' // 非當前語言樣式
                        ),
                        // 無障礙屬性：標示當前頁面
                        "aria-current": active ? 'page' : undefined,
                        // 無障礙屬性：螢幕閱讀器標籤
                        "aria-label": "Switch to ".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                        // 滑鼠懸停提示
                        title: "".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                        // SEO 屬性：指定連結的語言
                        hrefLang: lang.id,
                        // HTML 語言屬性
                        lang: lang.id,
                        children: [
                            lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "".concat(lang.icon, " inline-block h-4 w-4")
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 145,
                                columnNumber: 41
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 152,
                                columnNumber: 52
                            }, this),
                            lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                "aria-label": "Default language",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 156,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: active ? '(current)' : "Switch to ".concat(lang.title)
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 165,
                                columnNumber: 37
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 122,
                        columnNumber: 33
                    }, this)
                }, lang.id, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 121,
                    columnNumber: 29
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 108,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
    /** 國際化功能總開關 */ INTERNATIONALIZATION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 多語系功能開關 */ MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** ip 地理偵測功能開關 */ GEO_DETECTION_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 強制重導開關 */ FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 專案核心配置
    // 專案基本資訊與預設語系設定
    // ==========================================
    /** 專案代碼 */ PROJECT_CODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("minmax2025"),
    /** 預設語系 */ DEFAULT_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** 國家子網域對應表 (JSON) {"TW": "tw", "US": "us", "JP": "jp"} */ COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default('{}'),
    // ==========================================
    // 🔄 快取系統配置
    // 控制整體快取策略和生存時間
    // ==========================================
    /** 快取系統總開關 */ CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** CDN 快取協作開關 */ CACHE_CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 國際化快取策略 */ I18N_CACHE_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "memory",
        "redis",
        "none"
    ]).default("memory"),
    /** 快取預設生存時間 (秒) */ CACHE_DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("3600"),
    // ==========================================
    // API 與外部服務配置
    // API 網址、超時設定及第三方服務配置
    // ==========================================
    /** 外部後端 API 基礎網址 */ EXTERNAL_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("https://v5.jeffy.test"),
    /** 一般 API 請求超時 (毫秒) */ API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("5000"),
    /** 內容 API 請求超時 (毫秒) */ CONTENT_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("10000"),
    /** 地理位置 API 超時 (毫秒) */ GEO_API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("800"),
    /** 地理位置服務提供商 */ GEO_API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ipapi",
        "ipinfo",
        "geoplugin"
    ]).default("geoplugin"),
    // ==========================================
    // 開發與測試配置
    // Mock API、錯誤模擬及開發工具設定
    // ==========================================
    /** Mock API 開關 */ USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** Mock API 延遲模擬 (毫秒) */ MOCK_API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseInt(val)).default("100"),
    /** 錯誤模擬開關 */ MOCK_ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    /** 錯誤模擬機率 (0.0-1.0) */ MOCK_ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>parseFloat(val)).default("0.0"),
    // ==========================================
    // 監控與日誌配置
    // API 日誌記錄及效能監控開關
    // ==========================================
    /** API 請求日誌記錄 */ API_LOGGING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 效能監控開關 */ PERFORMANCE_MONITORING_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 功能開關
    // 各項業務功能的開關控制
    // ==========================================
    /** 會員功能開關 */ MEMBERSHIP_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false")
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
    /** 專案顯示名稱 */ NEXT_PUBLIC_PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("demo測試網站"),
    /** 前端預設語系 */ NEXT_PUBLIC_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("zh-TW"),
    /** API 版本號 */ NEXT_PUBLIC_API_VERSION: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("1.0.0"),
    // ==========================================
    // 🌐 API 與服務配置
    // 客戶端 API 呼叫相關設定
    // ==========================================
    /** 前端 API 基礎網址 */ NEXT_PUBLIC_API_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("http://localhost:3000"),
    // ==========================================
    // 🌍 國際化功能開關
    // 前端國際化相關的功能控制
    // ==========================================
    /** 前端多語系功能開關 */ NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    // ==========================================
    // 🗺️ 地理位置偵測配置
    // 使用者地理位置偵測與重導邏輯設定
    // ==========================================
    /** 地理位置偵測策略 */ NEXT_PUBLIC_GEO_DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "cdn-only",
        "api-only",
        "cdn-fallback"
    ]).default("api-only"),
    /** 地理重導模式 */ NEXT_PUBLIC_GEO_REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "off",
        "suggest",
        "force"
    ]).default("suggest"),
    /** CDN 國家標頭名稱 */ NEXT_PUBLIC_CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().default("cf-ipcountry"),
    // ==========================================
    // ⚙️ 前端功能配置
    // 前端特有的功能開關和配置
    // ==========================================
    /** 前端快取功能開關 */ NEXT_PUBLIC_CACHE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("true"),
    /** 開發模式開關 */ NEXT_PUBLIC_DEV_MODE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().transform((val)=>val === "true").default("false"),
    // ==========================================
    // 🔧 外部服務配置
    // 第三方服務的公開配置項目
    // ==========================================
    /** 錯誤追蹤服務 DSN */ NEXT_PUBLIC_SENTRY_DSN: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
};
// 取得所有 schema 的鍵名
const serverKeys = Object.keys(server);
const clientKeys = Object.keys(client);
const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$t3$2d$oss$2f$env$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnv"])({
    server,
    client,
    /**
     * 運行時環境變數映射
     * 精確地從 process.env 映射我們定義的變數
     */ runtimeEnv: {
        ...Object.fromEntries(serverKeys.map((key)=>[
                key,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key]
            ])),
        ...Object.fromEntries(clientKeys.map((key)=>[
                key,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env[key]
            ]))
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/app.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "APP_CONFIG": ()=>APP_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const APP_CONFIG = {
    // 專案基本資訊
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // API 配置
    API: {
        BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
        EXTERNAL_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
        TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 功能開關
    FEATURES: {
        INTERNATIONALIZATION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].INTERNATIONALIZATION_ENABLED,
        GEO_DETECTION: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        FORCE_REDIRECT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].FORCE_REDIRECT,
        MULTI_LANGUAGE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        MEMBERSHIP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MEMBERSHIP_ENABLED,
        CACHE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED
    },
    // 快取配置
    CACHE: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
        CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL
    },
    // 地理位置配置
    GEO: {
        DETECTION_STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_COUNTRY_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        API_PROVIDER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_API_PROVIDER,
        API_TIMEOUT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // Mock 與測試配置
    MOCK: {
        USE_MOCK_API: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
        API_DELAY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_API_DELAY,
        ERROR_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_ENABLED,
        ERROR_RATE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MOCK_ERROR_RATE
    },
    // 開發與監控
    DEV: {
        API_LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
        PERFORMANCE_MONITORING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].PERFORMANCE_MONITORING_ENABLED,
        DEV_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEV_MODE_ENABLED
    },
    // 語系配置
    LOCALE: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
        CLIENT_DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
        MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
        COUNTRY_SUBDOMAIN_MAP: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/locale.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LOCALE_CONFIG": ()=>LOCALE_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
;
const LOCALE_CONFIG = {
    // 基本語系設定
    SUPPORTED_LOCALES: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales,
    DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].defaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].DEFAULT_LANGUAGE,
    FALLBACK_LOCALE: 'zh-TW',
    // 前端語系配置
    CLIENT_DEFAULT_LOCALE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_DEFAULT_LOCALE,
    MULTI_LANGUAGE_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_MULTI_LANGUAGE_ENABLED,
    // 國家與子網域映射
    COUNTRY_SUBDOMAIN_MAP: JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP),
    // 語系偵測設定
    DETECTION: {
        ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].MULTI_LANGUAGE_ENABLED,
        GEO_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_DETECTION_ENABLED,
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_DETECTION_STRATEGY,
        REDIRECT_MODE: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_GEO_REDIRECT_MODE,
        CDN_HEADER: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_CDN_COUNTRY_HEADER,
        CACHE_TTL: 3600
    },
    // 快取配置
    CACHE: {
        STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
        TTL: 3600
    },
    // 語系驗證函數：檢查語系是否為支援的語系
    isValidLocale: (locale)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales.includes(locale);
    },
    // 取得國家對應的子網域：根據國家代碼取得對應的子網域
    getSubdomainByCountry: (country)=>{
        const map = JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].COUNTRY_SUBDOMAIN_MAP);
        return map[country] || null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/api.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
;
const API_CONFIG = {
    // 基礎配置
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].NEXT_PUBLIC_API_BASE_URL,
    EXTERNAL_BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].EXTERNAL_API_BASE_URL,
    PROJECT_NAME: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].PROJECT_CODE,
    // 超時設定
    TIMEOUT: {
        DEFAULT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_TIMEOUT,
        CONTENT: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CONTENT_API_TIMEOUT,
        GEO: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].GEO_API_TIMEOUT
    },
    // 重試設定
    RETRY: {
        ATTEMPTS: 3,
        DELAY: 1000,
        EXPONENTIAL_BACKOFF: true
    },
    // 模式設定
    USE_MOCK: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].USE_MOCK_API,
    LOGGING: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].API_LOGGING_ENABLED,
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/cache.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
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
        ttl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
        tags: [
            'api-response'
        ],
        description: 'API 回應快取'
    }
};
const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_ENABLED,
    CDN_ENABLED: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_CDN_ENABLED,
    DEFAULT_TTL: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].CACHE_DEFAULT_TTL,
    STRATEGY: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].I18N_CACHE_STRATEGY,
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
    return Object.entries(CACHE_DATA_TYPES).filter((param)=>{
        let [_, config] = param;
        return config.tags.includes(tag);
    }).map((param)=>{
        let [key] = param;
        return key;
    });
}
function getAllCacheTags() {
    const allTags = Object.values(CACHE_DATA_TYPES).flatMap((config)=>config.tags);
    return [
        ...new Set(allTags)
    ];
}
function getCacheConfigSummary() {
    return Object.entries(CACHE_DATA_TYPES).map((param)=>{
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
"[project]/src/config/index.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * 統一配置導出
 * 整合所有配置相關的設定
 */ // 導出環境變數配置
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
// 導出應用程式配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-client] (ecmascript)");
// 導出語系配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-client] (ecmascript)");
// 導出 API 配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
// 導出快取配置
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$env$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/env.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$app$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/app.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <locals>");
}),
"[project]/src/services/base/api-service.base.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BaseApiService": ()=>BaseApiService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
;
;
class BaseApiService {
    /**
     * 通用的 API 請求方法
     * @param endpoint 端點配置 { mock: string, external: string }
     * @param options 額外的 fetch 選項
     * @returns Promise<T>
     */ async apiRequest(endpoint) {
        let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
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
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK ? {} : {
                    signal: AbortSignal.timeout(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].TIMEOUT.DEFAULT)
                },
                ...options
            });
            if (!response.ok) {
                throw new Error("".concat(this.serviceName, " API 請求失敗: ").concat(response.status, " ").concat(response.statusText));
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
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK) {
            // Mock API - 使用內部 Next.js API Routes
            return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL).concat(endpoint.mock);
        } else {
            // 正式 API - 使用外部後端 API
            return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].EXTERNAL_BASE_URL).concat(endpoint.external);
        }
    }
    /**
     * 記錄 API 呼叫日誌
     */ logApiCall(url) {
        console.log("🌐 ".concat(this.serviceName, " API 呼叫: ").concat(url, " (Mock: ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_MOCK, ")"));
    }
    /**
     * 記錄成功日誌 - 子類別可以覆寫自定義格式
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            console.log("✅ ".concat(this.serviceName, "資料載入成功"));
        }
    }
    /**
     * 記錄錯誤日誌
     */ logError(error) {
        console.error("❌ ".concat(this.serviceName, " API 呼叫失敗:"), error);
    }
    constructor(serviceName){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "serviceName", void 0);
        this.serviceName = serviceName;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/language.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "languageService": ()=>languageService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-client] (ecmascript)");
;
;
/**
 * 支援語系服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */ class LanguageService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseApiService"] {
    /**
     * 取得支援的語系清單
     * @returns Promise<Language[]>
     */ async getLanguages() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.MOCK.LANGUAGE,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.EXTERNAL.LANGUAGE
        };
        return this.apiRequest(endpoint);
    }
    /**
     * 覆寫成功日誌，顯示語系數量
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            console.log("✅ ".concat(this.serviceName, "資料載入成功:"), data.length, '個語系');
        }
    }
    constructor(){
        super('支援語系');
    }
}
const languageService = new LanguageService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/services/i18n-integration.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18nIntegrationService": ()=>I18nIntegrationService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-client] (ecmascript)");
;
;
;
;
class I18nIntegrationService {
    /**
     * 取得動態語系清單並快取
     */ static async getLanguages() {
        const now = Date.now();
        const cacheExpiry = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].CACHE.TTL * 1000; // 轉為毫秒
        // 檢查快取是否有效
        if (this.cachedLanguages && now - this.lastFetchTime < cacheExpiry) {
            return this.cachedLanguages;
        }
        try {
            const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
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
        return (defaultLang === null || defaultLang === void 0 ? void 0 : defaultLang.id) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].DEFAULT_LOCALE;
    }
    /**
     * 靜態備援語系資料
     */ /**
     * 靜態備援語系資料
     */ static getStaticFallbackLanguages() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].locales.map((locale, index)=>({
                id: locale,
                title: locale.toUpperCase(),
                native: locale.toUpperCase(),
                icon: '🌐',
                default: locale === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"].defaultLocale
            }));
    }
}
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(I18nIntegrationService, "cachedLanguages", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(I18nIntegrationService, "lastFetchTime", 0);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/i18n-integration.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
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
                        const languageList = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getLanguages();
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
            // 清理函數，防止組件卸載後設置狀態
            return ({
                "useLanguageSwitcher.useEffect": ()=>{
                    isMounted = false;
                }
            })["useLanguageSwitcher.useEffect"];
        }
    }["useLanguageSwitcher.useEffect"], []);
    return {
        /** 當前路徑 */ pathname,
        /** 當前語系 ID */ currentLocale,
        /** URL 查詢參數 */ searchParams,
        /** 可用語言列表 */ languages,
        /** 是否正在載入 */ isLoading,
        /** 錯誤訊息 */ error
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

//# sourceMappingURL=src_6bc1c8cf._.js.map