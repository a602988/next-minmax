// src/features/language/presentation/hooks/useLanguages.ts
'use client';

import type { Language } from '@/types';
import { useLanguageContext } from '../LanguageProvider';

export function useLanguages(): Language[] {
    return useLanguageContext().languages;
}