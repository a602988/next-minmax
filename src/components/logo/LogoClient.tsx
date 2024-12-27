'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import LogoDefault from '@/components/logo/variants/LogoDefault';
import styles from './LogoIndex.module.css';

// 定義組件的 Props 接口
interface Props {
  className?: string;
  data: {
    site_title?: string;
    logoSrc?: string;
  };
  link?: boolean;
}

function LogoClient({ className = '', data, link = true }: Props) {
  // 使用 next-intl 的翻譯功能
  const t = useTranslations('common');
  const params = useParams();
  // 從 data 中解構出 logoSrc 和 site_title
  const { logoSrc, site_title } = data;
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let logoContent : React.ReactNode;
  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }
  // 驗證 logoSrc 是否為有效的 URL 或以 '/' 開頭的相對路徑
  function isValidLogoSrc(src: string): boolean {
    return src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://');
  }

  // 如果沒有 logoSrc，或 logoSrc 無效，或發生圖片錯誤，則使用默認 Logo
  if (!logoSrc || !isValidLogoSrc(logoSrc) || imageError) {
    if (imageError) {
      console.error('Error loading logo');
    } else if (!logoSrc) {
      console.warn('Logo source is missing');
    } else if (!isValidLogoSrc(logoSrc)) {
      console.warn('Invalid logo source URL');
    }
    logoContent = (
      <LogoDefault />
    );
  }else{
    logoContent = (
      <Image
        alt="logo"
        fill
        onError={() => setImageError(true)}
        onLoad={() => setIsLoading(false)}
        priority
        sizes="(max-width: 768px) 20w, 25w"
        src={logoSrc}
        style={{ objectFit: 'contain', display: isLoading ? 'none' : 'block' }}
      />
    );
  }
  // 設置網站標題，優先使用 site_title，然後是環境變量，最後是默認值 'MINMAX'
  const siteTitle = site_title || process.env.NEXT_PUBLIC_DEFAULT_SITE_TITLE || 'MINMAX';

  // 準備無障礙文本
  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${siteTitle} ` + t('home');


  // 根據 link 參數決定是否將 logo 包裝在 Link 組件中
  if (link) {
    return (
      <Link
        aria-label={ariaLabel}
        className={`${styles.logo} ${className}`}
        href={getHomeHref()}
        title={titleText}
      >
        {logoContent}
      </Link>
    );
  }

  // 如果 link 為 false，則直接返回 logo 內容
  return (
    <div className={`${styles.logo} ${className}`}>
      {logoContent}
    </div>
  );
}

export default LogoClient;
