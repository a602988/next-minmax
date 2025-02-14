'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import dynamic from 'next/dynamic';

type LayoutContextType = {
  layoutType: string;
  setLayoutType: (type: string) => void;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function useLayout() {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
}

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutType, setLayoutType] = useState('default');

  return (
    <LayoutContext.Provider value={{ layoutType, setLayoutType }}>
      {children}
    </LayoutContext.Provider>
  );
}

const DynamicLayoutSelector = dynamic(() => import('./DynamicLayoutSelector'), {
  ssr: false,
});

export function DynamicLayout({ children }: { children: ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // 或者返回一個加載指示器
  }

  return (
    <LayoutProvider>
      <DynamicLayoutSelector>{children}</DynamicLayoutSelector>
    </LayoutProvider>
  );
}