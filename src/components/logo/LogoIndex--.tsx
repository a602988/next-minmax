'use client';
import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import LogoDefault from '@/components/logo/variants/LogoDefault';
import { useLogoData } from '@/hooks/useLogoData';
import styles from './LogoIndex.module.css';
import myPic from '../../../public/images/common/logo.png';
// 定義型態
interface LogoIndexProps {
  className?: string;
  defaultLogo?: string;
  height?: number;
  link?: boolean;
  width?: number;
}

export default function LogoIndex({
    className = '',
    defaultLogo = '',
    height = 51,
    link = true,
    width = 234
  }: LogoIndexProps) {

  const { isLoading, logoSrc, webData } = useLogoData(defaultLogo);
  const params = useParams();
  const t = useTranslations('common');
  const [imageError, setImageError] = useState(false);

  // 若logo圖片來源為空或加載失敗，使用自定義預設 logo
  if (logoSrc === '' || imageError) {
    return <LogoDefault />;
  }

  // title 與 aria-label 多語系文字
  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${webData?.site_title || "logo"} ` + t('home');

  // 判斷預設語系等於 /
  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  // 依據圖片檔名顯示不同結構 svg 、img
  const logoContent = isLoading ? null : (
    <Image
      alt={webData?.site_title || "logo"}
      height={height}
      onError={() => setImageError(true)}
      priority // 網站 logo 或是首屏圖片，優先下載
      src={logoSrc || '/images/common/logo.png'}
      width={width}

    />
  );

  // logo有連結時
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

  // 沒有連結時
  return (
    <div className={`${styles.logo} ${className}`}>
      {logoContent}
    </div>
  );
}
