/**
 * LogoClient Component 專注於渲染和用戶交互
 *
 * loading：   採用樣式display處理
 * 多語系：     多語系加入結構 (SEO 與 無障礙)
 * 預設LOGO：   判斷圖片來源異常顯示錯誤，空值/異常都使用預設LOGO
 * 多語系連結：  首頁/處理
 * 連結：       是否Link
 * 資料：       格式與資料帶入
 *
 * @example
 * <LogoClient data={{ site_title: 'My Site', logoSrc: '/path/to/logo.png' }} />
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import LogoDefault from '@/components/logo/variants/LogoDefault';


// 定義 Props 介面
interface Props {
  className?: string;  // 可選的 CSS 類名
  data: {
    site_title?: string;  // 可選的網站標題
    logoSrc?: string;     // 可選的 logo 圖片來源
  };
  link?: boolean;  // 是否將 logo 包裝在連結中
}

function LogoClient({ className = '', data, link = true }: Props) {
  // 使用 next-intl 的翻譯功能
  const t = useTranslations('common');
  // 獲取當前路由參數
  const params = useParams();
  // 從 data 中解構出 logoSrc 和 site_title
  const { logoSrc, site_title } = data;
  // 用於追蹤圖片載入錯誤的狀態
  const [imageError, setImageError] = useState(false);
  // 用於追蹤圖片是否正在載入的狀態
  const [isLoading, setIsLoading] = useState(true);

  // 設定網站標題，如果沒有提供則使用環境變數或預設值
  const siteTitle = site_title || process.env.NEXT_PUBLIC_DEFAULT_SITE_TITLE || 'MINMAX';
  // 設定無障礙閱讀標籤
  const ariaLabel = t('returnTo') + t('home');
  // 設定標題文字
  const titleText = `${t('returnTo')} ${siteTitle} ${t('home')}`;

  // 獲取首頁連結
  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  // 檢查 logo 圖片來源是否有效
  function isValidLogoSrc(src?: string): src is string {
    return !!src && (src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://'));
  }

  // 處理圖片載入錯誤
  function handleImageError() {
    setImageError(true);
    console.error('Error loading logo');
  }

  // 根據條件決定顯示的 logo 內容
  const logoContent = !isValidLogoSrc(logoSrc) || imageError ? (
    <LogoDefault aria-hidden="true" />
  ) : (
    <Image
      alt={`${siteTitle} logo`}
      className="object-contain	max-w-full"
      fill
      onError={handleImageError}
      onLoad={() => setIsLoading(false)}
      priority
      sizes="(max-width: 768px) 20vw, 25vw"
      src={logoSrc}
      style={{ display: isLoading ? 'none' : 'block' }}
    />
  );

  // 如果不需要連結，則直接返回 logo 包裝
  const logoWrapper = (
    <div className={`relative ${className}`}>
      {logoContent}
    </div>
  );

  // 根據 link 參數決定是否將 logo 包裝在連結中
  return link ? (
    <Link
      aria-label={ariaLabel}
      className={`relative ${className}`}
      href={getHomeHref()}
      rel="home"
      title={titleText}
    >
      {logoContent}
    </Link>
  ) : logoWrapper;
}

export default LogoClient;
