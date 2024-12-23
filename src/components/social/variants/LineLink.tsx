import { FaLine } from "react-icons/fa6";
import SocialLink from '@/components/social/SocialLink';

const PROPS = {
  name: 'line"',
  className: 'social-line',
  label: 'Line',
  title: 'Line',
  dataKey: 'social_line'
};

interface Props {
  className?: string;
}

export default function LineLink({ className = '' }: Props) {

  return (
    <SocialLink
      className={`${PROPS.className} ${className}`.trim()}
      dataKey={PROPS.dataKey}
      label={PROPS.label}
      title={PROPS.title}
    >
      <FaLine />
    </SocialLink>
  );
}
