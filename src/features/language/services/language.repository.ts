// src/features/language/application/language.repository.ts
import { languageService } from '@/services/language.service';
import { getLanguagesCache, setLanguagesCache } from '@/features/language/lib/language.cache';
import type { Language } from '@/types';

export class LanguageRepository {
    async getLanguages(): Promise<Language[]> {
        const cached = await getLanguagesCache();
        if (cached) return cached;

        const data = await languageService.getLanguages();
        await setLanguagesCache(data);
        return data;
    }

    async refreshLanguages(): Promise<Language[]> {
        const data = await languageService.getLanguages();
        await setLanguagesCache(data);
        return data;
    }
}

export const languageRepository = new LanguageRepository();