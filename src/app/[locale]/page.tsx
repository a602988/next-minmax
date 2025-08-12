import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { languageService,localesService } from '@/services'; // ✅ 使用統一導出
import LanguageSwitcher from '@/features/language/components/LanguageSwitcher';

export default async function HomePage() {
    // 靜態渲染的翻譯資料
    const t = await getTranslations('navigation');
    const languages = await languageService.getLanguages();
    const locales = await localesService.getLocales();


    return (
        <div className="flex flex-col gap-3">
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
                <LanguageSwitcher className="mb-6" languages={languages} />

            </div>
            <div>
                <h2>國家預設語系</h2>
                <ul className="flex gap-3">
                    {Object.entries(locales).map(([countryCode, locale]) => (
                        <li key={countryCode}>
                            {countryCode} :  {locale}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}