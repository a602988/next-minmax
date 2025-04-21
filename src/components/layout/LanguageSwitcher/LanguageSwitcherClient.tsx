// LanguageSwitcherClient.tsx
'use client';

import React, { useCallback, useMemo } from 'react';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';
import { LanguageSwitcherDropdown, LanguageSwitcherButtons } from './variants';
import { LanguageOption } from '@/services/minmax/types/language';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { useLanguageOptions } from '@/services/minmax/hooks/useLanguageOptions';

interface LanguageSwitcherClientProps {
  variant: 'dropdown' | 'buttons';
  className: string;
  translations: {
    select: string;
    'aria-label': string;
    switch: string;
    loading: string;
    error: string;
  };
}

// 當前選中的語言選項，如果沒有明確選中的，則返回默認語言或第一個語言選項
function getCurrentLanguage(languageOptions: LanguageOption[]): LanguageOption {
  return (
    languageOptions.find(option => option.current) ||
    languageOptions.find(option => option.default) ||
    languageOptions[0] ||
    // 添加一個默認的語言選項，確保即使 languageOptions 為空也能返回一個有效值
    { id: 'default', title: 'Default', native: 'Default', default: true, current: true }
  );
}

export default function LanguageSwitcherClient({
  variant,
  className,
  translations,
}: LanguageSwitcherClientProps) {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const pathnameWithoutLocale = usePathnameWithoutLocale();
  const { languageOptions, isLoading, error } = useLanguageOptions(locale);

  // 使用抽取的函數
  const currentLanguage = useMemo(() => getCurrentLanguage(languageOptions), [languageOptions]);

  const handleLanguageChange = useCallback(
    (newLocale: string) => {
      if (newLocale === locale) return;
      startTransition(() => {
        // 實際的導航邏輯
      });
    },
    [locale]
  );

  if (isLoading) {
    return <div>{translations.loading}</div>;
  }

  if (error) {
    return <div>{translations.error}</div>;
  }

  const commonProps = {
    languageOptions,
    pathnameWithoutLocale,
    isPending,
    handleLanguageChange,
    className,
    translations,
  };

  return variant === 'dropdown' ? (
    <LanguageSwitcherDropdown {...commonProps} currentLanguage={currentLanguage} />
  ) : (
    <LanguageSwitcherButtons {...commonProps} />
  );
}
