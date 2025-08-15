import { getCacheAdapter } from '@/lib/cache';
import { serverCacheConfig } from '@/config/';
import type { Language } from '@/types';

const adapter = getCacheAdapter();

// 使用 server 端快取設定（不重複 env，僅取業務邏輯）
// 注意：type 一律使用小寫鍵（languages）
const key = serverCacheConfig.generateKey('languages', 'list');
const ttl = serverCacheConfig.ttl.languages;      // 單位：秒
const tags = serverCacheConfig.tags.languages;

export async function getLanguagesCache(): Promise<Language[] | null> {
    return adapter.get<Language[]>(key);
}

export async function setLanguagesCache(data: Language[]): Promise<void> {
    await adapter.set(key, data, { ttl, tags });
}

export async function clearLanguagesCache(): Promise<void> {
    await adapter.del(key);
}

// 若之後要清除整個類別：adapter.delByTag('languages')