import React from 'react';
import Logo from '@/components/ui/Logo';
import { CommonHeaderProps } from '../HeaderTypes';



export default function BaseHeader({
  customClass = '',
  locale,
  siteName
}: CommonHeaderProps) {
  return (
    <header className={`flex items-center justify-between ${customClass}`}>
      <Logo siteName={siteName} locale={locale} />
    </header>
  );
}
