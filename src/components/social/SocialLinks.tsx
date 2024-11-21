import FacebookLink from '@/components/social/FacebookLink';
import InstagramLink from '@/components/social/InstagramLink';
import LineLink from '@/components/social/LineLink';
import YoutubeLink from '@/components/social/YoutubeLink';

export default function SocialLinks() {

  return (
    <div className="social-links">
        <FacebookLink />
        <InstagramLink />
        <YoutubeLink />
        <LineLink />
    </div>
  )
}
