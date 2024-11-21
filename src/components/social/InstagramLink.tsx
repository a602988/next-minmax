import { FaInstagram } from "react-icons/fa6";
import SocialLink from '@/components/social/common/SocialLink';

const PROPS = {
  name: 'instagram"',
  className: 'social-instagram"',
  label: 'IG"',
  title: 'instagram',
  dataKey: 'social_instagram"'
};

interface Props {
  className?: string;
}

export default function InstagramLink({ className = '' }: Props) {
  return (
    <SocialLink
      className={`${PROPS.className} ${className}`.trim()}
      dataKey={PROPS.dataKey}
      label={PROPS.label}
      title={PROPS.title}
    >
      <FaInstagram />
    </SocialLink>
  );
}
