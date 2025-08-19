/**
 * 記憶體快取適配器實作
 *
 * 基於 JavaScript Map 實作的記憶體快取系統，支援 TTL（生存時間）和標籤索引功能。
 * 適合開發環境或小型應用使用，資料存儲在應用程式記憶體中，重啟後會遺失。
 *
 * 主要特性：
 * - TTL 支援：可設定快取項目的過期時間
 * - 標籤索引：支援按標籤批量刪除快取項目
 * - 自動清理：讀取時自動清理過期項目
 * - 型別安全：支援泛型，確保型別安全
 *
 * 注意事項：
 * - 記憶體使用量會隨快取項目增加而增長
 * - 應用程式重啟後所有快取資料會遺失
 * - 適合單機部署，不支援分散式快取
 */

import type { CacheAdapter, CacheSetOptions } from './types';

/**
 * 快取項目的內部資料結構
 */
type StoreItem = {
    /** 快取的值，可以是任意型別 */
    value: unknown;
    /** 過期時間戳（毫秒），undefined 表示永不過期 */
    expireAt?: number;
    /** 關聯的標籤集合，用於批量操作 */
    tags: Set<string>;
};

/**
 * 記憶體快取適配器
 *
 * 實作 CacheAdapter 介面，提供基於記憶體的快取功能。
 * 使用 Map 作為主要存儲結構，並維護標籤到鍵值的反向索引。
 */
export class MemoryCacheAdapter implements CacheAdapter {
    /** 主要存儲結構：鍵值 -> 快取項目 */
    private store = new Map<string, StoreItem>();
    /** 標籤索引：標籤 -> 包含該標籤的鍵值集合 */
    private tagIndex = new Map<string, Set<string>>();

    /**
     * 取得快取值
     *
     * @template T 快取值的型別
     * @param key 快取鍵值
     * @returns 快取的值，如果不存在或已過期則回傳 null
     */
    async get<T>(key: string): Promise<T | null> {
        const item = this.store.get(key);
        if (!item) return null;

        // 檢查是否過期，過期則自動清理
        if (item.expireAt && Date.now() > item.expireAt) {
            this.evict(key, item);
            return null;
        }

        return item.value as T;
    }

    /**
     * 設定快取值
     *
     * @template T 快取值的型別
     * @param key 快取鍵值
     * @param value 要快取的值
     * @param options 快取選項，包含 TTL 和標籤
     */
    async set<T>(key: string, value: T, options?: CacheSetOptions): Promise<void> {
        const ttlSec = options?.ttl ?? 0;
        const expireAt = ttlSec > 0 ? Date.now() + ttlSec * 1000 : undefined;
        const tags = new Set(options?.tags ?? []);

        // 如果鍵值已存在，先清理舊的標籤索引
        const old = this.store.get(key);
        if (old) this.unindexTags(key, old.tags);

        // 設定新值並建立標籤索引
        this.store.set(key, { value, expireAt, tags });
        this.indexTags(key, tags);
    }

    /**
     * 刪除指定鍵值的快取
     *
     * @param key 要刪除的快取鍵值
     */
    async del(key: string): Promise<void> {
        const item = this.store.get(key);
        if (!item) return;

        // 清理標籤索引並刪除項目
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }

    /**
     * 按標籤批量刪除快取
     *
     * 刪除所有包含指定標籤的快取項目，常用於相關資料的批量失效。
     *
     * @param tag 要刪除的標籤
     */
    async delByTag(tag: string): Promise<void> {
        const keys = this.tagIndex.get(tag);
        if (!keys) return;

        // 遍歷所有包含該標籤的鍵值並刪除
        for (const key of keys) {
            const item = this.store.get(key);
            if (!item) continue;
            this.unindexTags(key, item.tags);
            this.store.delete(key);
        }

        // 清理標籤索引
        this.tagIndex.delete(tag);
    }

    /**
     * 清空所有快取
     *
     * 刪除所有快取項目和標籤索引，重置快取狀態。
     */
    async clear(): Promise<void> {
        this.store.clear();
        this.tagIndex.clear();
    }

    /**
     * 清理過期項目
     *
     * 內部方法，用於清理過期的快取項目和相關的標籤索引。
     *
     * @private
     * @param key 要清理的鍵值
     * @param item 要清理的快取項目
     */
    private evict(key: string, item: StoreItem) {
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }

    /**
     * 建立標籤索引
     *
     * 為指定鍵值的標籤建立反向索引，用於支援按標籤查詢和刪除。
     *
     * @private
     * @param key 鍵值
     * @param tags 標籤集合
     */
    private indexTags(key: string, tags: Set<string>) {
        for (const tag of tags) {
            if (!this.tagIndex.has(tag)) this.tagIndex.set(tag, new Set());
            this.tagIndex.get(tag)!.add(key);
        }
    }

    /**
     * 清理標籤索引
     *
     * 從標籤索引中移除指定鍵值的關聯，如果標籤下沒有其他鍵值則刪除該標籤。
     *
     * @private
     * @param key 鍵值
     * @param tags 標籤集合
     */
    private unindexTags(key: string, tags: Set<string>) {
        for (const tag of tags) {
            const set = this.tagIndex.get(tag);
            if (!set) continue;
            set.delete(key);
            // 如果標籤下沒有其他鍵值，刪除該標籤索引
            if (set.size === 0) this.tagIndex.delete(tag);
        }
    }
}