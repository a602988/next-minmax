/**
 * 主選單 組件
 * - 設定資料取得的名稱
 * - 資料帶入
 */

import React from 'react';
import Nav from '@/components/nav/Nav';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import styles from './MainNav.module.css';


const CODE = 'web-header-events';

interface Props {
  className?: string;
}

async function BlogNav({ className }: Props){
  const menuData = await getSystemMenu();
  const mainMenu = menuData.find((item: SystemMenuType) => item.code === CODE);

  if (!mainMenu?.children?.length) return null;

  return (
    <Nav
      ariaLabel={mainMenu.title}
      className={styles.mainNav}
      classNameWp={className}
      enableAd={false}
      items={mainMenu.children}
      maxDepth={0}
    />
  );
}

export default BlogNav;
