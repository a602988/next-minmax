import SocialLink from '@/components/social/SocialLink';

interface Props {
  className?: string;
}

export default function SocialLinks(
  {
    className = "flex"
  }: Props
) {

  return (
    <div className={`social-links ${className}`}>
      <SocialLink type="facebook" />
      <SocialLink type="instagram" />
      <SocialLink type="linkedin" />
      <SocialLink type="twitter" />
      <SocialLink type="line" />
      <SocialLink type="youtube" />
    </div>
  )
}
