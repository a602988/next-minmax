import { getWebData } from '@/services/getWebData';
import ClientSocialLink from './ClientSocialLink';

interface Props {
  className?: string;
  type: 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'line' | 'youtube';
}

const socialDataKeys: Record<string, string> = {
  facebook: 'social_facebook',
  instagram: 'social_instagram',
  linkedin: 'social_linkedin',
  twitter: 'social_twitter',
  line: 'social_line',
  youtube: 'social_youtube'
};

export default async function SocialLink({ className = '', type }: Props) {
  const webData = await getWebData();
  const dataKey = socialDataKeys[type];
  const href = webData[dataKey];

  if (!href) {
    return null; // If there's no corresponding link, don't render anything
  }

  return <ClientSocialLink className={className} type={type} href={href} />;
}