// src/features/language/presentation/LanguageProvider.tsx
'use client';

import React, { createContext, useContext } from 'react';
import type { Language } from '@/types';

type LanguageContextValue = {
    languages: Language[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider(props: { languages: Language[]; children: React.ReactNode }) {
    return (
        <LanguageContext.Provider value={{ languages: props.languages }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

export function useLanguageContext(): LanguageContextValue {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguageContext must be used within LanguageProvider');
    }
    return ctx;
}