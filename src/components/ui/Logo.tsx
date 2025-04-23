import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface LogoProps {
  className?: string;
  siteName: string;
  imagePath?: string;
  width?: number;
  height?: number;
  locale: string;
}

export default function Logo({
  className = 'logo',
  siteName,
  imagePath = '/images/logo.webp',
  width = 150,
  height = 50,
  locale
}: LogoProps) {
  const t = useTranslations('Logo');

  return (
    <Link 
      href={`/${locale}`} 
      className={`inline-block ${className}`} 
      aria-label={t('ariaLabel', { siteName })}
      title={t('title', { siteName })}
    >
      <Image
        src={imagePath}
        alt={t('imageAlt', { siteName })}
        width={width}
        height={height}
        priority  // 優先加載
      />
      <span className="sr-only">{siteName}</span>
    </Link>
  );
}
