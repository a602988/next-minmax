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
  target?: '_blank' | '_self'
}

export default async function SocialLink({
  ariaLabel,
  children,
  className,
  classNameLabel,
  dataKey,
  target = '_blank',
  title,
}: PROPS) {
  let href: string | undefined;

  try {
    const webData = await getWebData();
    const value = webData[dataKey];
    href = value !== null ? value : undefined;
  } catch (error) {
    console.error(`Failed to fetch data for ${dataKey}:`, error);
    return null; // or return an error status component
  }

  if (!href) {
    return null; // if there is no corresponding link, do not render any content
  }

  return (
    <Link
      aria-label={ariaLabel}
      className={`findUs-link ${className || ''}`}
      href={`tel:${href}`}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      target={target}
      title={title}
    >
      <span className={classNameLabel}>{href}</span>
      {children}
    </Link>
  );
}
