// src/lib/cache/factory.ts
import { MemoryCacheAdapter } from './memory-adapter';
import type { CacheAdapter } from './types';
import { CACHE_CONFIG } from '@/config';

let singleton: CacheAdapter | null = null;

export function getCacheAdapter(): CacheAdapter {
    if (singleton) return singleton;

    const strategy = CACHE_CONFIG.STRATEGY; // 'memory' | 'redis' | 'none'
    if (strategy === 'memory') {
        singleton = new MemoryCacheAdapter();
    } else if (strategy === 'redis') {
        // TODO: 之後接 RedisAdapter
        singleton = new MemoryCacheAdapter();
        // 可先以記憶體代替，待接線時替換
    } else {
        // none：回傳最小 no-op adapter
        singleton = {
            async get() { return null; },
            async set() { /* no-op */ },
            async del() { /* no-op */ },
            async delByTag() { /* no-op */ },
            async clear() { /* no-op */ }
        };
    }
    return singleton;
}