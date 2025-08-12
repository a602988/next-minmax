// TypeScript
// features/locales/application/locales.repository.ts
import { localesService } from '@/services/locales.service';
import { getLocalesCache, setLocalesCache } from '../lib/locales.cache';
import type { Locale } from '@/types/';
export class LocalesRepository {
    async getLocales(): Promise<Locale> {
        const cached = await getLocalesCache();
        if (cached) return cached;
        const data = await localesService.getLocales();
        await setLocalesCache(data);
        return data;
    }

    async getLocaleByCountry(country: string): Promise<string | null> {
        const mapping = await this.getLocales();
        return mapping[country] ?? null;
    }
}

export const localesRepository = new LocalesRepository();