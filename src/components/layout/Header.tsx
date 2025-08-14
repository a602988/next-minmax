import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { I18nIntegration } from '@/i18n/i18n-integration';
import { LanguageSwitcherContainer } from '@/features/language';


export default async function Header() {
    // 靜態渲染的翻譯資料
    const t = await getTranslations('navigation');
    const languages = await I18nIntegration.getLanguages();
    const locales = await I18nIntegration.getLocales();
    return (
        <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div>
                <h2>頁面</h2>
                <nav className="flex gap-3">
                    <Link href="/">{t('home')}</Link>
                    <Link href="/about">{t('about')}</Link>
                    <Link href="/contact">{t('contact')}</Link>
                </nav>
            </div>
            <div>
                <h2>支援的語系清單</h2>
                <nav className="flex gap-3">
                    {languages.map(lang => (
                        <Link href={`/${lang.id}`} key={lang.id} title={lang.id}>
                            {lang.title}
                        </Link>
                    ))}
                </nav>

                {/* 傳遞語言資料給容器組件 */}
                <LanguageSwitcherContainer
                    className="mb-6"
                    variant="inline"
                    languages={languages}
                />
            </div>
            <div>
                <h2>國家預設語系</h2>
                <ul className="flex gap-3">
                    {Object.entries(locales).map(([countryCode, locale]) => (
                        <li key={countryCode}>
                            {countryCode} : {locale}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}