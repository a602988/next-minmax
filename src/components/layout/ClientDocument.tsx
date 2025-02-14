'use client';
import { ReactNode, useEffect, useState } from 'react';
import styles from '@/components/navToggle/NavToggle.module.css';
import { useNav } from '@/context/NavContext';

type Props = {
  bodyClassName?: string;
  children: ReactNode;
};

export default function ClientDocument({ bodyClassName = '', children }: Props) {
  const [mounted, setMounted] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const { isNavOpen } = useNav();
      setIsNavOpen(isNavOpen);
    } catch (error) {
      console.warn('NavProvider not found. Navigation functionality may be limited.');
    }
  }, []);

  const bodyClass = mounted
    ? [
        bodyClassName,
        isNavOpen ? 'nav-open' : '',
        isNavOpen ? styles.isOpen : ''
      ].filter(Boolean).join(' ')
    : bodyClassName;

  return (
    <body className={bodyClass}>
      {children}
    </body>
  );
}