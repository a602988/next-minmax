// src/features/language/application/use-cases/getLanguagesForSSR.ts
import { languageRepository } from '@/features/language/services/language.repository';
import type { Language } from '@/types';

export async function getLanguagesForSSR(): Promise<Language[]> {
    return languageRepository.getLanguages();
}