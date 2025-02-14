import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from 'next-intl';

export default function Header() {
    const locale = useLocale();

    return (
        <header>
            <p>header</p>
            <LanguageSwitcher currentLocale={locale} />

        </header>
    )
}
