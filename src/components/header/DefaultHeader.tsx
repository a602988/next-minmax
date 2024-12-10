import LogoImages from "@/assets/images/logo-mobile.svg";
import LiveSupportWidget from '@/components/headerWiddgets/LiveSupportWidget';
import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/variants/MainNav";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './DefaultHeader.module.css';

export default function DefaultHeader() {
    return (
      <header className={`${styles.header} container-px`}>
        <LogoIndex />
        <MainNav />
        <div className="max-xl:ms-auto">
          <LiveSupportWidget />
        </div>
        <NavToggle className={styles.headerNavToggle} />
        <div className={styles.headerFooter}>
          <LogoImages className={styles.headerFooterLogo} />
          <span className={`${styles.vr} vr`} />
          <div className={styles.siteTitle}>
            <span>雲端數位科技有限公司</span>
            <span>MINMAX DIGITAL AGENCY</span>
          </div>
          <div className={styles.contactInfo}>
            <h3 className="sr-only">聯絡我們</h3>
            <address className={styles.contactAddress}>
              <dl className={styles.contactItem}>
                <dt>電話：</dt>
                <dd>
                  <a aria-label="撥打電話給我們" href="tel:+886987000588" >
                    +886 987 000 588
                  </a>
                </dd>
              </dl>
            </address>
          </div>
          <div className={styles.socialLinks}>
            <h3 className="sr-only">關注我們</h3>
            <ul className={styles.socialList}>
              <li>
                <a aria-label="訪問我們的Facebook頁面" href="https://www.facebook.com/YourPageHere" rel="noopener noreferrer" target="_blank"  >
                  Facebook
                </a>
              </li>

            </ul>
          </div>
        </div>
      </header>
    );
}
