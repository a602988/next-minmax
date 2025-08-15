import { getCacheAdapter } from '@/lib/cache';
import { serverCacheConfig } from '@/config';
import type { Locale } from '@/types/';

const adapter = getCacheAdapter();

// 使用 server 端快取設定（不重複 env，僅取業務邏輯）
const key = serverCacheConfig.generateKey('locales', 'country-map');
const ttl = serverCacheConfig.ttl.locales;      // 單位：秒
const tags = serverCacheConfig.tags.locales;

export async function getLocalesCache(): Promise<Locale | null> {
    return adapter.get<Locale>(key);
}

export async function setLocalesCache(data: Locale): Promise<void> {
    await adapter.set(key, data, { ttl, tags });
}