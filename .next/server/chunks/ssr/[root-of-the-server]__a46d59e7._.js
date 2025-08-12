module.exports = {

"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

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
"[project]/src/features/language/components/LanguageProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/features/language/presentation/LanguageProvider.tsx
__turbopack_context__.s({
    "LanguageProvider": ()=>LanguageProvider,
    "useLanguageContext": ()=>useLanguageContext
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function LanguageProvider(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            languages: props.languages
        },
        children: props.children
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageProvider.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function useLanguageContext() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguageContext must be used within LanguageProvider');
    }
    return ctx;
}
}),
"[project]/src/features/language/hooks/useLanguages.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/features/language/presentation/hooks/useLanguages.ts
__turbopack_context__.s({
    "useLanguages": ()=>useLanguages
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageProvider.tsx [app-ssr] (ecmascript)");
'use client';
;
function useLanguages() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguageContext"])().languages;
}
}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>LanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguages.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function LanguageSwitcher({ className }) {
    const languages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguages"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 重要：所有 Hook 都要在頂層呼叫，不要放在 early return 之後
    const localeIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>new Set((languages ?? []).map((l)=>l.id)), [
        languages
    ]);
    // 這裡才做 early return（不會再呼叫任何 Hook）
    if (!languages || languages.length === 0) return null;
    function buildNextPath(target) {
        const raw = pathname;
        const parts = raw.split('/').filter(Boolean);
        const first = parts[0];
        const hasLocalePrefix = !!first && localeIds.has(first);
        const restPath = hasLocalePrefix ? `/${parts.slice(1).join('/')}` : raw;
        const nextBase = target.default ? restPath || '/' : `/${target.id}${restPath === '/' ? '' : restPath}`;
        const qs = searchParams?.toString();
        return qs ? `${nextBase}?${qs}` : nextBase;
    }
    function selectLanguage(target) {
        document.cookie = `NEXT_LOCALE=${encodeURIComponent(target.id)}; path=/; max-age=${60 * 60 * 24 * 180}`;
        const nextPath = buildNextPath(target);
        router.push(nextPath, {
            scroll: false
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: className,
        "aria-label": "Language switcher",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex flex-wrap items-center gap-2",
            children: languages.map((lang)=>{
                const label = lang.native || lang.title;
                const isDefault = !!lang.default;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>selectLanguage(lang),
                        className: 'inline-flex items-center gap-2 rounded px-3 py-1 text-sm ' + (isDefault ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'),
                        "aria-current": isDefault ? 'true' : undefined,
                        title: lang.title,
                        children: [
                            lang.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: `${lang.icon} inline-block h-4 w-4`
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 74,
                                columnNumber: 37
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 80,
                                columnNumber: 33
                            }, this),
                            isDefault ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 83,
                                columnNumber: 37
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 60,
                        columnNumber: 29
                    }, this)
                }, lang.id, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 59,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a46d59e7._.js.map