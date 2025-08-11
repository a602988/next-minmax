// src/lib/cache/memory-adapter.ts 記憶體快取實作（Map + TTL + Tag 索引）
import type { CacheAdapter, CacheSetOptions } from './types';

type StoreItem = {
    value: unknown;
    expireAt?: number;      // ms
    tags: Set<string>;
};

export class MemoryCacheAdapter implements CacheAdapter {
    private store = new Map<string, StoreItem>();
    private tagIndex = new Map<string, Set<string>>();

    async get<T>(key: string): Promise<T | null> {
        const item = this.store.get(key);
        if (!item) return null;
        if (item.expireAt && Date.now() > item.expireAt) {
            this.evict(key, item);
            return null;
        }
        return item.value as T;
    }

    async set<T>(key: string, value: T, options?: CacheSetOptions): Promise<void> {
        const ttlSec = options?.ttl ?? 0;
        const expireAt = ttlSec > 0 ? Date.now() + ttlSec * 1000 : undefined;
        const tags = new Set(options?.tags ?? []);
        const old = this.store.get(key);
        if (old) this.unindexTags(key, old.tags);
        this.store.set(key, { value, expireAt, tags });
        this.indexTags(key, tags);
    }

    async del(key: string): Promise<void> {
        const item = this.store.get(key);
        if (!item) return;
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }

    async delByTag(tag: string): Promise<void> {
        const keys = this.tagIndex.get(tag);
        if (!keys) return;
        for (const key of keys) {
            const item = this.store.get(key);
            if (!item) continue;
            this.unindexTags(key, item.tags);
            this.store.delete(key);
        }
        this.tagIndex.delete(tag);
    }

    async clear(): Promise<void> {
        this.store.clear();
        this.tagIndex.clear();
    }

    private evict(key: string, item: StoreItem) {
        this.unindexTags(key, item.tags);
        this.store.delete(key);
    }

    private indexTags(key: string, tags: Set<string>) {
        for (const tag of tags) {
            if (!this.tagIndex.has(tag)) this.tagIndex.set(tag, new Set());
            this.tagIndex.get(tag)!.add(key);
        }
    }

    private unindexTags(key: string, tags: Set<string>) {
        for (const tag of tags) {
            const set = this.tagIndex.get(tag);
            if (!set) continue;
            set.delete(key);
            if (set.size === 0) this.tagIndex.delete(tag);
        }
    }
}