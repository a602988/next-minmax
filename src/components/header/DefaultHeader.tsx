import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/MainNav";
import styles from './DefaultHeader.module.css';


export default function DefaultHeader() {
    return (
       <div className={styles.header}>
         <LogoIndex height={51} width={234} />
         <MainNav />
       </div>
    )
};
