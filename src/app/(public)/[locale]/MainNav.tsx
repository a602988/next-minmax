'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import Nav from '@/components/nav/Nav';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import styles from './MainNav.module.css';

const CODE = 'web-header';

function MainNav() {
    const params = useParams();
    const [menuData, setMenuData] = useState<Array<SystemMenuType>>([]);
    const lang = params.locale;
    useEffect(() => {
        async function fetchMenuData() {
            if (typeof lang === 'string') {
                const data = await getSystemMenu(lang);
                setMenuData(data);
            } else if (Array.isArray(lang) && lang.length > 0) {
                const data = await getSystemMenu(lang[0]);
                setMenuData(data);
            }
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
