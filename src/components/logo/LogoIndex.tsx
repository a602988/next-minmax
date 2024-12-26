
/**
 * @file LogoIndex.tsx
 * @description 此組件用於渲染網站LOGO，可選擇性地包含鏈接功能。
 * 它支持從網絡數據動態加載LOGO，如果需要，會回退到默認LOGO。
 * 該組件被分為服務器端和客戶端部分，以實現最佳性能。
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { use } from 'react';
import LogoDefault from '@/components/logo/variants/LogoDefault';
import { getWebData } from '@/services/getWebData';
import styles from './LogoIndex.module.css';


// 參數的格式
interface Props {
  className?: string;
  link?: boolean;
}


// 數據獲取並將其傳遞給客戶端組件
function LogoIndex({ className = '', link = true }: Props) {
  const webDataPromise = getWebData();
  return <LogoClient className={className} link={link} webDataPromise={webDataPromise} />;
}


// 客戶端組件
function LogoClient(
  {
    className = '',
    link = true,
    webDataPromise,
  }: Props & { webDataPromise: Promise<any> }) {
  const webData = use(webDataPromise);
  const params = useParams();
  const t = useTranslations('common');

  // 從 webData 解析標誌數據
  const logoData = JSON.parse(webData.system_logo);
  const logoSrc = logoData[0]?.path || '';
  const siteTitle = webData.site_title || process.env.NEXT_PUBLIC_DEFAULT_SITE_TITLE || 'MINMAX';



  // 準備無障礙文本
  const ariaLabel = t('returnTo') + t('home');
  const titleText = t('returnTo') + ` ${siteTitle} ` + t('home');


  // 根據當前語言環境獲取首頁 URL
  function getHomeHref() {
    const locale = params.locale as string;
    return locale ? `/${locale}` : '/';
  }

  // 準備標誌內容
  const logoContent = (
    <div className="relative size-full">
      <Image
        alt="logo"
        fill
        onError={() => {
          console.error('Logo image failed to load');
          return <LogoDefault />;
        }}
        priority
        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
        src={logoSrc}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );

  // 渲染帶有或不帶有連結包裝的標誌
  if (link) {
    return (
      <Link
        aria-label={ariaLabel}
        className={`${styles.logo} ${className}`}
        href={getHomeHref()}
        title={titleText}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={`${styles.logo} ${className}`}>
      {logoContent}
    </div>
  );
}

export default LogoIndex;