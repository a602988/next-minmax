/**
 * LanguageLink 組件
 * 此組件用於在多語言應用程序中渲染語言切換鏈接。
 * 屬性：
 * - href: 點擊鏈接時要導航到的 URL
 * - locale: 語言的區域代碼（例如 'en'、'zh-TW'）
 * - isCurrent: 布爾值，表示這是否為當前活動語言
 * - showIcon: 可選。是否在語言名稱旁顯示圖標
 * - icon: 可選。要顯示的圖標的 CSS 類
 * - title: 語言的顯示名稱
 * 如果是當前活動語言，組件會為鏈接添加 'current' 類。
 * 只有在 showIcon 為 true 且提供了圖標時，才會顯示圖標。
 * @author [Jean Lin]
 * @created [2025-01-15]
 * @last-modified [2025-01-15]
 */


import React from 'react';
import {Link} from '@/i18n/routing';

interface Props {
    href: string;
    locale: string;
    isCurrent: boolean;
    showIcon?: boolean;
    icon?: string;
    title: string;
}

export default function LanguageLinks(
    {
         href,
         locale,
         isCurrent,
         showIcon = false,
         icon,
         title,
        ...rest
    }: Props) {
    return (
        <Link
            href={href}
            locale={locale}
            className={`${isCurrent ? 'current' : ''}`}
            {...rest}
        >
            {showIcon && icon && (
                <span className={`${icon}`}></span>
            )}
            <span>{title}</span>
        </Link>
    );
}
