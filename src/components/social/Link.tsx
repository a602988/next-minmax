import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'

interface SocialLinkProps {
  href: string
  icon?: ReactNode
  label: string
  style?: CSSProperties
  className?: string
  target?: '_blank' | '_self'
}

export default function SocialLink({ className, href, icon, label, style, target = '_blank' }: SocialLinkProps) {
  return (
    <Link
      className={`social-link ${className || ''}`}
      href={href}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={style}
      target={target}

    >
      {icon && <span className="social-link-icon">{icon}</span>}
      <span className="social-link-label">{label}</span>
    </Link>
  )
}
