import dynamic from 'next/dynamic'
import LogoIndex from "@/components/logo/LogoIndex";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './DefaultHeader.module.css';


const DefaultHeaderFooter = dynamic(() => import('./DefaultHeaderFooter'))

function DefaultHeader() {

  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex />
      <NavToggle className={styles.headerNavToggle} />
      <DefaultHeaderFooter />
    </header>
  );
}

export default async function DefaultHeaderWrapper() {
  return <DefaultHeader />;
}
