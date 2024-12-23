import FacebookLink from '@/components/social/variants/FacebookLink';
import LineLink from '@/components/social/variants/LineLink';
import style from './LiveSupportWidget.module.css';

export default function LiveSupportWidget() {

  return (
    <div className={style.LiveSupportWidget}>
      <FacebookLink className={style.facebook}/>
      <LineLink className={style.line}/>
    </div>
  )
}
