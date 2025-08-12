import { getCacheAdapter } from '@/lib/cache';
import { CACHE_CONFIG } from '@/config';
import type { Locale } from '@/types/';

const adapter = getCacheAdapter();
const KEY = CACHE_CONFIG.generateKey('LOCALES', 'country-map');
const TTL = CACHE_CONFIG.TTL.LOCALES;
const TAGS = CACHE_CONFIG.TAGS.LOCALES;

export async function getLocalesCache(): Promise<Locale | null> {
    return adapter.get<Locale>(KEY);
}

export async function setLocalesCache(data: Locale): Promise<void> {
    await adapter.set(KEY, data, { ttl: TTL, tags: TAGS });
}