"use client";

import React, { createContext, useContext, useState } from 'react';

interface HeaderContextType {
  showLogo: boolean;
  showLanguageSwitcher: boolean;
  setShowLogo: (show: boolean) => void;
  setShowLanguageSwitcher: (show: boolean) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [showLogo, setShowLogo] = useState(true);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);

  return (
    <HeaderContext.Provider value={{
      showLogo,
      showLanguageSwitcher,
      setShowLogo,
      setShowLanguageSwitcher,
    }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderContext() {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error('useHeaderContext must be used within a HeaderProvider');
  }
  return context;
}
