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
"[project]/src/lib/cache/types.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/lib/cache/types.ts
__turbopack_context__.s({});
;
}),
"[project]/src/lib/cache/memory-adapter.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/lib/cache/memory-adapter.ts 記憶體快取實作（Map + TTL + Tag 索引）
__turbopack_context__.s({
    "MemoryCacheAdapter": ()=>MemoryCacheAdapter
});
class MemoryCacheAdapter {
    store = new Map();
    tagIndex = new Map();
    async get(key) {
        const item = this.store.get(key);
        if (!item) return null;
        if (item.expireAt && Date.now() > item.expireAt) {
            this.evict(key, item);
            return null;
        }
        return item.value;
    }
    async set(key, value, options) {
        const ttlSec = options?.ttl ?? 0;
        const expireAt = ttlSec > 0 ? Date.now() + ttlSec * 1000 : undefined;
        const tags = new Set(options?.tags ?? []);
        const old = this.store.get(key);
        if (old) this.unindexTags(key, old.tags);
        this.store.set(key, {
            value,
            expireAt,
            tags
        });
        this.indexTags(key, tags);
    }
    async del(key) {
        const item = this.store.get(key);
        if (!item) return;
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }
    async delByTag(tag) {
        const keys = this.tagIndex.get(tag);
        if (!keys) return;
        for (const key of keys){
            const item = this.store.get(key);
            if (!item) continue;
            this.unindexTags(key, item.tags);
            this.store.delete(key);
        }
        this.tagIndex.delete(tag);
    }
    async clear() {
        this.store.clear();
        this.tagIndex.clear();
    }
    evict(key, item) {
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }
    indexTags(key, tags) {
        for (const tag of tags){
            if (!this.tagIndex.has(tag)) this.tagIndex.set(tag, new Set());
            this.tagIndex.get(tag).add(key);
        }
    }
    unindexTags(key, tags) {
        for (const tag of tags){
            const set = this.tagIndex.get(tag);
            if (!set) continue;
            set.delete(key);
            if (set.size === 0) this.tagIndex.delete(tag);
        }
    }
}
}),
"[project]/src/lib/cache/factory.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/lib/cache/factory.ts
__turbopack_context__.s({
    "getCacheAdapter": ()=>getCacheAdapter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/memory-adapter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-rsc] (ecmascript)");
;
;
let singleton = null;
function getCacheAdapter() {
    if (singleton) return singleton;
    const strategy = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].STRATEGY; // 'memory' | 'redis' | 'none'
    if (strategy === 'memory') {
        singleton = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryCacheAdapter"]();
    } else if (strategy === 'redis') {
        // TODO: 之後接 RedisAdapter
        singleton = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$memory$2d$adapter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MemoryCacheAdapter"]();
    // 可先以記憶體代替，待接線時替換
    } else {
        // none：回傳最小 no-op adapter
        singleton = {
            async get () {
                return null;
            },
            async set () {},
            async del () {},
            async delByTag () {},
            async clear () {}
        };
    }
    return singleton;
}
}),
"[project]/src/lib/cache/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// src/lib/cache/index.ts
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/factory.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/lib/cache/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/types.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/factory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/cache/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/features/language/lib/language.cache.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/features/language/infrastructure/language.cache.ts
__turbopack_context__.s({
    "clearLanguagesCache": ()=>clearLanguagesCache,
    "getLanguagesCache": ()=>getLanguagesCache,
    "setLanguagesCache": ()=>setLanguagesCache
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/lib/cache/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cache/factory.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/cache.config.ts [app-rsc] (ecmascript)");
;
;
const adapter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cache$2f$factory$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheAdapter"])();
const KEY = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].generateKey('LANGUAGES', 'list');
const TTL = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].TTL.LANGUAGES;
const TAGS = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$cache$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_CONFIG"].TAGS.LANGUAGES;
async function getLanguagesCache() {
    return adapter.get(KEY);
}
async function setLanguagesCache(data) {
    await adapter.set(KEY, data, {
        ttl: TTL,
        tags: TAGS
    });
}
async function clearLanguagesCache() {
    await adapter.del(KEY);
} // 若之後要清除整個類別：adapter.delByTag('languages')
}),
"[project]/src/features/language/services/language.repository.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// src/features/language/application/language.repository.ts
__turbopack_context__.s({
    "LanguageRepository": ()=>LanguageRepository,
    "languageRepository": ()=>languageRepository
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/language.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$language$2e$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/lib/language.cache.ts [app-rsc] (ecmascript)");
;
;
class LanguageRepository {
    async getLanguages() {
        const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$language$2e$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLanguagesCache"])();
        if (cached) return cached;
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$language$2e$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setLanguagesCache"])(data);
        return data;
    }
    async refreshLanguages() {
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$language$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageService"].getLanguages();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$language$2e$cache$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setLanguagesCache"])(data);
        return data;
    }
}
const languageRepository = new LanguageRepository();
}),
"[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$language$2e$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/services/language.repository.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$language$2e$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/services/language.repository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <locals>");
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
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/language/components/LanguageSwitcherContainer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/components/LanguageSwitcherContainer.tsx <module evaluation>", "default");
}),
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/features/language/components/LanguageSwitcherContainer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/components/LanguageSwitcherContainer.tsx", "default");
}),
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useLanguageSwitcher": ()=>useLanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const useLanguageSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLanguageSwitcher() from the server but useLanguageSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/hooks/useLanguageSwitcher.ts <module evaluation>", "useLanguageSwitcher");
}),
"[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "useLanguageSwitcher": ()=>useLanguageSwitcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const useLanguageSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLanguageSwitcher() from the server but useLanguageSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/features/language/hooks/useLanguageSwitcher.ts", "useLanguageSwitcher");
}),
"[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/features/language/hooks/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (ecmascript)");
;
}),
"[project]/src/features/language/hooks/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$useLanguageSwitcher$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/hooks/useLanguageSwitcher.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/features/language/lib/getLanguagesForSSR.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getLanguagesForSSR": ()=>getLanguagesForSSR
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$language$2e$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/services/language.repository.ts [app-rsc] (ecmascript)");
;
async function getLanguagesForSSR() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$language$2e$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["languageRepository"].getLanguages();
}
}),
"[project]/src/features/language/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

//  對外匯出整合（barrel）
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <module evaluation>"); // 子 barrel，會指向 ./services/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$getLanguagesForSSR$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/lib/getLanguagesForSSR.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/features/language/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$services$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/services/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcher.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$hooks$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/hooks/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$lib$2f$getLanguagesForSSR$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/lib/getLanguagesForSSR.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/features/language/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript) <export default as LanguageSwitcherContainer>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LanguageSwitcherContainer": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript)");
}),
"[project]/src/components/layout/Header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Header
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getTranslations.js [app-rsc] (ecmascript) <export default as getTranslations>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/i18n-integration.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/features/language/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguageSwitcherContainer$3e$__ = __turbopack_context__.i("[project]/src/features/language/components/LanguageSwitcherContainer.tsx [app-rsc] (ecmascript) <export default as LanguageSwitcherContainer>");
;
;
;
;
;
async function Header() {
    // 靜態渲染的翻譯資料
    const t = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getTranslations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__getTranslations$3e$__["getTranslations"])('navigation');
    const languages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getLanguages();
    const locales = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$i18n$2d$integration$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["I18nIntegrationService"].getCountryLocaleMap();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "頁面"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
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
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 18,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/about",
                                children: t('about')
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/contact",
                                children: t('contact')
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 17,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "支援的語系清單"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
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
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$language$2f$components$2f$LanguageSwitcherContainer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LanguageSwitcherContainer$3e$__["LanguageSwitcherContainer"], {
                        className: "mb-6",
                        variant: "inline",
                        languages: languages
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "國家預設語系"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex gap-3",
                        children: Object.entries(locales).map(([countryCode, locale])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    countryCode,
                                    " : ",
                                    locale
                                ]
                            }, countryCode, true, {
                                fileName: "[project]/src/components/layout/Header.tsx",
                                lineNumber: 44,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[locale]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Header.tsx [app-rsc] (ecmascript)");
;
;
async function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page flex flex-col gap-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/[locale]/page.tsx",
            lineNumber: 7,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/page.tsx",
        lineNumber: 6,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__7ddf3e11._.js.map