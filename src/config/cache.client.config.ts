/**
 * 快取系統客戶端配置檔案（僅業務邏輯）
 */

// redis 相關鍵格式（客戶端僅作 key 規則使用，不連線）
const redisConfig = {
    prefix: 'minmax:',
    keySeparator: ':',
} as const;

/**
 * 快取資料類型定義 - 統一管理所有快取相關設定
 * - 僅保留客戶端需要的預設 ttl/tags/描述
 */
const cacheDataTypes = {
    languages: {
        ttl: 7200, // 2 小時
        tags: ['languages', 'static-data'] as string[],
        description: '語言資料快取',
    },
    locales: {
        ttl: 7200, // 2 小時
        tags: ['locales', 'static-data'] as string[],
        description: '地區設定快取',
    },
    menus: {
        ttl: 3600, // 1 小時
        tags: ['menus', 'navigation'] as string[],
        description: '選單資料快取',
    },
    webData: {
        ttl: 3600, // 1 小時
        tags: ['web-data', 'static-data'] as string[],
        description: '網站資料快取',
    },
    pages: {
        ttl: 1800, // 30 分鐘
        tags: ['pages', 'content'] as string[],
        description: '頁面內容快取',
    },
    geoData: {
        ttl: 1800, // 30 分鐘
        tags: ['geo-data', 'location'] as string[],
        description: '地理位置資料快取',
    },
    userData: {
        ttl: 600, // 10 分鐘
        tags: ['user-data', 'dynamic-data'] as string[],
        description: '使用者資料快取',
    },
    apiResponse: {
        ttl: 3600, // 預設 1 小時，服務端可覆蓋
        tags: ['api-response'] as string[],
        description: 'API 回應快取',
    },
} as const;

export type CacheDataType = keyof typeof cacheDataTypes;

/**
 * 客戶端快取配置（僅業務邏輯）
 */
export const cacheConfig = {
    // 基礎配置（客戶端預設值）
    enabled: true,
    cdnEnabled: false,
    defaultTtl: 3600,
    strategy: 'memory' as const,

    // key 規則（僅作為 key 生成規範）
    redis: redisConfig,

    // 從 cacheDataTypes 自動生成 ttl 與 tags 映射
    ttl: {
        languages: cacheDataTypes.languages.ttl,
        locales: cacheDataTypes.locales.ttl,
        menus: cacheDataTypes.menus.ttl,
        webData: cacheDataTypes.webData.ttl,
        pages: cacheDataTypes.pages.ttl,
        geoData: cacheDataTypes.geoData.ttl,
        userData: cacheDataTypes.userData.ttl,
        apiResponse: cacheDataTypes.apiResponse.ttl,
    },

    tags: {
        languages: cacheDataTypes.languages.tags,
        locales: cacheDataTypes.locales.tags,
        menus: cacheDataTypes.menus.tags,
        webData: cacheDataTypes.webData.tags,
        pages: cacheDataTypes.pages.tags,
        geoData: cacheDataTypes.geoData.tags,
        userData: cacheDataTypes.userData.tags,
        apiResponse: cacheDataTypes.apiResponse.tags,
    },

    // 快取鍵值生成（不依賴自身物件，避免初始化順序問題）
    generateKey: (type: CacheDataType, identifier: string, locale?: string): string => {
        const parts = [redisConfig.prefix, type, identifier];
        if (locale) parts.push(locale);
        return parts.join(redisConfig.keySeparator);
    },
} as const;

/**
 * 取得指定資料類型的完整配置
 */
export function getCacheConfig(type: CacheDataType) {
    return cacheDataTypes[type];
}

/**
 * 取得指定資料類型的 TTL（毫秒）
 */
export function getCacheTtl(type: CacheDataType): number {
    return cacheDataTypes[type].ttl * 1000;
}

/**
 * 取得指定資料類型的標籤
 */
export function getCacheTags(type: CacheDataType): string[] {
    return cacheDataTypes[type].tags;
}

/**
 * 根據標籤找到相關的資料類型
 */
export function getDataTypesByTag(tag: string): CacheDataType[] {
    return Object.entries(cacheDataTypes)
        .filter(([_, config]) => config.tags.includes(tag))
        .map(([key]) => key as CacheDataType);
}

/**
 * 取得所有可用的標籤
 */
export function getAllCacheTags(): string[] {
    const allTags = Object.values(cacheDataTypes).flatMap((config) => config.tags);
    return [...new Set(allTags)];
}

/**
 * 取得快取配置摘要（用於除錯）
 */
export function getCacheConfigSummary() {
    return Object.entries(cacheDataTypes).map(([type, config]) => ({
        type,
        ttl: `${config.ttl}s (${config.ttl / 60}min)`,
        tags: config.tags.join(', '),
        description: config.description,
    }));
}