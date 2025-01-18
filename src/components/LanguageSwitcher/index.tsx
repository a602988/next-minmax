'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { getLanguagesData } from '@/services/languageService';
import { LanguagesType } from '@/types/languages';
import LanguageLink from './LanguageLink';

interface Props {
    className?: string;
}

function LanguageSwitcher({ className = 'flex gap-1' }: Props) {
    const pathname = usePathname();
    const locale = useLocale();
    const [languages, setLanguages] = useState<Array<LanguagesType>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchLanguages() {
            try {
                const data = await getLanguagesData();
                if (Array.isArray(data) && data.length > 0) {
                    setLanguages(data);
                }
            } catch (error) {
                console.error('Failed to fetch languages:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchLanguages();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // 或者返回一個加載指示器
    }

    if (languages.length === 0) {
        return null; // 如果沒有語言數據，不渲染任何內容
    }

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
}

export default LanguageSwitcher;
