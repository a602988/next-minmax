/**
 * 快取系統服務端配置檔案
 * 包含完整的快取配置，包括環境變數
 */

import { env } from '@/env.mjs';
import {
    getCacheConfig,
    getCacheTTL,
    getCacheTags,
    getDataTypesByTag,
    getAllCacheTags,
    getCacheConfigSummary,
    type CacheDataType
} from './cache.client.config';

/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 */
const SERVER_CACHE_DATA_TYPES = {
    LANGUAGES: {
        ttl: 7200,  // 2小時
        tags: ['languages', 'static-data'] as string[],
        description: '語言資料快取'
    },
    LOCALES: {
        ttl: 7200,  // 2小時
        tags: ['locales', 'static-data'] as string[],
        description: '地區設定快取'
    },
    MENUS: {
        ttl: 3600,  // 1小時
        tags: ['menus', 'navigation'] as string[],
        description: '選單資料快取'
    },
    WEB_DATA: {
        ttl: 3600,  // 1小時
        tags: ['web-data', 'static-data'] as string[],
        description: '網站資料快取'
    },
    PAGES: {
        ttl: 1800,  // 30分鐘
        tags: ['pages', 'content'] as string[],
        description: '頁面內容快取'
    },
    GEO_DATA: {
        ttl: 1800,  // 30分鐘
        tags: ['geo-data', 'location'] as string[],
        description: '地理位置資料快取'
    },
    USER_DATA: {
        ttl: 600,   // 10分鐘
        tags: ['user-data', 'dynamic-data'] as string[],
        description: '使用者資料快取'
    },
    API_RESPONSE: {
        ttl: env.CACHE_DEFAULT_TTL,
        tags: ['api-response'] as string[],
        description: 'API 回應快取'
    },
} as const;

/**
 * 服務端快取配置
 */
export const SERVER_CACHE_CONFIG = {
    // 基礎配置 (從環境變數讀取)
    ENABLED: env.CACHE_ENABLED,
    CDN_ENABLED: env.CACHE_CDN_ENABLED,
    DEFAULT_TTL: env.CACHE_DEFAULT_TTL,
    STRATEGY: env.I18N_CACHE_STRATEGY,

    // Redis 配置
    REDIS: {
        URL: undefined, // 可以從環境變數添加
        PREFIX: 'minmax:',
        KEY_SEPARATOR: ':',
    },

    // 從 SERVER_CACHE_DATA_TYPES 自動生成 TTL 和 TAGS
    TTL: {
        LANGUAGES: SERVER_CACHE_DATA_TYPES.LANGUAGES.ttl,
        LOCALES: SERVER_CACHE_DATA_TYPES.LOCALES.ttl,
        MENUS: SERVER_CACHE_DATA_TYPES.MENUS.ttl,
        WEB_DATA: SERVER_CACHE_DATA_TYPES.WEB_DATA.ttl,
        PAGES: SERVER_CACHE_DATA_TYPES.PAGES.ttl,
        GEO_DATA: SERVER_CACHE_DATA_TYPES.GEO_DATA.ttl,
        USER_DATA: SERVER_CACHE_DATA_TYPES.USER_DATA.ttl,
        API_RESPONSE: SERVER_CACHE_DATA_TYPES.API_RESPONSE.ttl,
    },

    TAGS: {
        LANGUAGES: SERVER_CACHE_DATA_TYPES.LANGUAGES.tags,
        LOCALES: SERVER_CACHE_DATA_TYPES.LOCALES.tags,
        MENUS: SERVER_CACHE_DATA_TYPES.MENUS.tags,
        WEB_DATA: SERVER_CACHE_DATA_TYPES.WEB_DATA.tags,
        PAGES: SERVER_CACHE_DATA_TYPES.PAGES.tags,
        GEO_DATA: SERVER_CACHE_DATA_TYPES.GEO_DATA.tags,
        USER_DATA: SERVER_CACHE_DATA_TYPES.USER_DATA.tags,
        API_RESPONSE: SERVER_CACHE_DATA_TYPES.API_RESPONSE.tags,
    },

    // 快取鍵值生成函數
    generateKey: (type: CacheDataType, identifier: string, locale?: string): string => {
        const parts = [SERVER_CACHE_CONFIG.REDIS.PREFIX, type, identifier];
        if (locale) parts.push(locale);
        return parts.join(SERVER_CACHE_CONFIG.REDIS.KEY_SEPARATOR);
    },
} as const;

// 重新導出客戶端的輔助函數，讓服務端也能使用
export {
    getCacheConfig,
    getCacheTTL,
    getCacheTags,
    getDataTypesByTag,
    getAllCacheTags,
    getCacheConfigSummary,
    type CacheDataType
};

// 服務端專用的輔助函數
/**
 * 取得服務端指定資料類型的完整配置
 */
export function getServerCacheConfig(type: CacheDataType) {
    return SERVER_CACHE_DATA_TYPES[type];
}

/**
 * 取得服務端指定資料類型的 TTL (毫秒)
 */
export function getServerCacheTTL(type: CacheDataType): number {
    return SERVER_CACHE_DATA_TYPES[type].ttl * 1000;
}

/**
 * 取得服務端指定資料類型的標籤
 */
export function getServerCacheTags(type: CacheDataType): string[] {
    return SERVER_CACHE_DATA_TYPES[type].tags;
}

/**
 * 取得服務端快取配置摘要 (用於除錯)
 */
export function getServerCacheConfigSummary() {
    return Object.entries(SERVER_CACHE_DATA_TYPES).map(([type, config]) => ({
        type,
        ttl: `${config.ttl}s (${config.ttl / 60}min)`,
        tags: config.tags.join(', '),
        description: config.description
    }));
}

// 導出類型
export type ServerCacheConfig = typeof SERVER_CACHE_CONFIG;