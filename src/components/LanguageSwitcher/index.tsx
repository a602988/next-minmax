'use client';

import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import LanguageLink from './LanguageLink';
import { useEffect, useState } from 'react';

interface Props {
    className?: string;
}

interface dataType {
    id: string;
    title: string;
    native: string;
    icon: string;
    default: boolean;
    current: boolean;
}

const LanguageSwitcher = ({ className = 'flex gap-1' }: Props) => {
    const pathname = usePathname();
    const locale = useLocale();
    const [languages, setLanguages] = useState<dataType[]>([]);

    useEffect(() => {
        const fetchAndUpdateLanguages = async () => {
            const storedData = localStorage.getItem('languageData');
            const lastFetch = localStorage.getItem('lastLanguageFetch');
            const now = new Date().getTime();

            // 检查是否需要更新（例如，每7天更新一次）
            if (!storedData || !lastFetch || now - parseInt(lastFetch) > 7 * 24 * 60 * 60 * 1000) {
                try {
                    const response = await fetch('/api/demo/languages');
                    const data = await response.json();
                    if (data.code === "0000" && Array.isArray(data.data)) {
                        setLanguages(data.data);
                        localStorage.setItem('languageData', JSON.stringify(data.data));
                        localStorage.setItem('lastLanguageFetch', now.toString());
                    }
                } catch (error) {
                    console.error('Failed to fetch languages:', error);
                }
            } else if (storedData) {
                // 使用存储的数据
                setLanguages(JSON.parse(storedData));
            }
        };

        fetchAndUpdateLanguages();
    }, []);

    const pathnameWithoutLocale = pathname.replace(new RegExp(`^/(${routing.locales.join('|')})`), '') || '/';

    return (
        <div className={className}>
            {languages.map((lang) => (
                <LanguageLink
                    key={lang.id}
                    href={pathnameWithoutLocale}
                    locale={lang.id}
                    isDefault={lang.default}
                    isCurrent={lang.id === locale}
                    title={lang.title}
                />
            ))}
        </div>
    );
};

export default LanguageSwitcher;
