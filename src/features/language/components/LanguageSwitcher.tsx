'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import type { Language } from '@/types';
import { buildNextLocaleCookie } from '@/i18n/locale-cookie';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

// Extended language type with additional properties
type ExtendedLanguage = Language & {
    native?: string;
    default?: boolean;
    icon?: string;
};

type LanguageSwitcherProps = {
    className?: string;
    languages: ExtendedLanguage[];
};

export default function LanguageSwitcher({ className, languages }: LanguageSwitcherProps) {
    const pathname = usePathname() || '/';
    const searchParams = useSearchParams();

    const supported = React.useMemo(() => new Set(routing.locales), []);
    const hasLocalePrefix = React.useMemo(() => {
        const parts = pathname.split('/').filter(Boolean);
        const first = parts[0];
        return !!first && supported.has(first as (typeof routing.locales)[number]);
    }, [pathname, supported]);

    // 取得「不含語系前綴」的路徑
    const basePath = React.useMemo(() => {
        const parts = pathname.split('/').filter(Boolean);
        const withoutLocale = hasLocalePrefix ? parts.slice(1) : parts;
        const path = `/${withoutLocale.join('/')}`;
        return path === '' ? '/' : path;
    }, [pathname, hasLocalePrefix]);

    const qsString = searchParams?.toString();
    const hrefWithQuery = React.useCallback(
        (path: string) => (qsString ? `${path}?${qsString}` : path),
        [qsString]
    );

    if (!languages || languages.length === 0) return null;

    return (
        <nav className={className} aria-label="Language switcher">
            <ul className="flex flex-wrap items-center gap-2">
                {languages.map((lang) => {
                    const label = lang.native || lang.title;
                    const isDefault = !!lang.default;
                    const href = hrefWithQuery(basePath);

                    return (
                        <li key={lang.id}>
                            <Link
                                href={href}
                                // 重點：無論是否預設，一律明確指定目標語系
                                locale={lang.id as (typeof routing.locales)[number]}
                                onClick={() => {
                                    document.cookie = buildNextLocaleCookie(lang.id);
                                }}
                                className={
                                    'inline-flex items-center gap-2 rounded px-3 py-1 text-sm ' +
                                    (isDefault ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200')
                                }
                                aria-current={isDefault ? 'true' : undefined}
                                title={lang.title}
                            >
                                {lang.icon ? (
                                    <span aria-hidden="true" className={`${lang.icon} inline-block h-4 w-4`} />
                                ) : null}
                                <span>{label}</span>
                                {isDefault ? (
                                    <span className="ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]">default</span>
                                ) : null}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}