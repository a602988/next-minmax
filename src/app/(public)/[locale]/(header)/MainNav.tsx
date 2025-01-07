import React from 'react';
import Nav from '@/components/nav/Nav';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import styles from './MainNav.module.css';

const CODE = 'web-header';

async function getMenuData() {
  return await getSystemMenu();
}

async function MainNav() {
  const menuData = await getMenuData();
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
