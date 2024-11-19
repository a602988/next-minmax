import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getWebData } from '@/services/getWebData';
import { WebDataType } from '@/types/WebDataType';

interface LogoData {
  path: string;
}

interface LogoIndexProps {
  className?: string;
  defaultLogo?: string;
  height?: number;
  linkToHome?: boolean;
  width?: number;
}

export default async function LogoIndex({
  className = '',
  defaultLogo = '/static/images/common/logo.svg',
  height = 100,
  linkToHome = true,
  width = 100
}: LogoIndexProps) {
    const webData: WebDataType = await getWebData();
    const logoData: LogoData | null = webData.system_logo ? JSON.parse(webData.system_logo)[0] : null;

    const logoSrc = logoData?.path || defaultLogo;

    const logoImage =  (
      <Image
        alt={webData.site_title || "Company Logo"}
        className={className}
        height={height}
        priority
        src={logoSrc}
        width={width}
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
