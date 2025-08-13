'use client';

import React from 'react';
import type { Language } from '@/types';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { prepareLanguageSwitcherHref } from '@/lib/locale-utils';
import type { ReadonlyURLSearchParams } from 'next/navigation';

type LanguageSwitcherProps = {
    /** 自定義 CSS 類名，便於外部控制排版與間距 */
    className?: string;
    /** 可用語言清單（來源應與系統支援語系一致） */
    languages: Language[];
    /** 目前頁面的語系 ID（例如：'zh-TW'、'en'） */
    currentLocale: string;
    /** 目前路徑（不含網域），建議為「不含 locale 前綴」的語系無關路徑 */
    pathname: string;
    /** 目前 URL 的查詢參數集合（唯讀），切換語系時保留 */
    searchParams: ReadonlyURLSearchParams | null;
    /** 是否顯示語言標籤（預設顯示），可用於僅顯示國旗或圖示的場合 */
    showLabels?: boolean;
    /** 是否顯示語言圖示（預設顯示） */
    showIcons?: boolean;
    /** 顯示樣式：下拉選單或內聯列表（預設為內聯列表） */
    variant?: 'dropdown' | 'inline';
    /** 是否顯示預設語言標記（預設隱藏） */
    showDefaultBadge?: boolean;
};

/**
 * 語言切換器 LanguageSwitcher
 *
 * 設計重點：
 * - 無障礙：使用 aria-* 提供更清楚的語意；目前語言不提供連結避免誤點
 * - SEO：切換連結帶上 lang/hrefLang，頁面 head 的 hreflang 請另由 metadata 產生
 * - 路徑保留：切換語系時保留當前 pathname 與 searchParams
 * - 擴充性：提供 dropdown/inline 兩種模式；dropdown 尚可擴充鍵盤導覽與彈出選單
 */
export default function LanguageSwitcher({
         className,
         languages,
         currentLocale,
         pathname,
         searchParams,
         showLabels = true,
         showIcons = false,
         variant = 'inline',
         showDefaultBadge = false
     }: LanguageSwitcherProps) {
    // 基礎資料檢查：若語系列表為空
    if (!languages || languages.length === 0) {
        // 開發環境下提示，協助定位資料注入問題
        if (process.env.NODE_ENV === 'development') {
            return (
                <div className={className}>
                    <span className="text-red-500 text-sm">⚠️ 無語系資料</span>
                </div>
            );
        }
        // 生產環境直接不渲染，避免影響版面
        return null;
    }

    // 取得目前語系對應的語言物件（用於顯示圖示或標籤）
    const currentLanguage = languages.find((lang) => lang.id === currentLocale);

    return (
        // nav 容器：指定 aria-label，協助讀屏器辨識此導覽區塊用途
        <nav className={className} aria-label="Language switcher">
            {variant === 'dropdown' ? (
                // 下拉模式：目前僅示範按鈕，尚未加入彈出選單與鍵盤操作
                <div className="relative">
                    <button
                        className="inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200"
                        // 尚未開啟，下拉內容會對應 aria-expanded 與 aria-controls
                        aria-expanded="false"
                        // 表示將會打開 menu 類型的彈出內容
                        aria-haspopup="menu"
                        // 讀屏器描述目前語言
                        aria-label={`Current language: ${currentLanguage?.native || currentLanguage?.title}`}
                    >
                        {/* 語言圖示（若有且開啟顯示） */}
                        {showIcons && currentLanguage?.icon && (
                            <span aria-hidden="true" className={`${currentLanguage.icon} inline-block h-4 w-4`} />
                        )}
                        {/* 顯示語言名稱（優先原生名稱，否則使用英文名稱） */}
                        {showLabels && <span>{currentLanguage?.native || currentLanguage?.title}</span>}

                        {/* 下拉箭頭圖示（裝飾性，對讀屏器隱藏） */}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {/* TODO：在此加入彈出式選單內容（role="menu"、menuitem、鍵盤導覽、焦點管理等） */}
                </div>
            ) : (
                // 內聯模式：直接列出所有可切換的語言
                <ul className="flex flex-wrap items-center gap-2">
                    {languages.map((lang) => {
                        // 顯示標籤：優先顯示原生語言名稱
                        const label = lang.native || lang.title;
                        // 產生「語系無關」的 href，以便由 Link 的 locale 屬性插入目標語系
                        const href = prepareLanguageSwitcherHref(pathname, searchParams);
                        // 是否為當前語言
                        const active = currentLocale === lang.id;

                        return (
                            <li key={lang.id}>
                                {active ? (
                                    // 當前語言：不渲染為連結，避免重整同頁與誤點
                                    <span
                                        className="inline-flex items-center gap-2 rounded px-3 py-1 text-sm bg-blue-600 text-white cursor-default"
                                        // 指示目前所處頁面語言
                                        aria-current="page"
                                        aria-label={`Current language: ${label}`}
                                    >
                                        {/* 語言圖示（裝飾性，可控制顯示） */}
                                        {showIcons && lang.icon && <span aria-hidden="true" className={`${lang.icon} inline-block h-4 w-4`} />}
                                        {/* 語言標籤（可關閉） */}
                                        {showLabels && <span>{label}</span>}
                                        {/* 預設語言的輔助標記（若為系統預設語言且開啟顯示） */}
                                        {showDefaultBadge && lang.default && (
                                            <span
                                                className="ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]"
                                                aria-label="Default language"
                                            >
                                                default
                                            </span>
                                        )}
                                        {/* 給讀屏器的額外提示（視覺隱藏） */}
                                        <span className="sr-only">(current)</span>
                                    </span>
                                ) : (
                                    // 其他語言：渲染為可點擊的 Link，交由 Link 的 locale 屬性切換語系
                                    <Link
                                        href={href}
                                        // 透過 locale 指定目標語系；型別上收斂為 routing.locales 的成員
                                        locale={lang.id as (typeof routing.locales)[number]}
                                        className="inline-flex items-center gap-2 rounded px-3 py-1 text-sm transition-colors bg-gray-100 text-gray-800 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        // 讀屏器說明：切換到某語言（若有原生名稱則一併說明）
                                        aria-label={`Switch to ${lang.title}${lang.native ? ` (${lang.native})` : ''}`}
                                        // 滑鼠提示：與 aria-label 保持一致
                                        title={`${lang.title}${lang.native ? ` (${lang.native})` : ''}`}
                                        // SEO 輔助：標示此連結目標的語言（可留可不留，hreflang 正式應放在 head alternates）
                                        hrefLang={lang.id}
                                        // HTML 語言屬性，輔助正確渲染語言特性
                                        lang={lang.id}
                                    >
                                        {/* 語言圖示（可控制顯示） */}
                                        {showIcons && lang.icon && <span aria-hidden="true" className={`${lang.icon} inline-block h-4 w-4`} />}
                                        {/* 語言標籤 */}
                                        {showLabels && <span>{label}</span>}
                                        {/* 預設語言標記（展示用，實際決策以系統設定為準，預設隱藏） */}
                                        {showDefaultBadge && lang.default && (
                                            <span
                                                className="ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]"
                                                aria-label="Default language"
                                            >
                                                default
                                            </span>
                                        )}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}