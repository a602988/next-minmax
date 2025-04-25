import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathnameWithoutLocale } from '@/hooks/usePathnameWithoutLocale';
import { useWebData } from '@/services/minmax/hooks/useWebData';
import { useLocale } from 'next-intl';
import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  isLink?: boolean;
}

export default function Logo({
  className = 'logo',
  width = 150,
  height = 50,
  isLink = true
}: LogoProps) {
  const locale = useLocale();
  const t = useTranslations('components.Logo');
  const pathnameWithoutLocale = usePathnameWithoutLocale();
  const { webData, isLoading, error } = useWebData(locale);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !webData) {
    console.error('Error loading web data:', error);
    return <div>Error loading logo</div>;
  }

  const siteName = webData.company_nickname || webData.company_name;
  const imagePath = webData.system_logo && webData.system_logo.length > 0
    ? webData.system_logo[0]
    : '/images/logo.webp'; // 使用默認 logo 如果 API 沒有提供

  const logoContent = (
    <>
      <Image
        src={imagePath}
        alt={t('imageAlt', { siteName }) ?? siteName}
        width={width}
        height={height}
        priority
      />
      <span className="sr-only">{siteName}</span>
    </>
  );

  if (isLink) {
    return (
      <Link
        href={webData.system_url || `/${pathnameWithoutLocale}`}
        className={`inline-block ${className}`}
        aria-label={t('ariaLabel', { siteName }) ?? siteName}
        title={t('title', { siteName }) ?? siteName}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div
      className={`inline-block ${className}`}
      aria-label={t('ariaLabel', { siteName }) ?? siteName}
      title={t('title', { siteName }) ?? siteName}
    >
      {logoContent}
    </div>
  );
}
