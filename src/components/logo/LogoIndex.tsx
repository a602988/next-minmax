'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import ImageWithSVGSupport from '@/components/common/img/ImageWithSVG';
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
    defaultLogo = '/static/images/common/logo.png',
    height = 51,
    link = true,
    width = 234
  }: LogoIndexProps) {
  const { isLoading, logoSrc, webData } = useLogoData(defaultLogo);
  const params = useParams();

  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  const logoElement = isLoading ? (
    <div
      className={`${styles['logo-placeholder']} ${className}`}
    />
  ) : (
    <ImageWithSVGSupport
      alt={webData?.site_title || "Logo"}
      className={className}
      height={height}
      priority
      src={logoSrc}
      width={width}
    />
  );

  const wrappedLogo = (
    <div className={styles['logo-svg']}>
      {logoElement}
    </div>
  );

  if (link) {
    return (
      <Link
        aria-label={`Return to ${webData?.site_title || "home"}`}
        href={getHomeHref()}
      >
        {wrappedLogo}
      </Link>
    );
  }

  return wrappedLogo;
}