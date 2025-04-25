import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher/LanguageSwitcher'
import Header from '@/components/layout/Header/Header'

export default function HomeLocale() {
    const t = useTranslations('HomePage');

    return (
    <div>
        <Header  />
        <h1>{t('title')}</h1>
        <div className="flex gap-2">
            <LanguageSwitcher />
        </div>
    </div>
  );
}
