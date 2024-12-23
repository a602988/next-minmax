import Link from 'next/link'
import { ReactNode } from 'react'
import { getWebData } from '@/services/getWebData';

interface PROPS {
  ariaLabel?: string
  children: ReactNode
  className?: string
  classNameLabel?: string
  dataKey: string
  title: string
  type: 'phone' | 'email' | 'other'
}

export default async function ContactLink({
  ariaLabel,
  children,
  className,
  classNameLabel,
  dataKey,
  title,
  type,
}: PROPS) {
  const webData = await getWebData();
  const href = webData[dataKey];

  if (!href) {
    return null; // 如果沒有對應的連結，不渲染任何內容
  }

  const getHref = () => {
    switch (type) {
      case 'phone':
        return `tel:${href}`;
      case 'email':
        return `mailto:${href}`;
      default:
        return href;
    }
  };

  return (
    <Link
      aria-label={ariaLabel}
      className={`${className || ''}`}
      href={getHref()}
      title={title}
    >
      <span className={classNameLabel}>{href}</span>
      {children}
    </Link>
  );
}