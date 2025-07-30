import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function HomePage() {
    const t = useTranslations('navigation');
    return (
        <nav className="flex gap-3">
            <Link href="/">{t('home')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href="/contact">{t('contact')}</Link>
        </nav>
    );
}
