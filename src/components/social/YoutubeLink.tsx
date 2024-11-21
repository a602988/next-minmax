import { FaYoutube } from "react-icons/fa";
import SocialLink from '@/components/social/common/SocialLink';

const PROPS = {
  name: 'youtube"',
  className: 'social-youtube"',
  label: 'YT"',
  title: 'youtube',
  dataKey: 'social_youtube"'
};

interface Props {
  className?: string;
}

export default function YoutubeLink({ className = '' }: Props) {
  return (
    <SocialLink
      className={`${PROPS.className} ${className}`.trim()}
      dataKey={PROPS.dataKey}
      label={PROPS.label}
      title={PROPS.title}
    >
      <FaYoutube />
    </SocialLink>
  );
}
