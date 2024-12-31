import dynamic from 'next/dynamic'
import MainNav from '@/app/(public)/[locale]/MainNav';
import LogoIndex from "@/components/logo/variants/LogoIndex";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './Header.module.css';

const Footer = dynamic(() => import('../Footer'))

function Header() {
  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex className="w-[234px] h-[50px] p-1"/>
      <MainNav />
      <NavToggle className={styles.headerNavToggle} />
      <Footer />
    </header>
  );
}

export default async function DefaultHeaderWrapper() {
  return <Header />;
}
