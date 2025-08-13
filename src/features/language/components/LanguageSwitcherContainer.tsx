'use client';

import React from 'react';
import { useLanguageSwitcher } from '../hooks';
import LanguageSwitcher from './LanguageSwitcher';
import type { Language } from '@/types';

/**
 * 語言切換器容器組件
 *
 * 自動處理資料載入和狀態管理的語言切換器包裝組件
 */
type LanguageSwitcherContainerProps = {
    /** 自定義 CSS 類名 */
    className?: string;
    /** 是否顯示語言標籤文字，預設為 true */
    showLabels?: boolean;
    /** 顯示變體：下拉選單或內聯列表，預設為 'inline' */
    variant?: 'dropdown' | 'inline';
    /** 載入中的顯示內容 */
    loadingComponent?: React.ReactNode;
    /** 錯誤時的顯示內容 */
    errorComponent?: React.ReactNode;
    /** 可選的語言資料，如果提供則不會重新載入 */
    languages?: Language[];
};

export default function LanguageSwitcherContainer({
                                                      className,
                                                      showLabels = true,
                                                      variant = 'inline',
                                                      loadingComponent,
                                                      errorComponent,
                                                      languages: providedLanguages,
                                                  }: LanguageSwitcherContainerProps) {
    const {
        pathname,
        currentLocale,
        searchParams,
        languages: hookLanguages,
        isLoading,
        error,
    } = useLanguageSwitcher();

    // 如果有提供語言資料，就使用提供的，否則使用 hook 載入的
    const languages = providedLanguages || hookLanguages;
    const shouldShowLoading = !providedLanguages && isLoading;
    const shouldShowError = !providedLanguages && error;

    // 載入中狀態
    if (shouldShowLoading) {
        return loadingComponent || (
            <div className={className}>
                <span className="text-gray-500 text-sm">載入語言選項...</span>
            </div>
        );
    }

    // 錯誤狀態
    if (shouldShowError) {
        return errorComponent || (
            <div className={className}>
                <span className="text-red-500 text-sm">⚠️ {error}</span>
            </div>
        );
    }

    // 正常渲染
    return (
        <LanguageSwitcher
            className={className}
            languages={languages}
            currentLocale={currentLocale}
            pathname={pathname}
            searchParams={searchParams}
            showLabels={showLabels}
            variant={variant}
        />
    );
}