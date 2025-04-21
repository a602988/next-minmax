// LanguageSwitcher.tsx (服務器端組件)
import { useTranslations } from 'next-intl';
import LanguageSwitcherClient from './LanguageSwitcherClient';

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'buttons';
  className?: string;
}

export default function LanguageSwitcher({
  variant = 'dropdown',
  className = '',
}: LanguageSwitcherProps) {
  const t = useTranslations('components.LanguageSwitcher');

  return (
    <LanguageSwitcherClient
      variant={variant}
      className={className}
      translations={{
        select: t('select'),
        'aria-label': t('aria-label'),
        switch: t('switch'),
        loading: t('loading'),
        error: t('error'),
      }}
    />
  );
}
