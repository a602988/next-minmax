// src/lib/cache/types.ts
export type CacheSetOptions = {
    ttl?: number;      // 秒
    tags?: string[];   // 標籤，用於清除
};

export interface CacheAdapter {
    get<T>(key: string): Promise<T | null>;
    set<T>(key: string, value: T, options?: CacheSetOptions): Promise<void>;
    del(key: string): Promise<void>;
    delByTag(tag: string): Promise<void>;
    clear(): Promise<void>;
}