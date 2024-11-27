import LiveSupportWidget from '@/components/headerWiddgets/LiveSupportWidget';
import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/variants/MainNav";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './DefaultHeader.module.css';

export default function BlogHeader() {
  return (
    <header className={`${styles.header} container-px`}>
      <LogoIndex className={styles.headerLogo} height={51} width={234} />
      <MainNav />
      <LiveSupportWidget />
      <NavToggle className={styles.headerNavToggle} theme="twoBar" />
    </header>
  )
}
