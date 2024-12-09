'use client'
import { useEffect, useState } from 'react';
import LogoImages from "@/assets/images/logo-mobile.svg";
import LogoText from "@/assets/images/logoText.svg";
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
    <div className={styles.logo}>
      <LogoImages
        alt="Logo"
        className={styles.logoImage}

      />
      <LogoText
        alt={data.site_title}
        className={styles.logoText}
      />
    </div>
  );
}
