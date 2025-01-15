'use client'
import React from 'react'
import { Link } from '@/i18n/routing'
import { usePathname } from 'next/navigation'

interface Language {
  id: string;
  title: string;
  native: string;
  icon?: string;
  showIcon: boolean;
  default: boolean;
}

interface DataProps {
  languages: Language[];
}

export default function LanguageSwitcherListApi({ languages }: DataProps) {
  // 處理路徑，移除當前語言前綴（如果存在）
  const pathname = usePathname();
  const pathnameWithoutLocale = pathname.replace(/^\/[^\/]+/, '') || '/'

  return (
    <ul>
      {languages.map((language) => (
        <li
            key={language.id}
            className={`list-item ${language.default ? 'current' : ''}`}
        >
          <Link
              href={language.default ? '/' : pathnameWithoutLocale}
              locale={language.id}
          >
            {language.showIcon && language.icon && (
                <span className="languageIcon">{language.icon}</span>
            )}
            {language.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
