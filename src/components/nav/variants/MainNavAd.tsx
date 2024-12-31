'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import Nav from '../Nav';
import styles from './MainNav.module.css';

const CODE = 'web-header';

// 簡單的廣告組件
function Ad() {
  return (
    <div>
      <h3>ad 1</h3>
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
    <Nav
      AdComponent={({depth}) => {
        if (depth === 1) {
          return ''; // 第一層廣告無內容
        } else if (depth === 2) {
          return <Ad/>; // 第2層廣告內容
        }
        return null;
      }}
      ariaLabel={mainMenu.title}
      className={styles.mainNav}
      classNameWp={styles.mainNavWp}
      items={mainMenu.children}
      maxDepth={3}
    />
  );
}

export default MainNavAd;
