import Image from 'next/image';
import Link from 'next/link';
import { getWebData } from '@/services/getWebData';
import { WebDataType } from '@/types/WebDataType';

interface LogoData {
  path: string;
  width: number;
  height: number;
}

interface LogoIndexProps {
  className?: string;
  fallbackLogo?: string;
  linkToHome?: boolean;
}

export default async function LogoIndex({
  className = '',
  fallbackLogo = '/images/default-logo.png',
  linkToHome = true
}: LogoIndexProps) {
    const webData: WebDataType = await getWebData();
    const logoData: LogoData | null = webData.system_logo ? JSON.parse(webData.system_logo)[0] : null;

    const logoSrc = logoData?.path ? `/${logoData.path}` : fallbackLogo;
    const logoWidth = logoData?.width || 234;
    const logoHeight = logoData?.height || 51;

    const logoImage = (
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
