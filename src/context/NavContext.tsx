'use client';

import React, { ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface NavContextType {
  toggleNav(): void;
  isNavOpen: boolean;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function NavProvider({ children }: { children: ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function toggleNav() {
    setIsNavOpen(prev => !prev);
  }

  const value = isClient ? { isNavOpen, toggleNav } : { isNavOpen: false, toggleNav: () => {} };

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error('useNav must be used within a NavProvider');
  }
  return context;
}