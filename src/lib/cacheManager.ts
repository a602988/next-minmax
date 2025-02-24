// lib/cacheManager.ts
/**
 * 獨立的緩存管理模組
 * 提供 getCache、setCache、clearCache 的介面
 */

interface CacheEntry<T> {
    data: T;
    timestamp: number;
    duration: number; // 存有效期，秒
}

// 緩存持續時間（毫秒），可以根據需求調整或作為參數化配置
const cache = new Map<string, CacheEntry<any>>();


/**
 * 取得緩存的資料，如果緩存存在且未過期，則回傳資料，否則回傳 undefined
 * @param key 緩存鍵值
 */
export function getCache<T>(key: string): T | undefined {
    // 檢查緩存是否存在，如果存在則檢查是否已過期
    const entry = cache.get(key);
    // 如果存在且未過期，返回資料，否返回 undefined
    if (entry && Date.now() - entry.timestamp < entry.duration) {
        console.log(`Cache hit for key: ${key}`, entry.data);
        return entry.data;
    }
    console.log(`Cache miss for key: ${key}`);
    return undefined;
}

/**
 * 將資料存入緩存
 * @param key 緩存鍵值
 * @param data 要緩存的資料
 */
export function setCache<T>(key: string, data: T, duration: number): void {
    console.log(`Setting cache for key: ${key}`, data);
    cache.set(key, { data, timestamp: Date.now(), duration });
}

/**
 * 清除所有緩存
 */
export function clearCache(): void {
    cache.clear();
}
