'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaLine, FaLinkedinIn, FaTwitter, FaYoutube} from 'react-icons/fa';

interface Props {
  className?: string;
  type: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'line' | 'youtube';
  href: string;
}

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  line: FaLine,
  youtube: FaYoutube
};

export default function ClientSocialLink({ className = '', type, href }: Props) {
  const t = useTranslations('socialLink');
  const IconComponent = socialIcons[type];
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <Link
      className={`social-link px-1 social-${type} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={`${t('ariaLabel')}${title}`}
    >
      <IconComponent />
      <span className="sr-only">{title}</span>
    </Link>
  );
}