import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'

interface SocialLinkProps {
  children: ReactNode
  className?: string
  href: string
  label: string
  style?: CSSProperties
  target?: '_blank' | '_self'
}

export default function SocialLink({
  children,
  className,
  href,
  label,
  style,
  target = '_blank',
}: SocialLinkProps) {
  return (
    <Link
      className={`social-link ${className || ''}`}
      href={href}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={style}
      target={target}
    >
      {children}
      <span className="social-link-label">{label}</span>
    </Link>
  )
}