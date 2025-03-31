'use client';

import React from 'react'; // 添加 React 導入
import { Link } from '@/i18n/routing';
import styles from './LanguageSwitcherDropdown.module.css';
import { LanguageOption } from '../LanguageSwitcher';

interface LanguageSwitcherButtonsProps {
  languageOptions: LanguageOption[];
  pathnameWithoutLocale: string;
  isPending: boolean;
  handleLanguageChange: (newLocale: string) => void;
  className?: string;
}

export default function LanguageSwitcherButtons({
  languageOptions,
  pathnameWithoutLocale,
  isPending,
  handleLanguageChange,
  className = '',
}: LanguageSwitcherButtonsProps) {
  return (
    <div className={`${styles.buttonsContainer} ${className}`} role="group" aria-label="語言選擇">
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
          title={`切換至${option.title}`}
        >
          <span>{option.title}</span>
        </Link>
      ))}
    </div>
  );
}
