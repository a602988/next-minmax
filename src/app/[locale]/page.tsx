import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LanguageSwitcherListApi from "@/components/LanguageSwitcher/ListApi";

import styles from './loading.module.css';

export default async function HomePage() {
    const t = await getTranslations("HomePage");
    const res = await fetch('http://localhost:3000/api/demo/languages');
    const data = await res.json();
    return (
        <div>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingBar}></div>
            </div>
            <h1>locale page {t("title")}</h1>
            <Link href="/about">{t("about")}</Link>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <LanguageSwitcherListApi languages={data.data}/>
            <LanguageSwitcher/>
        </div>
    );
}
