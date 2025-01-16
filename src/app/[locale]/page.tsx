import {getTranslations} from "next-intl/server";
import {Link} from "@/i18n/routing";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import styles from './loading.module.css';

export default async function HomePage() {
    const t = await getTranslations("HomePage");
    return (
        <div>
            <div className={styles.loadingContainer}>
                <div className={styles.loadingBar}></div>
            </div>
            <h1>locale page {t("title")}</h1>
            <Link href="/about">{t("about")}</Link>
            <LanguageSwitcher/>
        </div>
    );
}
