'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import NavAd from '../NavAd';
import styles from './MainNav.module.css';

const CODE = 'web-header';

// 簡單的廣告組件
function SecondLevelAd({ item }: { item: SystemMenuType }) {
  return (
    <div className={styles.secondLevelAd}>
      <h3>ad SecondLevelAd {item.title}</h3>
    </div>
  );
}

function ThirdLevelAd({item}: {item: SystemMenuType}) {
  return (
    <div className={styles.thirdLevelAd}>
      <h3>ad ThirdLevelAd {item.title}</h3>
    </div>
  );
}

function MainNavAd() {
  const params = useParams();
  const [menuData, setMenuData] = useState<Array<SystemMenuType>>([]);
  const lang =
    (params.locale as string) || process.env.DEFAULT_LOCALE || 'zh-TW';
  useEffect(() => {
    async function fetchMenuData() {
      const data = await getSystemMenu(lang);
      setMenuData(data);
    }
    fetchMenuData();
  }, [lang]);

  const mainMenu = useMemo(
    () => menuData.find((item: SystemMenuType) => item.code === CODE),
    [menuData]
  );

  if (!mainMenu?.children?.length) return null;

  return (
    <NavAd
      AdComponent={({depth, item}) => {
        if (depth === 1) {
          return <SecondLevelAd item={item} />;
        } else if (depth === 2) {
          return <ThirdLevelAd item={item} />;
        }
        return null;
      }}
      ariaLabel={mainMenu.title}
      className={styles.mainNav}
      classNameWp={styles.mainNavWp}
      items={mainMenu.children}
    />
  );
}

export default MainNavAd;
