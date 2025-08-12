import { languageRepository } from '../services';
import type { Language } from '@/types';


export async function getLanguagesForSSR(): Promise<Language[]> {
    return languageRepository.getLanguages();
}