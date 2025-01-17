'use client';

import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import LanguageLink from './LanguageLink';
import { useState, useEffect } from 'react';
import { fetchLanguages } from '@/services/languageService';
import { LanguagesType } from '@/types/languages';

interface Props {
    className?: string;
}

const LanguageSwitcher = ({ className = 'flex gap-1' }: Props) => {
    const pathname = usePathname();
    const locale = useLocale();
    const [languages, setLanguages] = useState<LanguagesType[]>([]);

    useEffect(() => {
        fetchLanguages().then(setLanguages).catch(error => {
            console.error('Failed to fetch languages:', error);
        });
    }, []);

    const pathnameWithoutLocale = pathname.replace(new RegExp(`^/(${routing.locales.join('|')})`), '') || '/';

    return (
        <div className={className}>
            {languages.map((lang) => (
                <LanguageLink
                    key={lang.id}
                    href={pathnameWithoutLocale}
                    locale={lang.id}
                    isCurrent={lang.id === locale}
                    title={lang.title}
                />
            ))}
        </div>
    );
};

export default LanguageSwitcher;
