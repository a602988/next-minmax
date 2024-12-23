import FacebookLink from '@/components/social/variants/FacebookLink';
import InstagramLink from '@/components/social/variants/InstagramLink';
import LineLink from '@/components/social/variants/LineLink';
import YoutubeLink from '@/components/social/variants/YoutubeLink';
import styles from './SocialLinks.module.css';

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
        <FacebookLink className={styles.listItem}/>
        <InstagramLink className={styles.listItem}/>
        <YoutubeLink className={styles.listItem}/>
        <LineLink className={styles.listItem}/>
    </div>
  )
}
