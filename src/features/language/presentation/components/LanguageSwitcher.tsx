'use client';

import React from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import type { Language } from '@/types/language';
import { useLanguages } from '../hooks/useLanguages';

type LanguageSwitcherProps = {
    className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
    const languages = useLanguages();
    const router = useRouter();
    const pathname = usePathname() || '/';
    const searchParams = useSearchParams();

    // 重要：所有 Hook 都要在頂層呼叫，不要放在 early return 之後
    const localeIds = React.useMemo(
        () => new Set((languages ?? []).map((l) => l.id)),
        [languages]
    );

    // 這裡才做 early return（不會再呼叫任何 Hook）
    if (!languages || languages.length === 0) return null;

    function buildNextPath(target: Language): string {
        const raw = pathname;
        const parts = raw.split('/').filter(Boolean);
        const first = parts[0];
        const hasLocalePrefix = !!first && localeIds.has(first);
        const restPath = hasLocalePrefix ? `/${parts.slice(1).join('/')}` : raw;

        const nextBase = target.default
            ? restPath || '/'
            : `/${target.id}${restPath === '/' ? '' : restPath}`;

        const qs = searchParams?.toString();
        return qs ? `${nextBase}?${qs}` : nextBase;
    }

    function selectLanguage(target: Language) {
        document.cookie = `NEXT_LOCALE=${encodeURIComponent(
            target.id
        )}; path=/; max-age=${60 * 60 * 24 * 180}`;

        const nextPath = buildNextPath(target);
        router.push(nextPath, { scroll: false });
    }

    return (
        <nav className={className} aria-label="Language switcher">
            <ul className="flex flex-wrap items-center gap-2">
                {languages.map((lang) => {
                    const label = lang.native || lang.title;
                    const isDefault = !!lang.default;

                    return (
                        <li key={lang.id}>
                            <button
                                type="button"
                                onClick={() => selectLanguage(lang)}
                                className={
                                    'inline-flex items-center gap-2 rounded px-3 py-1 text-sm ' +
                                    (isDefault
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200')
                                }
                                aria-current={isDefault ? 'true' : undefined}
                                title={lang.title}
                            >
                                {/* icon 是樣式類名，作為裝飾性元素 */}
                                {lang.icon ? (
                                    <span
                                        aria-hidden="true"
                                        className={`${lang.icon} inline-block h-4 w-4`}
                                    />
                                ) : null}

                                <span>{label}</span>

                                {isDefault ? (
                                    <span className="ml-1 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px]">
                    default
                  </span>
                                ) : null}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}