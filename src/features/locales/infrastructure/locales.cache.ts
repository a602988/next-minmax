// TypeScript
// features/locales/infrastructure/locales.cache.ts
import { getCacheAdapter } from '@/lib/cache';
import { CACHE_CONFIG } from '@/config';
import type { CountryLocaleMapping } from './locales.types';

const adapter = getCacheAdapter();
const KEY = CACHE_CONFIG.generateKey('LOCALES', 'country-map');
const TTL = CACHE_CONFIG.TTL.LOCALES;
const TAGS = CACHE_CONFIG.TAGS.LOCALES;

export async function getLocalesCache(): Promise<CountryLocaleMapping | null> {
    return adapter.get<CountryLocaleMapping>(KEY);
}

export async function setLocalesCache(data: CountryLocaleMapping): Promise<void> {
    await adapter.set(KEY, data, { ttl: TTL, tags: TAGS });
}