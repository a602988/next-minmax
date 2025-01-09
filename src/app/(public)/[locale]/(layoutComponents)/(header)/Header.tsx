import dynamic from 'next/dynamic'
import MainNav from '@/app/(public)/[locale]/(layoutComponents)/(header)/MainNav';
import LogoIndex from "@/components/logo/variants/LogoIndex";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './Header.module.css';

const AnimatedLogo = dynamic(() => import('@/app/(public)/[locale]/(layoutComponents)/(header)/AnimatedLogo'))
const HeaderFooter = dynamic(() => import('@/app/(public)/[locale]/(layoutComponents)/(header)/HeaderFooter'))
const LiveSupportWidget = dynamic(() => import('@/components/headerWiddgets/LiveSupportWidget'))


function Header() {
  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex className="w-[234px] h-[50px] p-1 z-20 relative xl:order-0" />
      <div className="max-xl:ms-auto relative z-20 xl:order-2">
        <LiveSupportWidget />
      </div>
      <NavToggle className={`${styles.headerNavToggle} z-20 xl:order-1`} />

      <div className={`${styles.headerMenuWrapper} z-10`}>
        <MainNav className={`${styles.mainNavWrapper} z-10`} />
        <HeaderFooter className="max-xl:border-t max-xl:border-white/5 z-0" />
        <div className="fixed inset-0 z-0 xl:hidden">
          <AnimatedLogo className="scale-150" />
        </div>
      </div>
    </header>
  );
}

export default Header;
