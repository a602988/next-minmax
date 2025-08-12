// src/features/language/infrastructure/language.cache.ts
import { getCacheAdapter } from '@/lib/cache';
import { CACHE_CONFIG } from '@/config';
import type { Language } from '@/types';

const adapter = getCacheAdapter();

const KEY = CACHE_CONFIG.generateKey('LANGUAGES', 'list');
const TTL = CACHE_CONFIG.TTL.LANGUAGES;
const TAGS = CACHE_CONFIG.TAGS.LANGUAGES;

export async function getLanguagesCache(): Promise<Language[] | null> {
    return adapter.get<Language[]>(KEY);
}

export async function setLanguagesCache(data: Language[]): Promise<void> {
    await adapter.set(KEY, data, { ttl: TTL, tags: TAGS });
}

export async function clearLanguagesCache(): Promise<void> {
    await adapter.del(KEY);
}

// 若之後要清除整個類別：adapter.delByTag('languages')