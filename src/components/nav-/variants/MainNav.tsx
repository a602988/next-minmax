'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useMemo, useState } from 'react';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import Nav from '../Nav';
import styles from './MainNav.module.css';

const CODE = 'web-header';

function MainNavT() {
    const params = useParams();
    const [menuData, setMenuData] = useState<Array<SystemMenuType>>([]);
    const lang = params.locale as string || process.env.DEFAULT_LOCALE  || "zh-TW";
    useEffect(() => {
        async function fetchMenuData() {
            const data = await getSystemMenu(lang);
            setMenuData(data);
        }
        fetchMenuData();
    }, [lang]);

    const mainMenu = useMemo(() =>
        menuData.find((item: SystemMenuType) => item.code === CODE),
        [menuData]
    );

    if (!mainMenu?.children?.length) return null;

    return <Nav ariaLabel={mainMenu.title} classNameWp={styles.mainNavWp}  className={styles.mainNav} items={mainMenu.children}/>;
}

export default MainNav;
