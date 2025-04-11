/**
 * @file cache.ts
 * 簡單的內存緩存機制。
 */

/**
 * @interface CacheItem
 * 緩存項結構。
 */
interface CacheItem<T> {
    data: T;
    expiresAt: number;
}

// 緩存存儲，鍵為字符串，值為 CacheItem。
const cacheStore = new Map<string, CacheItem<unknown>>();

/**
 * @function getCached
 * 獲取緩存數據，若過期或不存在則返回 undefined。
 */
export function getCached<T>(key: string): T | undefined {
    const entry = cacheStore.get(key);
    if (!entry) return undefined;
    if (Date.now() > entry.expiresAt) {
        cacheStore.delete(key); // 刪除過期項
        return undefined;
    }
    return entry.data as T;
}

/**
 * @function setCached
 * 存儲數據到緩存，設置過期時間。
 */
export function setCached<T>(key: string, data: T, ttlSeconds: number = 60): void {
    const expiresAt = Date.now() + ttlSeconds * 1000; // 計算過期時間
    cacheStore.set(key, { data, expiresAt });
}
