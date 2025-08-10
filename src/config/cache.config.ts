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
 */

import { env } from '@/env.mjs';

/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 */
const CACHE_DATA_TYPES = {
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
};

/**
 * 快取相關配置
 */
export const CACHE_CONFIG = {
    // 基礎配置
    ENABLED: env.CACHE_ENABLED,
    CDN_ENABLED: env.CACHE_CDN_ENABLED,
    DEFAULT_TTL: env.CACHE_DEFAULT_TTL,
    STRATEGY: env.I18N_CACHE_STRATEGY,

    // Redis 配置
    REDIS: {
        URL: undefined,
        PREFIX: 'minmax:',
        KEY_SEPARATOR: ':',
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
        API_RESPONSE: CACHE_DATA_TYPES.API_RESPONSE.ttl,
    },

    TAGS: {
        LANGUAGES: CACHE_DATA_TYPES.LANGUAGES.tags,
        LOCALES: CACHE_DATA_TYPES.LOCALES.tags,
        MENUS: CACHE_DATA_TYPES.MENUS.tags,
        WEB_DATA: CACHE_DATA_TYPES.WEB_DATA.tags,
        PAGES: CACHE_DATA_TYPES.PAGES.tags,
        GEO_DATA: CACHE_DATA_TYPES.GEO_DATA.tags,
        USER_DATA: CACHE_DATA_TYPES.USER_DATA.tags,
        API_RESPONSE: CACHE_DATA_TYPES.API_RESPONSE.tags,
    },

    // 快取鍵值生成函數
    generateKey: (type: CacheDataType, identifier: string, locale?: string): string => {
        const parts = [CACHE_CONFIG.REDIS.PREFIX, type, identifier];
        if (locale) parts.push(locale);
        return parts.join(CACHE_CONFIG.REDIS.KEY_SEPARATOR);
    },
} as const;

// 輔助函數
export type CacheDataType = keyof typeof CACHE_DATA_TYPES;

/**
 * 取得指定資料類型的完整配置
 */
export function getCacheConfig(type: CacheDataType) {
    return CACHE_DATA_TYPES[type];
}

/**
 * 取得指定資料類型的 TTL (毫秒)
 */
export function getCacheTTL(type: CacheDataType): number {
    return CACHE_DATA_TYPES[type].ttl * 1000;
}

/**
 * 取得指定資料類型的標籤
 */
export function getCacheTags(type: CacheDataType): string[] {
    return CACHE_DATA_TYPES[type].tags;
}

/**
 * 根據標籤找到相關的資料類型
 */
export function getDataTypesByTag(tag: string): CacheDataType[] {
    return Object.entries(CACHE_DATA_TYPES)
        .filter(([_, config]) => config.tags.includes(tag))
        .map(([key]) => key as CacheDataType);
}

/**
 * 取得所有可用的標籤
 */
export function getAllCacheTags(): string[] {
    const allTags = Object.values(CACHE_DATA_TYPES).flatMap(config => config.tags);
    return [...new Set(allTags)];
}

/**
 * 取得快取配置摘要 (用於除錯)
 */
export function getCacheConfigSummary() {
    return Object.entries(CACHE_DATA_TYPES).map(([type, config]) => ({
        type,
        ttl: `${config.ttl}s (${config.ttl / 60}min)`,
        tags: config.tags.join(', '),
        description: config.description
    }));
}