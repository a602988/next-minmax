(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/features/language/presentation/hooks/useLanguages.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/features/language/presentation/hooks/useLanguages.ts
__turbopack_context__.s({
    "useLanguages": ()=>useLanguages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/presentation/LanguageProvider.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useLanguages() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"])().languages;
}
_s(useLanguages, "BCwl4z0QN8kxLmYPcVD7KlUhmF8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$LanguageProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguageContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/features/language/presentation/components/LanguageSwitcher.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$hooks$2f$useLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/presentation/hooks/useLanguages.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LanguageSwitcher(param) {
    let { className } = param;
    _s();
    const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$hooks$2f$useLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguages"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    if (!languages || languages.length === 0) {
        return null;
    }
    const localeIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "LanguageSwitcher.useMemo[localeIds]": ()=>new Set(languages.map({
                "LanguageSwitcher.useMemo[localeIds]": (l)=>l.id
            }["LanguageSwitcher.useMemo[localeIds]"]))
    }["LanguageSwitcher.useMemo[localeIds]"], [
        languages
    ]);
    function buildNextPath(target) {
        const raw = pathname;
        const parts = raw.split('/').filter(Boolean); // 去掉空白段
        const first = parts[0];
        // 判斷目前路由是否含有語系前綴
        const hasLocalePrefix = !!first && localeIds.has(first);
        const restPath = hasLocalePrefix ? "/".concat(parts.slice(1).join('/')) : raw;
        // 預設語系：不加前綴；非預設語系：加上 /{locale}
        const nextBase = target.default ? restPath || '/' : "/".concat(target.id).concat(restPath === '/' ? '' : restPath);
        // 保留查詢參數
        const qs = searchParams === null || searchParams === void 0 ? void 0 : searchParams.toString();
        return qs ? "".concat(nextBase, "?").concat(qs) : nextBase;
    }
    function selectLanguage(target) {
        // 寫入 next-intl 兼容的 cookie
        // 180 天有效期；如有自定網域請附加 domain 與 secure 屬性
        document.cookie = "NEXT_LOCALE=".concat(encodeURIComponent(target.id), "; path=/; max-age=").concat(60 * 60 * 24 * 180);
        const nextPath = buildNextPath(target);
        router.push(nextPath, {
            scroll: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap items-center gap-2",
            children: languages.map((lang)=>{
                const label = lang.native || lang.title;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>selectLanguage(lang),
                        className: 'inline-flex items-center gap-2 rounded px-3 py-1 text-sm ' + (lang.default ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'),
                        "aria-current": lang.default ? 'true' : undefined,
                        title: lang.title,
                        children: [
                            lang.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: lang.icon,
                                alt: label,
                                width: 16,
                                height: 16,
                                className: "h-4 w-4 rounded-sm object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
                                lineNumber: 89,
                                columnNumber: 37
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
                                lineNumber: 97,
                                columnNumber: 33
                            }, this),
                            lang.default ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
                                lineNumber: 99,
                                columnNumber: 37
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
                        lineNumber: 76,
                        columnNumber: 29
                    }, this)
                }, lang.id, false, {
                    fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
                    lineNumber: 75,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/language/presentation/components/LanguageSwitcher.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(LanguageSwitcher, "tfaVETQVIvTKT7N6v/Lcv/vlLKg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$presentation$2f$hooks$2f$useLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguages"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
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

//# sourceMappingURL=src_features_language_presentation_97f3d219._.js.map