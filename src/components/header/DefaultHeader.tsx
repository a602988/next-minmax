import LogoImages from "@/assets/images/logo-mobile.svg";
import LiveSupportWidget from '@/components/headerWiddgets/LiveSupportWidget';
import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/variants/MainNav";
import NavToggle from '@/components/navToggle/NavToggle';
import SocialLinks from '@/components/social/SocialLinks';
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
          <div className="flex items-start gap-6">
            <div>
              <h3 className={styles.boxTitle}>CALL US</h3>
              <address>
                <dl className="m-0">
                  <dt className="sr-only">電話：</dt>
                  <dd  className="m-0 leading-5">
                    <a aria-label="撥打電話給我們" className="text-xs " href="tel:+886987000588" >
                      +886 987 000 588
                    </a>
                  </dd>
                </dl>
              </address>
            </div>
            <div className={styles.socialBox}>
              <h3 className={styles.boxTitle}>FIND US</h3>
              <SocialLinks className="py-1 flex gap-3" />
            </div>
          </div>
        </div>
      </header>
    );
}
