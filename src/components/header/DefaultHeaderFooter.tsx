import { useTranslations } from 'next-intl';
import LogoImages from '@/assets/images/logo-mobile.svg';
import PhoneLinkMobile from '@/components/social/variants/PhoneLinkMobile';
import SocialLinks from '@/components/social/variants/SocialLinks';
import { getWebData } from '@/services/getWebData';
import styles from './DefaultHeaderFooter.module.css';

type WebData = {
  site_title: string;
  company_nickname: string;
};

type DefaultHeaderProps = {
  webData: WebData;
};

function DefaultHeaderFooter({webData}: DefaultHeaderProps) {
  const t = useTranslations('header');

  return (
      <div className={styles.headerFooter}>
        <LogoImages className={styles.headerFooterLogo} />
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
                  <PhoneLinkMobile className="text-xs" />
                </dd>
              </dl>
            </address>
          </div>
          <div className="hidden xs:block">
            <h3 className="text-xs font-normal	sm:mb-1">{t('findUs')}</h3>
            <SocialLinks className="py-1 flex" />
          </div>
        </div>
      </div>
  );
}

export default async function DefaultHeaderWrapper() {
  const webData = await getWebData();
  return <DefaultHeaderFooter webData={webData} />;
}
