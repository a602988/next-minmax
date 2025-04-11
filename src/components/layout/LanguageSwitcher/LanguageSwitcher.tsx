// LanguageSwitcher.tsx (服務器端組件)
import { useTranslations, useLocale } from 'next-intl';
import { useLanguageOptions } from '@/services/minmax/hooks/useLanguageOptions';
import LanguageSwitcherClient from './LanguageSwitcherClient';
import API_ENDPOINTS from '@/services/minmax/api/apiConfig';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons';
  className?: string;
  apiUrlKey?: keyof typeof API_ENDPOINTS;
}

export default function LanguageSwitcher({
  variant = 'dropdown',
  className = '',
  apiUrlKey = 'LANGUAGES',
}: LanguageSwitcherProps) {
  const t = useTranslations('components.LanguageSwitcher');
  const locale = useLocale();
  const { languageOptions, isLoading, error } = useLanguageOptions(apiUrlKey, locale);

  if (isLoading) {
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <div>{t('error')}</div>;
  }

  return (
    <LanguageSwitcherClient
      variant={variant}
      className={className}
      languageOptions={languageOptions}
      translations={{
        select: t('select'),
        'aria-label': t('aria-label'),
        switch: t('switch'),
      }}
    />
  );
}
