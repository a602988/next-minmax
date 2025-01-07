// import dynamic from 'next/dynamic'
import MainNav from '@/app/(public)/[locale]/(header)/MainNav';
import LogoIndex from "@/components/logo/variants/LogoIndex";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './Header.module.css';

// const HeaderFooter = dynamic(() => import('@/app/(public)/[locale]/(header)/HeaderFooter'))

function Header() {
  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex className="w-[234px] h-[50px] p-1 z-20"/>
      <MainNav />
      <NavToggle className={styles.headerNavToggle} />

    </header>
  );
}

export default Header;
