'use client';
import { ReactNode } from 'react';
import { useNav } from '@/context/NavContext';

type Props = {
  bodyClassName?: string;
  children: ReactNode;
};

export default function ClientDocument({ bodyClassName = '', children }: Props) {
  const { isNavOpen } = useNav();
  // console.log(isNavOpen)

  const bodyClass = `${bodyClassName} ${isNavOpen ? 'nav-open' : ''}`.trim();

  return <body className={bodyClass}>{children}</body>;
}
