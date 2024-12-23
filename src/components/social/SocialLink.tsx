import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaLine, FaYoutube} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { getWebData } from '@/services/getWebData';

interface Props {
  className?: string;
  type: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'line' | 'youtube';
  icon?: IconType;
}

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  twitter: FaTwitter,
  line: FaLine,
  youtube: FaYoutube
};

const socialDataKeys: Record<string, string> = {
  facebook: 'social_facebook',
  instagram: 'social_instagram',
  linkedin: 'social_linkedin',
  twitter: 'social_twitter',
  line: 'social_line',
  youtube: 'social_youtube'
};

export default async function SocialLink({ className = '', type, icon: CustomIcon }: Props) {
  const t = useTranslations('socialLink');
  
  const DefaultIcon = socialIcons[type];
  const IconComponent = CustomIcon || DefaultIcon;
  const dataKey = socialDataKeys[type];
  const title = type.charAt(0).toUpperCase() + type.slice(1);

  const webData = await getWebData();
  const href = webData[dataKey];

  if (!href) {
    return null; // 如果沒有對應的連結，不渲染任何內容
  }

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