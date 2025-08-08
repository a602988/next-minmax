import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { languageService } from '@/services'; // ✅ 使用統一導出

export default async function HomePage() {
    // 靜態渲染的翻譯資料
    const t = await getTranslations('navigation');
    const languages = await languageService.getLanguages();


    return (
        <div>
            <nav className="flex gap-3">
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
                <Link href="/contact">{t('contact')}</Link>
            </nav>

            <h2>支援的語系清單</h2>
            <ul>
                {languages.map(lang => (
                    <li key={lang.id}>
                        {lang.title} ({lang.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}