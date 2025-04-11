'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import styles from './LanguageSwitcherButtons.module.css';
import { LanguageOption } from '@/services/minmax/types/language';

interface LanguageSwitcherButtonsProps {
  languageOptions: LanguageOption[];
  pathnameWithoutLocale: string;
  isPending: boolean;
  handleLanguageChange: (newLocale: string) => void;
  className?: string;
  translations: {
    select: string;
    switch: string;
  };
}

export default function LanguageSwitcherButtons({
  languageOptions,
  pathnameWithoutLocale,
  isPending,
  handleLanguageChange,
  className = '',
  translations,
}: LanguageSwitcherButtonsProps) {
  return (
    <div className={`${styles.buttonsContainer} ${className}`} role="group" aria-label={translations.select}>
      {languageOptions.map(option => (
        <Link
          key={option.id}
          href={pathnameWithoutLocale}
          locale={option.id}
          onClick={() => handleLanguageChange(option.id)}
          className={`${styles.variantButton} ${
            option.current ? styles.variantButtonActive : styles.variantButtonInactive
          } ${isPending ? styles.pending : ''}`}
          aria-current={option.current ? 'true' : 'false'}
          aria-disabled={option.current ? 'true' : 'false'}
          lang={option.id}
          hrefLang={option.id}
          title={`${translations.switch} ${option.title}`}
        >
          <span>{option.title}</span>
        </Link>
      ))}
    </div>
  );
}
