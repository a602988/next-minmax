module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/i18n/routing.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "routing": ()=>routing
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
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
"[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Link": ()=>Link,
    "getPathname": ()=>getPathname,
    "redirect": ()=>redirect,
    "usePathname": ()=>usePathname,
    "useRouter": ()=>useRouter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-ssr] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"]);
}),
"[project]/src/lib/locale-utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "appendSearchParams": ()=>appendSearchParams,
    "getBasePathWithoutLocale": ()=>getBasePathWithoutLocale,
    "hasLocalePrefix": ()=>hasLocalePrefix,
    "prepareLanguageSwitcherHref": ()=>prepareLanguageSwitcherHref
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-ssr] (ecmascript)");
;
function getBasePathWithoutLocale(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    // 檢查第一段是否為支援的語系
    const hasLocalePrefix = !!first && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"].locales.includes(first);
    // 移除語系前綴
    const withoutLocale = hasLocalePrefix ? parts.slice(1) : parts;
    const path = `/${withoutLocale.join('/')}`;
    return path === '' ? '/' : path;
}
function hasLocalePrefix(pathname) {
    const parts = pathname.split('/').filter(Boolean);
    const first = parts[0];
    return !!first && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"].locales.includes(first);
}
function appendSearchParams(path, searchParams) {
    const qsString = searchParams?.toString();
    return qsString ? `${path}?${qsString}` : path;
}
function prepareLanguageSwitcherHref(pathname, searchParams) {
    const basePath = getBasePathWithoutLocale(pathname);
    return appendSearchParams(basePath, searchParams);
}
}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locale-utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function LanguageSwitcher({ className, languages, currentLocale, pathname, searchParams, showLabels = true, showIcons = false, variant = 'inline', showDefaultBadge = false }) {
    // 基礎資料檢查：若語系列表為空
    if (!languages || languages.length === 0) {
        // 開發環境下提示，協助定位資料注入問題
        if ("TURBOPACK compile-time truthy", 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        children: variant === 'dropdown' ? // 下拉模式：目前僅示範按鈕，尚未加入彈出選單與鍵盤操作
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200",
                // 尚未開啟，下拉內容會對應 aria-expanded 與 aria-controls
                "aria-expanded": "false",
                // 表示將會打開 menu 類型的彈出內容
                "aria-haspopup": "menu",
                // 讀屏器描述目前語言
                "aria-label": `Current language: ${currentLanguage?.native || currentLanguage?.title}`,
                children: [
                    showIcons && currentLanguage?.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: `${currentLanguage.icon} inline-block h-4 w-4`
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 85,
                        columnNumber: 29
                    }, this),
                    showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: currentLanguage?.native || currentLanguage?.title
                    }, void 0, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 88,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "h-4 w-4",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap items-center gap-2",
            children: languages.map((lang)=>{
                // 顯示標籤：優先顯示原生語言名稱
                const label = lang.native || lang.title;
                // 產生「語系無關」的 href，以便由 Link 的 locale 屬性插入目標語系
                const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepareLanguageSwitcherHref"])(pathname, searchParams);
                // 是否為當前語言
                const active = currentLocale === lang.id;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: active ? // 當前語言：不渲染為連結，避免重整同頁與誤點
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-blue-600 text-white cursor-default",
                        // 指示目前所處頁面語言
                        "aria-current": "page",
                        "aria-label": `Current language: ${label}`,
                        children: [
                            showIcons && lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: `${lang.icon} inline-block h-4 w-4`
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 119,
                                columnNumber: 68
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 121,
                                columnNumber: 56
                            }, this),
                            showDefaultBadge && lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                "aria-label": "Default language",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 124,
                                columnNumber: 45
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        href: href,
                        // 透過 locale 指定目標語系；型別上收斂為 routing.locales 的成員
                        locale: lang.id,
                        className: "inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        // 讀屏器說明：切換到某語言（若有原生名稱則一併說明）
                        "aria-label": `Switch to ${lang.title}${lang.native ? ` (${lang.native})` : ''}`,
                        // 滑鼠提示：與 aria-label 保持一致
                        title: `${lang.title}${lang.native ? ` (${lang.native})` : ''}`,
                        // SEO 輔助：標示此連結目標的語言（可留可不留，hreflang 正式應放在 head alternates）
                        hrefLang: lang.id,
                        // HTML 語言屬性，輔助正確渲染語言特性
                        lang: lang.id,
                        children: [
                            showIcons && lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: `${lang.icon} inline-block h-4 w-4`
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 151,
                                columnNumber: 68
                            }, this),
                            showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 153,
                                columnNumber: 56
                            }, this),
                            showDefaultBadge && lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useLanguageSwitcher": ()=>useLanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function useLanguageSwitcher() {
    // 取得當前路徑，用於生成語言切換連結
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    // 取得當前語系
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLocale"])();
    // 取得 URL 查詢參數，用於保持切換語言時的參數
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 語言列表狀態
    const [languages, setLanguages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // 載入狀態
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // 錯誤狀態
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // 載入語言列表
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isMounted = true;
        const loadLanguages = async ()=>{
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
        };
        loadLanguages();
        return ()=>{
            isMounted = false;
        };
    }, []);
    return {
        pathname,
        currentLocale,
        searchParams,
        languages,
        isLoading,
        error
    };
}
}),
"[project]/src/features/language/hooks/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-ssr] (ecmascript)");
;
}),
"[project]/src/features/language/hooks/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-ssr] (ecmascript) <locals>");
}),
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LanguageSwitcherContainer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function LanguageSwitcherContainer({ className, showLabels = true, variant = 'inline', loadingComponent, errorComponent, languages: providedLanguages }) {
    const { pathname, currentLocale, searchParams, languages: hookLanguages, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguageSwitcher"])();
    // 如果有提供語言資料，就使用提供的，否則使用 hook 載入的
    const languages = providedLanguages || hookLanguages;
    const shouldShowLoading = !providedLanguages && isLoading;
    const shouldShowError = !providedLanguages && error;
    // 載入中狀態
    if (shouldShowLoading) {
        return loadingComponent || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return errorComponent || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5e3a44b5._.js.map