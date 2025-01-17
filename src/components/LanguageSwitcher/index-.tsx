'use client';

import { usePathname } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import LanguageLink from './LanguageLink';
import { useEffect, useState } from 'react';

interface Props {
    className?: string;
    useCache?: boolean; // 新增參數，控制是否使用快取
}

interface dataType {
    id: string;
    title: string;
    native: string;
    icon: string;
    default: boolean;
    current: boolean;
}

const LanguageSwitcher = ({ className = 'flex gap-1', useCache = false }: Props) => {
    const pathname = usePathname();
    const locale = useLocale();
    const [languages, setLanguages] = useState<dataType[]>([]);

    useEffect(() => {
        const fetchAndUpdateLanguages = async () => {
            const storedData = useCache ? localStorage.getItem('languageData') : null;
            const lastFetch = useCache ? localStorage.getItem('lastLanguageFetch') : null;
            const now = new Date().getTime();

            // 如果啟用快取且有存儲的數據，先設置它
            if (useCache && storedData) {
                setLanguages(JSON.parse(storedData));
            }

            // 檢查是否需要更新（如果不使用快取，或者快取過期）
            if (!useCache || !storedData || !lastFetch || now - parseInt(lastFetch) > 7 * 24 * 60 * 60 * 1000) {
                try {
                    const response = await fetch('http://localhost:3000/api/demo/languages');
                    const data = await response.json();
                    if (data.code === "0000" && Array.isArray(data.data)) {
                        setLanguages(data.data);
                        if (useCache) {
                            localStorage.setItem('languageData', JSON.stringify(data.data));
                            localStorage.setItem('lastLanguageFetch', now.toString());
                        }
                    }
                } catch (error) {
                    console.error('Failed to fetch languages:', error);
                    // 如果 API 調用失敗，但我們有存儲的數據，我們已經設置了它
                    // 如果沒有存儲的數據，我們保持 languages 為空數組
                }
            }
        };

        fetchAndUpdateLanguages();
    }, [useCache]);

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
