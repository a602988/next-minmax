import React from 'react';
import Nav from '@/components/nav/Nav';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import styles from './MainNav.module.css';

const CODE = 'web-header';

interface MainNavProps {
  dataSource?: 'api' | 'json';
  lang: string;
}

async function getMenuData(lang: string, dataSource: 'api' | 'json') {
  return await getSystemMenu(lang, dataSource);
}

async function MainNav({ dataSource = 'api', lang }: MainNavProps) {
  const menuData = await getMenuData(lang, dataSource);
  const mainMenu = menuData.find((item: SystemMenuType) => item.code === CODE);

  if (!mainMenu?.children?.length) return null;

  return (
    <Nav
      ariaLabel={mainMenu.title}
      className={styles.mainNav}
      classNameWp={styles.mainNavWp}
      enableAd={false}
      items={mainMenu.children}
      maxDepth={0}
    />
  );
}

export default MainNav;
