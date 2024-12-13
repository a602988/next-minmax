import { FaFacebookF } from 'react-icons/fa';
import SocialLink from '@/components/social/SocialLink';

const PROPS = {
  name: 'facebook',
  className: 'social-facebook',
  label: 'FB',
  title: 'Facebook',
  dataKey: 'social_facebook'
};

interface Props {
  className?: string;
}

export default function FacebookLink({ className = '' }: Props) {
  return (
    <SocialLink
      className={`${PROPS.className} ${className}`.trim()}
      dataKey={PROPS.dataKey}
      label={PROPS.label}
      title={PROPS.title}
    >
      <FaFacebookF />
    </SocialLink>
  );
}
