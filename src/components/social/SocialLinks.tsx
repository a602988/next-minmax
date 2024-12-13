import FacebookLink from '@/components/social/FacebookLink';
import InstagramLink from '@/components/social/InstagramLink';
import LineLink from '@/components/social/LineLink';
import YoutubeLink from '@/components/social/YoutubeLink';
interface Props {
  className?: string;
}

export default function SocialLinks(
  {
    className = "flex"
  }: Props
) {

  return (
    <div className={className}>
        <FacebookLink />
        <InstagramLink />
        <YoutubeLink />
        <LineLink />
    </div>
  )
}
