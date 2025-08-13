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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-intl/dist/esm/development/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/locale-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LanguageSwitcher(param) {
    let { className, languages, showLabels = true, variant = 'inline' } = param;
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const currentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 若無語系列表，顯示錯誤訊息或不渲染
    if (!languages || languages.length === 0) {
        if ("TURBOPACK compile-time truthy", 1) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: className,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 text-sm",
                    children: "⚠️ 無語系資料"
                }, void 0, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 34,
                columnNumber: 17
            }, this);
        }
        //TURBOPACK unreachable
        ;
    }
    const currentLanguage = languages.find((lang)=>lang.id === currentLocale);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        role: "navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "inLanguage": languages.map((lang)=>({
                                "@type": "Language",
                                "name": lang.title,
                                "alternateName": lang.native,
                                "identifier": lang.id
                            }))
                    })
                }
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            variant === 'dropdown' ? // 下拉選單版本
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
                            lineNumber: 77,
                            columnNumber: 29
                        }, this),
                        showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.native) || (currentLanguage === null || currentLanguage === void 0 ? void 0 : currentLanguage.title)
                        }, void 0, false, {
                            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                            lineNumber: 83,
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
                                lineNumber: 86,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                            lineNumber: 85,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, this) : // 內聯版本
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-wrap items-center gap-2",
                role: "list",
                children: languages.map((lang)=>{
                    const label = lang.native || lang.title;
                    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$locale$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prepareLanguageSwitcherHref"])(pathname, searchParams);
                    const active = currentLocale === lang.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        role: "listitem",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            href: href,
                            locale: lang.id,
                            className: 'inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors ' + (active ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'),
                            "aria-current": active ? 'page' : undefined,
                            "aria-label": "Switch to ".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                            title: "".concat(lang.title).concat(lang.native ? " (".concat(lang.native, ")") : ''),
                            hrefLang: lang.id,
                            lang: lang.id,
                            children: [
                                lang.icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "".concat(lang.icon, " inline-block h-4 w-4")
                                }, void 0, false, {
                                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                    lineNumber: 121,
                                    columnNumber: 41
                                }, this),
                                showLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                    lineNumber: 127,
                                    columnNumber: 52
                                }, this),
                                lang.default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                    "aria-label": "Default language",
                                    children: "default"
                                }, void 0, false, {
                                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                    lineNumber: 130,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: active ? '(current)' : "Switch to ".concat(lang.title)
                                }, void 0, false, {
                                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                    lineNumber: 139,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                            lineNumber: 104,
                            columnNumber: 33
                        }, this)
                    }, lang.id, false, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 103,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                lineNumber: 93,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcher, "NzRwROGIb4MdlwRJEXFtWewfbAU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e7a8868d._.js.map