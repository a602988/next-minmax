import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import ContactLink from '@/components/social/ContactLink';

interface PROPS {
  className?: string
  children?: ReactNode
}

export default function ContactLinkMail({ children, className = '' }: PROPS) {
  const t = useTranslations('contactLinkMail');
  return (
    <ContactLink
      ariaLabel={t('ariaLabel')}
      className={`call-mail ${className}`.trim()}
      dataKey='system_mail'
      title={t('title')}
      type="email"
    >
      {children}
    </ContactLink>
  );
}