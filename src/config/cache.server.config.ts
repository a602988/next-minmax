/**
 * 快取系統服務端配置（僅業務邏輯）
 * - 不重複 env：用 getter 直接回傳 env 值
 * - 保留 server 覆寫 ttl 與鍵規則（generateKey）
 * - 命名使用小寫（camelCase）
 */
import { env } from '@/env.mjs';
import {
    cacheConfig,                 // client 的 key 規則與基本 ttl/tags
    getCacheConfig,
    getCacheTtl as getCacheTtlClientMs,
    getCacheTags as getCacheTagsClient,
    getDataTypesByTag,
    getAllCacheTags,
    getCacheConfigSummary,
    type CacheDataType,
} from './cache.client.config';

// 服務端覆寫：僅作必要差異（例：apiResponse）
const serverTtl = {
    ...cacheConfig.ttl,
    apiResponse: env.CACHE_DEFAULT_TTL, // 秒
} as const;

const serverTags = {
    ...cacheConfig.tags,
} as const;

export const serverCacheConfig = {
    // key 規則（沿用 client）
    redis: cacheConfig.redis,

    // ttl/tags 聚合（server 覆寫）
    ttl: serverTtl,   // 秒
    tags: serverTags,

    // 快取鍵值生成（純規則）
    generateKey: (type: CacheDataType, identifier: string, locale?: string): string => {
        const parts = [cacheConfig.redis.prefix, type, identifier];
        if (locale) parts.push(locale);
        return parts.join(cacheConfig.redis.keySeparator);
    },
} as const;

// 直接讀 env（避免鏡射）
export const isCacheEnabled = (): boolean => env.CACHE_ENABLED;
export const isCdnEnabled = (): boolean => env.CACHE_CDN_ENABLED;
export const getDefaultTtl = (): number => env.CACHE_DEFAULT_TTL; // 秒
export const getCacheStrategy = (): 'memory' | 'redis' | 'none' => env.I18N_CACHE_STRATEGY;

// 共用導出
export {
    getCacheConfig,
    getCacheTtlClientMs,
    getCacheTagsClient,
    getDataTypesByTag,
    getAllCacheTags,
    getCacheConfigSummary,
    type CacheDataType,
};

// 服務端便捷函式
export function getServerCacheConfig(type: CacheDataType) {
    const base = getCacheConfig(type);
    return {
        type,
        ttl: serverTtl[type],            // 秒
        tags: serverTags[type],
        description: base.description,
    };
}
export function getServerCacheTtl(type: CacheDataType): number {
    return serverTtl[type];            // 秒
}
export function getServerCacheTtlMs(type: CacheDataType): number {
    return serverTtl[type] * 1000;     // 毫秒
}
export function getServerCacheTags(type: CacheDataType): string[] {
    return serverTags[type];
}
export function getServerCacheConfigSummary() {
    return (Object.keys(serverTtl) as CacheDataType[]).map((type) => ({
        type,
        ttl: `${serverTtl[type]}s (${serverTtl[type] / 60}min)`,
        tags: serverTags[type].join(', '),
        description: getCacheConfig(type).description,
    }));
}

export type ServerCacheConfig = typeof serverCacheConfig;