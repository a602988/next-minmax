'use client';

import React, { createContext, useContext } from 'react';
import { Language } from '@/types';

interface I18nContextValue {
    languages: Language[];
    currentLanguage: Language | null;
}

const I18nContext = createContext<I18nContextValue | null>(null);

interface I18nProviderProps {
    children: React.ReactNode;
    languages: Language[];
    currentLocale: string;
}

export function I18nProvider({ children, languages, currentLocale }: I18nProviderProps) {
    const currentLanguage = languages.find(lang => lang.id === currentLocale) || null;

    const value: I18nContextValue = {
        languages,
        currentLanguage
    };

    return (
        <I18nContext.Provider value={value}>
            {children}
            </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}