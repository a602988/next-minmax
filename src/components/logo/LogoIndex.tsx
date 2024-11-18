import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWebData } from '@/services/getWebData';
import { WebDataType } from '@/types/WebDataType';
import styles from './LogoIndex.module.css';

interface LogoData {
  content: string;
  width: number;
  height: number;
  path: string;
}

interface LogoIndexProps {
  className?: string;
  fallbackLogo?: string;
  linkToHome?: boolean;
}

export default async function LogoIndex({
  className = '',
  fallbackLogo = '/upload/images/common/logo.svg',
  linkToHome = true
}: LogoIndexProps) {
    const webData: WebDataType = await getWebData();
    const logoData: LogoData | null = webData.system_logo ? JSON.parse(webData.system_logo)[0] : null;

    const logoSrc = logoData?.path || fallbackLogo;
    const logoWidth = logoData?.width || 234;
    const logoHeight = logoData?.height || 51;

    const isSVG = logoSrc.toLowerCase().endsWith('.svg');

    const logoImage = isSVG ? (
        <div
            aria-label={webData.site_title || "Company Logo"}
            className={`${styles['logo-svg']} ${className}`}
            style={{ width: logoWidth, height: logoHeight }}
        >
            <object
                aria-label={webData.site_title || "Company Logo"}
                data={logoSrc}
                height={logoHeight}
                type="image/svg+xml"
                width={logoWidth}
            >
                <img
                    alt={webData.site_title || "Company Logo"}
                    height={logoHeight}
                    src={logoSrc}
                    width={logoWidth}
                />
            </object>
        </div>
    ) : (
        <Image
            alt={webData.site_title || "Company Logo"}
            className={className}
            height={logoHeight}
            priority
            src={logoSrc}
            width={logoWidth}
        />
    );

    if (linkToHome) {
        return (
            <Link
                aria-label={webData.site_title ? `Return to ${webData.site_title} home` : "Return to home"}
                href="/"
            >
                {logoImage}
            </Link>
        );
    }

    return logoImage;
}
