import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from 'next-intl';
import MainNav from '@/components/menu/mainNav';

export default function Header() {
    const locale = useLocale();

    return (
        <header>
            <p>header</p>
            <LanguageSwitcher currentLocale={locale} />
            <MainNav />
        </header>
    )
}
