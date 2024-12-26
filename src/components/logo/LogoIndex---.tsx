import Image from 'next/image'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getWebData } from '@/services/getWebData';
import styles from './LogoIndex.module.css';

interface Props {
  className?: string;
  link?: boolean;
}

export default async function LogoIndex({
  className = '',
  link = true,
}: Props) {
  const webData = await getWebData();
  const logoData = JSON.parse(webData.system_logo);
  const logoSrc = logoData[0]?.path || '/images/common/logo.svg';
  const siteTitle = webData.site_title || 'logo';

  const params = useParams();
  const t = useTranslations('common');

  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${siteTitle} ` + t('home');

  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  const logoContent = (
    <div className="relative size-full">
      <Image
        alt="logo"
        fill
        priority
        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
        src={logoSrc}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );

  if (link) {
    return (
      <Link
        aria-label={ariaLabel}
        className={`w-[234px] h-[50px] ${styles.logo} ${className}`}
        href={getHomeHref()}
        title={titleText}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div
      className={`w-[234px] h-[50px] ${styles.logo} ${className}`}
    >
      {logoContent}
    </div>
  );
}
