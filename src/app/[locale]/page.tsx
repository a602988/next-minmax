import {useTranslations} from 'next-intl';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'

export default function HomeLocale() {
    const t = useTranslations('HomePage');
    // 處理路徑，移除當前語言前綴（如果存在）

    return (
    <div>
      <h1>{t('title')}</h1>
        <div className="flex gap-4">
            <LanguageSwitcher />
        </div>
    </div>
  );
}
