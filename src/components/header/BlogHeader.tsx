import LogoIndex from "@/components/logo/LogoIndex";
import MainNav from "@/components/nav/MainNav";
import styles from './BlogHeader.module.css';


export default function blogHeader() {
    return (
       <div className={styles.header}>
         <LogoIndex height={51} width={234} />
         <MainNav />
       </div>
    )
};
