import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import ContactLink from '@/components/social/ContactLink';

interface PROPS {
  className?: string
  children?: ReactNode
}

export default function ContactLinkMobile({ children, className = '' }: PROPS) {
  const t = useTranslations('contactLinkMobile');
  return (
    <ContactLink
      ariaLabel={t('ariaLabel')}
      className={`call-phone ${className}`.trim()}
      dataKey='system_mobile'
      title={t('title')}
      type="phone"
    >
      {children}
    </ContactLink>
  );
}