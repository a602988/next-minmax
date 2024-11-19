'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SVGEmbedder from '@/components/img/SVGEmbedder';
import { getWebData } from '@/services/getWebData';
import { WebDataType } from '@/types/WebDataType';
import styles from './LogoIndex.module.css';

interface LogoData {
  path: string;
  content?: string;
}

interface LogoIndexProps {
  className?: string;
  defaultLogo?: string;
  height?: number;
  linkToHome?: boolean;
  width?: number;
}

export default function LogoIndex({
  className = '',
  defaultLogo = '/static/images/common/logo.png',
  height = 100,
  linkToHome = true,
  width = 100
}: LogoIndexProps) {
  const [webData, setWebData] = useState<WebDataType | null>(null);
  const [logoSrc, setLogoSrc] = useState(defaultLogo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      getWebData().then((data) => {
        setWebData(data);
        if (data.system_logo) {
          const logoData: LogoData | null = JSON.parse(data.system_logo)[0];
          setLogoSrc(logoData?.path || defaultLogo);
        }
        setIsLoading(false);
      });
    }
    fetchData();
  }, [defaultLogo]);

  const isSvg = logoSrc.toLowerCase().endsWith('.svg');

  let logoElement: React.ReactNode;

  if (isLoading) {
    logoElement = (
      <div
        className={`${styles['logo-placeholder']} ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  } else if (isSvg) {
    logoElement = (
      <SVGEmbedder
        alt={webData?.site_title || "Logo"}
        className={`${styles['logo-svg']} ${className}`}
        src={logoSrc}
      />
    );
  } else {
    logoElement = (
      <Image
        alt={webData?.site_title || "Logo"}
        className={className}
        height={height}
        priority
        src={logoSrc}
        width={width}
      />
    );
  }

  const wrappedLogo = (
    <div className={styles['logo-svg']} style={{ width: `${width}px`, height: `${height}px` }}>
      {logoElement}
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        aria-label={webData?.site_title ? `Return to ${webData.site_title} home` : "Return to home"}
        href="/"
      >
        {wrappedLogo}
      </Link>
    );
  }

  return wrappedLogo;
}
