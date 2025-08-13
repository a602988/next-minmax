module.exports = {

"[project]/.next-internal/server/app/[locale]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/i18n/request.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [app-rsc] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/i18n-integration.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/locale.config.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(async ({ requestLocale })=>{
    const requested = await requestLocale;
    // 1) 取得動態有效語系與動態預設語系（內含快取）
    let supportedLocales = [];
    let dynamicDefaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    try {
        supportedLocales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getSupportedLocales();
        dynamicDefaultLocale = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getDefaultLocale();
    } catch (e) {
        // 動態載入失敗時，使用 routing 的靜態預設作為兜底
        console.warn('⚠️ 載入動態 locales 失敗，使用靜態 routing 作為兜底', e);
        supportedLocales = [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].locales
        ]; // Create a mutable copy
        dynamicDefaultLocale = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    }
    // 2) 依優先序決定候選語系：URL → Cookie → 動態預設 → 靜態預設
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
    const candidate = requested || (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$locale$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LOCALE_CONFIG"].DETECTION.ENABLED ? cookieLocale : undefined) || dynamicDefaultLocale || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    // 3) 嚴格以 supportedLocales 驗證，非法則回退至 dynamicDefault → routing.defaultLocale
    const isValid = supportedLocales.includes(candidate);
    const locale = isValid ? candidate : supportedLocales.includes(dynamicDefaultLocale) ? dynamicDefaultLocale : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale;
    // 4) 載入對應 messages，失敗時回退到 default messages
    let messages;
    try {
        messages = (await __turbopack_context__.f({
            "../../messages/en.json": {
                id: ()=>"[project]/messages/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/en.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/ja.json": {
                id: ()=>"[project]/messages/ja.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/ja.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-CN.json": {
                id: ()=>"[project]/messages/zh-CN.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-CN.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-TW.json": {
                id: ()=>"[project]/messages/zh-TW.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-TW.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../messages/${locale}.json`)).default;
    } catch (e) {
        console.warn(`⚠️ 找不到 ${locale}.json，回退至 ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale}.json`, e);
        messages = (await __turbopack_context__.f({
            "../../messages/en.json": {
                id: ()=>"[project]/messages/en.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/en.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/ja.json": {
                id: ()=>"[project]/messages/ja.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/ja.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-CN.json": {
                id: ()=>"[project]/messages/zh-CN.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-CN.json (json, async loader)")(__turbopack_context__.i)
            },
            "../../messages/zh-TW.json": {
                id: ()=>"[project]/messages/zh-TW.json (json, async loader)",
                module: ()=>__turbopack_context__.r("[project]/messages/zh-TW.json (json, async loader)")(__turbopack_context__.i)
            }
        }).import(`../../messages/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"].defaultLocale}.json`)).default;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        console.log(`🌍 語系決策: requested=${requested} cookie=${cookieLocale} final=${locale}`);
    }
    return {
        locale,
        messages
    };
});
}),
"[project]/src/i18n/navigation.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Link": ()=>Link,
    "getPathname": ()=>getPathname,
    "redirect": ()=>redirect,
    "usePathname": ()=>usePathname,
    "useRouter": ()=>useRouter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-server/createNavigation.js [app-rsc] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-rsc] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$server$2f$createNavigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["routing"]);
}),
"[project]/src/services/locales.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "localesService": ()=>localesService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
;
;
/**
 * 國家語系對應服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */ class LocalesService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('國家語系對應');
    }
    /**
     * 取得國家語系對照表
     * @returns Promise<CountryLocaleMapping>
     */ async getLocales() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.MOCK.LOCALES,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.EXTERNAL.LOCALES
        };
        return this.apiRequest(endpoint);
    }
    /**
     * 根據國家代碼取得對應語系
     * @param countryCode 國家代碼 (如 "TW", "US")
     * @returns Promise<string | null>
     */ async getLocaleByCountry(countryCode) {
        try {
            const locales = await this.getLocales();
            return locales[countryCode] || null;
        } catch (error) {
            console.error(`❌ 無法取得國家 ${countryCode} 對應的語系:`, error);
            return null;
        }
    }
    /**
     * 覆寫成功日誌，顯示國家數量
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            const countryCount = Object.keys(data).length;
            console.log(`✅ ${this.serviceName}資料載入成功:`, countryCount, '個國家對照');
        }
    }
}
const localesService = new LocalesService();
}),
"[project]/src/services/system-menu.service.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "systemMenuService": ()=>systemMenuService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/api.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/base/api-service.base.ts [app-rsc] (ecmascript)");
;
;
/**
 * 系統選單服務 - 抽象化 API 呼叫
 * 根據環境變數自動切換 Mock 或正式 API
 */ class SystemMenuService extends __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$base$2f$api$2d$service$2e$base$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseApiService"] {
    constructor(){
        super('系統選單');
    }
    /**
     * 取得系統選單資料
     * @returns Promise<SystemMenuItem[]>
     */ async getSystemMenu() {
        const endpoint = {
            mock: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.MOCK.SYSTEM_MENUS,
            external: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].ENDPOINTS.EXTERNAL.SYSTEM_MENUS
        };
        return this.apiRequest(endpoint);
    }
    /**
     * 根據層級取得選單項目
     * @param level 選單層級 (1 或 2)
     * @returns Promise<SystemMenuItem[]>
     */ async getMenuByLevel(level) {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.filter((menu)=>menu.level === level);
        } catch (error) {
            console.error(`❌ 無法取得第 ${level} 層選單:`, error);
            return [];
        }
    }
    /**
     * 根據上層選單 ID 取得子選單
     * @param parentId 上層選單 ID
     * @returns Promise<SystemMenuItem[]>
     */ async ㄓㄜ(parentId) {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.filter((menu)=>menu.parentId === parentId);
        } catch (error) {
            console.error(`❌ 無法取得上層選單 ${parentId} 的子選單:`, error);
            return [];
        }
    }
    /**
     * 根據選單 ID 取得特定選單項目
     * @param menuId 選單項目 ID
     * @returns Promise<SystemMenuItem | null>
     */ async getMenuItemById(menuId) {
        try {
            const allMenus = await this.getSystemMenu();
            return allMenus.find((menu)=>menu.id === menuId) || null;
        } catch (error) {
            console.error(`❌ 無法找到選單項目 ${menuId}:`, error);
            return null;
        }
    }
    /**
     * 覆寫成功日誌，顯示選單項目統計
     */ logSuccess(data) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$api$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"].LOGGING) {
            const level1Count = data.filter((menu)=>menu.level === 1).length;
            const level2Count = data.filter((menu)=>menu.level === 2).length;
            console.log(`✅ ${this.serviceName}資料載入成功:`, `總計 ${data.length} 個選單項目 (第一層:${level1Count}, 第二層:${level2Count})`);
        }
    }
}
const systemMenuService = new SystemMenuService();
}),
"[project]/src/services/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// 統一導出所有服務
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$menu$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-menu.service.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/src/services/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$menu$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-menu.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/language/components/LanguageSwitcher.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/components/LanguageSwitcher.tsx <module evaluation>", "default");
}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/language/components/LanguageSwitcher.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/components/LanguageSwitcher.tsx", "default");
}),
"[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/services/index.ts [app-rsc] (ecmascript) <module evaluation>"); // ✅ 使用統一導出
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/locales.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function HomePage() {
    // 靜態渲染的翻譯資料
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])('navigation');
    const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
    const locales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$locales$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localesService"].getLocales();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "頁面"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/",
                                children: t('home')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/about",
                                children: t('about')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/contact",
                                children: t('contact')
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "支援的語系清單"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex gap-3",
                        children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/${lang.id}`,
                                title: lang.id,
                                children: lang.title
                            }, lang.id, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        className: "mb-6",
                        languages: languages,
                        variant: "dropdown"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "國家預設語系"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-3",
                        children: Object.entries(locales).map(([countryCode, locale])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    countryCode,
                                    " :  ",
                                    locale
                                ]
                            }, countryCode, true, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/page.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__646867ee._.js.map