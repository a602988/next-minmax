'use client';

import Image from 'next/image';
import Link from 'next/link';
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

  // 從 data 中解構出 logoSrc 和 site_title
  const { logoSrc, site_title } = data;
  const [imageError, setImageError] = useState(false);

  // 如果沒有 logoSrc，則返回默認 Logo
  if (!logoSrc || imageError) {
    return <LogoDefault />;
  }

  // 設置網站標題，優先使用 site_title，然後是環境變量，最後是默認值 'MINMAX'
  const siteTitle = site_title || process.env.NEXT_PUBLIC_DEFAULT_SITE_TITLE || 'MINMAX';

  // 準備無障礙文本
  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${siteTitle} ` + t('home');

  // 準備標誌內容
  const logoContent = (
    <div className="relative w-[200px] h-[50px]">
      <Image
        alt="logo"
        fill
        onError={() => setImageError(true)}  // 如果圖片加載失敗，顯示默認 Logo
        priority  // 優先加載此圖片
        sizes="(max-width: 768px) 20w, 25w"
        src={logoSrc}
        style={{ objectFit: 'contain' }}  // 確保圖片適應容器大小
      />
    </div>
  );

  // 根據 link 參數決定是否將 logo 包裝在 Link 組件中
  if (link) {
    return (
      <Link
        aria-label={ariaLabel}
        className={`${styles.logo} ${className}`}
        href="/"
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
