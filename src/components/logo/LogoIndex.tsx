'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import ImageWithSVG from '@/components/common/img/ImageWithSVG';
import LogoIndexCustom from '@/components/logo/variants/LogoIndexCustom';
import { useLogoData } from '@/hooks/useLogoData';
import styles from './LogoIndex.module.css';

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

  // 若logo圖片來源為空，使用自定義預設 logo
  if (logoSrc === '') {
    return <LogoIndexCustom />;
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
    <ImageWithSVG
      alt={webData?.site_title || "logo"}
      height={height}
      priority
      src={logoSrc}
      width={width}
    />
  );

  // logo有連結時
  const innerContent = link ? (
    <Link
      aria-label={ariaLabel}
      href={getHomeHref()}
      title={titleText}
    >
      {logoContent}
    </Link>
  ) : logoContent;

  return (
    <div className={`${styles.logo} ${className}`}>
      {innerContent}
    </div>
  );
}
