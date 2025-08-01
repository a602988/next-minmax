import {getTranslations} from 'next-intl/server';// 靜態渲染

import {Link} from '@/i18n/navigation';

export default async function HomePage() {

    // 靜態渲染的翻譯資料
    const t = await  getTranslations('navigation');

    return (
        <nav className="flex gap-3">
            <Link href="/">{t('home')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href="/contact">{t('contact')}</Link>
        </nav>
    );
}
