import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import PhoneLink from '@/components/social/PhoneLink';

interface PROPS {
  className?: string
  children?: ReactNode
}

export default function PhoneLinkMobile({ children, className = '' }: PROPS) {
  const t = useTranslations('socialPhoneLink');
  return (
    <PhoneLink
      ariaLabel={t('ariaLabel')}
      className={`call-phone ${className}`.trim()}
      dataKey='system_mobile'
      title={t('title')}
    >
      {children}
    </PhoneLink>
  );
}
