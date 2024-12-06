'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import ImageWithSVGSupport from '@/components/common/img/ImageWithSVG';
import LogoIndexCustom from '@/components/logo/variants/LogoIndexCustom';
import { useLogoData } from '@/hooks/useLogoData';
import styles from './LogoIndex.module.css';

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

  if (defaultLogo === '') {
    return <LogoIndexCustom />;
  }

  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${webData?.site_title || "logo"} ` + t('home');

  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  const logoContent = isLoading ? null : (
    <ImageWithSVGSupport
      alt={webData?.site_title || "logo"}
      height={height}
      priority
      src={logoSrc}
      width={width}
    />
  );

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
