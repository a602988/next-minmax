import { useTranslations } from 'next-intl';
import LogoImages from '@/assets/images/logo-mobile.svg';
import SocialLinks from '@/components/social/SocialLinks';
import ContactLinkMobile from '@/components/social/variants/ContactLinkMobile';
import { getWebData } from '@/services/getWebData';
import AnimatedLogo from './AnimatedLogo';
import styles from './HeaderFooter.module.css';


type WebData = {
  site_title: string;
  company_nickname: string;
};

type DefaultHeaderProps = {
  webData: WebData;
};

function HeaderFooter({webData}: DefaultHeaderProps) {
  const t = useTranslations('header');

  return (
      <div className={styles.headerFooter}>
        <div className="fixed inset-0">
          <AnimatedLogo className="scale-150" />
        </div>
        <div className={styles.footerInner}>
          <LogoImages className={styles.footerLogo} />
          <span className={`${styles.vr} vr`} />
          <div className="me-auto flex flex-col text-xs sm:text-sm">
            <span className="pt-1">{webData.site_title}</span>
            <span className="inline-block py-1">{t('company')}</span>
          </div>
          <div className="flex items-start gap-3 sm:gap-6">
            <div>
              <h3 className="text-xs font-normal	sm:mb-1">{t('callUs')}</h3>
              <address>
                <dl className="m-0">
                  <dt className="sr-only">{t('tel')}</dt>
                  <dd className="m-0 leading-5">
                    <ContactLinkMobile className="text-xs" />
                  </dd>
                </dl>
              </address>
            </div>
              <div>
                <h3 className="text-xs font-normal	sm:mb-1">{t('findUs')}</h3>
                <SocialLinks className="py-1 flex" />
              </div>
          </div>
        </div>
      </div>
  );
}

// DefaultHeaderWrapper 保持不變
export default async function DefaultHeaderWrapper() {
  const webData = await getWebData();
  return <HeaderFooter webData={webData} />;
}
