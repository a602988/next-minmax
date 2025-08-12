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
"[project]/src/i18n/locale-cookie.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// TypeScript
// src/i18n/locale-cookie.ts
__turbopack_context__.s({
    "NEXT_LOCALE_COOKIE": ()=>NEXT_LOCALE_COOKIE,
    "buildNextLocaleCookie": ()=>buildNextLocaleCookie
});
const NEXT_LOCALE_COOKIE = {
    NAME: 'NEXT_LOCALE',
    PATH: '/',
    MAX_AGE_SECONDS: 60 * 60 * 24 * 180,
    SAME_SITE: 'Lax',
    // 在 HTTPS 環境建議設為 true；本地可視情況調整
    SECURE: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : true
};
function buildNextLocaleCookie(value) {
    const parts = [
        `${NEXT_LOCALE_COOKIE.NAME}=${encodeURIComponent(value)}`,
        `Path=${NEXT_LOCALE_COOKIE.PATH}`,
        `Max-Age=${NEXT_LOCALE_COOKIE.MAX_AGE_SECONDS}`,
        `SameSite=${NEXT_LOCALE_COOKIE.SAME_SITE}`
    ];
    if (NEXT_LOCALE_COOKIE.SECURE) parts.push('Secure');
    return parts.join('; ');
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$locale$2d$cookie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/locale-cookie.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function LanguageSwitcher({ className, languages }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])() || '/';
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const localeIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>new Set((languages ?? []).map((l)=>l.id)), [
        languages
    ]);
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
        // 使用集中設定生成 Cookie 字串
        document.cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$locale$2d$cookie$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildNextLocaleCookie"])(target.id);
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
                                lineNumber: 70,
                                columnNumber: 37
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 72,
                                columnNumber: 33
                            }, this),
                            isDefault ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]",
                                children: "default"
                            }, void 0, false, {
                                fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                                lineNumber: 74,
                                columnNumber: 37
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                        lineNumber: 57,
                        columnNumber: 29
                    }, this)
                }, lang.id, false, {
                    fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
                    lineNumber: 56,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
            lineNumber: 50,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/features/language/components/LanguageSwitcher.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__274a3cf1._.js.map