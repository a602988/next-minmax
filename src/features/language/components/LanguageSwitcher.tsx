'use client';

import React from 'react';
import type { Language } from '@/types';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { prepareLanguageSwitcherHref } from '@/lib/locale-utils';
import type { ReadonlyURLSearchParams } from 'next/navigation';

/**
 * 語言切換器組件的屬性類型定義
 */
type LanguageSwitcherProps = {
    /** 自定義 CSS 類名 */
    className?: string;
    /** 可用語言列表 */
    languages: Language[];
    /** 當前語系 ID */
    currentLocale: string;
    /** 當前路徑 */
    pathname: string;
    /** URL 查詢參數 */
    searchParams: ReadonlyURLSearchParams | null;
    /** 是否顯示語言標籤文字，預設為 true */
    showLabels?: boolean;
    /** 顯示變體：下拉選單或內聯列表，預設為 'inline' */
    variant?: 'dropdown' | 'inline';
};

/**
 * 語言切換器組件
 *
 * 提供多語言網站的語言切換功能，支援兩種顯示模式：
 * 1. inline: 內聯顯示所有語言選項
 * 2. dropdown: 下拉選單顯示（目前僅顯示按鈕，下拉功能待實作）
 *
 * 特色功能：
 * - 無障礙支援 (ARIA 標籤、鍵盤導航)
 * - SEO 友善 (hrefLang 屬性)
 * - 響應式設計
 * - 當前語言高亮顯示
 * - 預設語言標記
 *
 * @param props - 組件屬性
 * @returns 語言切換器 JSX 元素
 */
export default function LanguageSwitcher({
                                             className,
                                             languages,
                                             currentLocale,
                                             pathname,
                                             searchParams,
                                             showLabels = true,
                                             variant = 'inline'
                                         }: LanguageSwitcherProps) {
    // 錯誤處理：若無語系列表，顯示錯誤訊息或不渲染
    if (!languages || languages.length === 0) {
        // 開發環境下顯示警告訊息
        if (process.env.NODE_ENV === 'development') {
            return (
                <div className={className}>
                    <span className="text-red-500 text-sm">⚠️ 無語系資料</span>
                </div>
            );
        }
        // 生產環境下不渲染任何內容
        return null;
    }

    // 找到當前語言的詳細資訊
    const currentLanguage = languages.find(lang => lang.id === currentLocale);

    return (
        <nav
            className={className}
            aria-label="Language switcher"
            role="navigation"
        >
            {variant === 'dropdown' ? (
                // 下拉選單版本（目前僅顯示當前語言按鈕）
                <div className="relative">
                    <button
                        className="inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-label={`Current language: ${currentLanguage?.native || currentLanguage?.title}. Click to change language`}
                    >
                        {/* 語言圖示 */}
                        {currentLanguage?.icon && (
                            <span
                                aria-hidden="true"
                                className={`${currentLanguage.icon} inline-block h-4 w-4`}
                            />
                        )}
                        {/* 語言標籤 */}
                        {showLabels && (
                            <span>{currentLanguage?.native || currentLanguage?.title}</span>
                        )}
                        {/* 下拉箭頭圖示 */}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {/* TODO: 實作下拉選單內容 */}
                </div>
            ) : (
                // 內聯版本：顯示所有語言選項
                <ul
                    className="flex flex-wrap items-center gap-2"
                    role="list"
                >
                    {languages.map((lang) => {
                        // 優先顯示原生語言名稱，否則顯示英文名稱
                        const label = lang.native || lang.title;
                        // 生成語言切換連結，保持當前路徑和查詢參數
                        const href = prepareLanguageSwitcherHref(pathname, searchParams);
                        // 判斷是否為當前語言
                        const active = currentLocale === lang.id;

                        return (
                            <li key={lang.id} role="listitem">
                                <Link
                                    href={href}
                                    locale={lang.id as (typeof routing.locales)[number]}
                                    className={
                                        'inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors ' +
                                        (active
                                                ? 'bg-blue-600 text-white' // 當前語言樣式
                                                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' // 非當前語言樣式
                                        )
                                    }
                                    // 無障礙屬性：標示當前頁面
                                    aria-current={active ? 'page' : undefined}
                                    // 無障礙屬性：螢幕閱讀器標籤
                                    aria-label={`Switch to ${lang.title}${lang.native ? ` (${lang.native})` : ''}`}
                                    // 滑鼠懸停提示
                                    title={`${lang.title}${lang.native ? ` (${lang.native})` : ''}`}
                                    // SEO 屬性：指定連結的語言
                                    hrefLang={lang.id}
                                    // HTML 語言屬性
                                    lang={lang.id}
                                >
                                    {/* 語言圖示 */}
                                    {lang.icon && (
                                        <span
                                            aria-hidden="true"
                                            className={`${lang.icon} inline-block h-4 w-4`}
                                        />
                                    )}

                                    {/* 語言標籤文字 */}
                                    {showLabels && <span>{label}</span>}

                                    {/* 預設語言標記 */}
                                    {lang.default && (
                                        <span
                                            className="ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]"
                                            aria-label="Default language"
                                        >
                                            default
                                        </span>
                                    )}

                                    {/* 視覺上隱藏但對螢幕閱讀器可見的文字 */}
                                    <span className="sr-only">
                                        {active ? '(current)' : `Switch to ${lang.title}`}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}