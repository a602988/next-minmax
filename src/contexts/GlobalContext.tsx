'use client';

import React, { createContext, useContext, ReactNode } from 'react';

export interface GlobalContextType {
  locale: string;
  siteName: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children, locale, siteName }: { children: ReactNode; locale: string; siteName: string }) {
  return (
    <GlobalContext.Provider value={{ locale, siteName }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}

// 新增並導出這個函數
export function getGlobalContext(): GlobalContextType {
  return {
    locale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
    siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'Your Site Name',
  };
}
