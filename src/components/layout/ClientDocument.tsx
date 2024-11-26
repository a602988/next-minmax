'use client';
import { ReactNode } from 'react';
import styles from '@/components/navToggle/NavToggle.module.css';
import { useNav } from '@/context/NavContext';

type Props = {
  bodyClassName?: string;
  children: ReactNode;
};

export default function ClientDocument({ bodyClassName = '', children }: Props) {
  const { isNavOpen } = useNav();

  const bodyClass = [
    bodyClassName,
    isNavOpen ? 'nav-open' : '',
    isNavOpen ? styles.isOpen : ''
  ].filter(Boolean).join(' ');

  return (
    <body className={bodyClass}>
      {children}
    </body>
  );
}
