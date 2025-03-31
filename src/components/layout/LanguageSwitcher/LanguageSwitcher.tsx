/**
 * @component LanguageSwitcher
 * 語言切換組件，支持下拉和按鈕兩種顯示變體。
 *
 * 1. 支持語言選項的動態加載和本地化。
 * 2. 提供鍵盤導航和無障礙支持。
 * 3. 支持顯示國旗圖標。
 * 4. 提供加載和錯誤狀態的反饋。
 * 5. 提供下拉式介面與清單介面。
 */

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { useTransition, useCallback, useMemo } from 'react';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import API_ENDPOINTS from '@/services/api/clients/minmax/apiConfig';
import { LanguageSwitcherDropdown, LanguageSwitcherButtons } from './variants';
import LoadingState from '@/components/feedback/LoadingState';
import ErrorState from '@/components/feedback/ErrorState';
import { useLanguageOptions } from '@/hooks/useLanguageOptions';

export interface LanguageOption {
  id: string;        // 語言代碼，如 'zh-TW'
  title: string;     // 顯示名稱，如 '中文(繁體)'
  native: string;    // 本地名稱縮寫，如 'TW'
  default: boolean;  // 是否為預設語言
  current: boolean;  // 是否為當前語言
}

export interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons';
  className?: string;
  apiUrl?: keyof typeof API_ENDPOINTS;
}

export default function LanguageSwitcher({
  variant = 'dropdown',
  className = '',
  apiUrl = 'LANGUAGES',
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const { languageOptions, isLoading, error } = useLanguageOptions(apiUrl, locale);

  // 計算不含語言前綴的路徑
  const pathnameWithoutLocale = useMemo(() => {
    const regex = new RegExp(`^/(${routing.locales.join('|')})`);
    return pathname.replace(regex, '') || '/';
  }, [pathname]);

  // 取得當前語言
  const currentLanguage = useMemo(() => {
    return (
      languageOptions.find(option => option.current) ||
      languageOptions.find(option => option.default) ||
      (languageOptions.length > 0 ? languageOptions[0] : null)
    );
  }, [languageOptions]);

  // 處理語言切換
  const handleLanguageChange = useCallback(
    (newLocale: string) => {
      if (newLocale === locale) return;
      startTransition(() => {
        // 實際的導航由 Link 組件處理，此處僅作標記
        console.log(`切換語言: ${locale} -> ${newLocale}, 路徑: ${pathnameWithoutLocale}`);
      });
    },
    [locale, pathnameWithoutLocale, startTransition]
  );



  // 載入中狀態
  if (isLoading) {
    return <LoadingState className={className} />;
  }

  // 錯誤狀態（僅在無法取得任何選項時顯示）
  if (error && languageOptions.length === 0) {
    return <ErrorState className={className} />;
  }

  if (languageOptions.length === 0 || !currentLanguage) {
    return null;
  }

  // 根據變體選擇渲染哪個組件
  const commonProps = {
    languageOptions,
    pathnameWithoutLocale,
    isPending,
    handleLanguageChange,
    className
  };

  return variant === 'dropdown' ? (
    <LanguageSwitcherDropdown
      {...commonProps}
      currentLanguage={currentLanguage}
    />
  ) : (
    <LanguageSwitcherButtons {...commonProps} />
  );
}
