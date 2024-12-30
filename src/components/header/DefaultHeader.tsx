import dynamic from 'next/dynamic'
import LogoIndex from "@/components/logo/variants/LogoIndex";
import MainNavAd from '@/components/nav/variants/MainNavAd';
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './DefaultHeader.module.css';


const DefaultHeaderFooter = dynamic(() => import('./DefaultHeaderFooter'))

function DefaultHeader() {

  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex className="w-[234px] h-[50px] p-1"/>
      <MainNavAd />
      <NavToggle className={styles.headerNavToggle} />
      <DefaultHeaderFooter />
    </header>
  );
}

export default async function DefaultHeaderWrapper() {
  return <DefaultHeader />;
}
