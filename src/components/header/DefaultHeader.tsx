
import LiveSupportWidget from '@/components/headerWiddgets/LiveSupportWidget';
import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/variants/MainNav";
import NavToggle from '@/components/navToggle/NavToggle';
import styles from './DefaultHeader.module.css';

export default function DefaultHeader() {
    return (
        <header className={`${styles.header} container-px`}>
            <LogoIndex/>
            <MainNav />
            <div className="max-xl:ms-auto">
              <LiveSupportWidget />
            </div>
            <NavToggle className={styles.headerNavToggle} />

        </header>
    )
}
