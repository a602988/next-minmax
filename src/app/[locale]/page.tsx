import {useTranslations} from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher/LanguageSwitcher'
import HeaderFactory from '@/components/layout/Header/HeaderFactory';

export default function HomeLocale() {
    const t = useTranslations('HomePage');
    // 處理路徑，移除當前語言前綴（如果存在）

    return (
    <div>
        <HeaderFactory
            type="simple"
            showLogo={true}
            showLanguageSwitcher={false}
            customClass="py-4 px-6"
        />
      <h1>{t('title')}</h1>
        <div className="flex gap-2">
            <LanguageSwitcher />
        </div>
    </div>
  );
}
