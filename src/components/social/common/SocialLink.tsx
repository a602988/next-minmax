import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
import { getWebData } from '@/services/getWebData';

interface SocialLinkProps {
  children: ReactNode
  className?: string
  dataKey: string
  label: string
  title: string
  style?: CSSProperties
  target?: '_blank' | '_self'
}

export default async function SocialLink({
  children,
  className,
  dataKey,
  label,
  style,
  target = '_blank',
  title,
}: SocialLinkProps) {
  let href: string | undefined;

  try {
    const webData = await getWebData();
    const value = webData[dataKey];
    href = value !== null ? value : undefined;
  } catch (error) {
    console.error(`Failed to fetch data for ${dataKey}:`, error);
    return null; // 或者返回一個錯誤狀態的組件
  }

  if (!href) {
    return null; // 如果沒有對應的連結，不渲染任何內容
  }

  return (
    <Link
      className={`social-link ${className || ''}`}
      href={href}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={style}
      target={target}
      title={title}
    >
      {children}
      <span className="social-link-label">{label}</span>
    </Link>
  )
}
