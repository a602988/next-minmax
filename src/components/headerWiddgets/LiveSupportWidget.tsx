import SocialLink from '@/components/social/SocialLink';
import style from './LiveSupportWidget.module.css';

export default function LiveSupportWidget() {

  return (
    <div className={style.LiveSupportWidget}>
      <SocialLink type="facebook" className={style.facebook}/>
      <SocialLink type="line" className={style.line}/>
    </div>
  )
}
