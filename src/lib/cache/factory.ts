import type { CacheAdapter } from './types';
import { MemoryCacheAdapter } from './memory-adapter';
import { env } from '@/env.mjs';

let singleton: CacheAdapter | null = null;

export function getCacheAdapter(): CacheAdapter {
    if (singleton) return singleton;

    // 直接讀 env，避免依賴另一層 config 常量
    const strategy = env.I18N_CACHE_STRATEGY; // 'memory' | 'redis' | 'none'

    if (strategy === 'memory') {
        singleton = new MemoryCacheAdapter();
    } else if (strategy === 'redis') {
        // TODO: 之後接 RedisAdapter
        singleton = new MemoryCacheAdapter();
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