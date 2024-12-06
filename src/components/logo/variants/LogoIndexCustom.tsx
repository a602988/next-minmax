'use client'
import { useEffect, useState } from 'react';
import logoImages from "@/assets/images/logo-mobile.svg";
import logoText from "@/assets/images/logoText.svg";
import { getWebData } from '@/services/getWebData';
import styles from './LogoIndexCustom.module.css';

export default function LogoIndexCustom() {
  const [data, setData] = useState({ site_title: '' });

  useEffect(() => {
    async function fetchData() {
      const webData = await getWebData();
      setData(webData);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.logoContainer}>
      <img alt={data.site_title} className={styles.logoImage} src={logoImages} />
      <img alt={data.site_title} className={styles.logoText} src={logoText} />
    </div>
  );
}
