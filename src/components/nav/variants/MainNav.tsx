'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import Nav from '../Nav';
import styles from './MainNav.module.css';

const CODE = 'web-header';

function MainNav() {
    const [menuData, setMenuData] = useState<Array<SystemMenuType>>([]);

    useEffect(() => {
        async function fetchMenuData() {
            const data = await getSystemMenu();
            setMenuData(data);
        }
        fetchMenuData();
    }, []);

    const mainMenu = useMemo(() =>
        menuData.find((item: SystemMenuType) => item.code === CODE),
        [menuData]
    );

    if (!mainMenu?.children?.length) return null;

    return <Nav ariaLabel={mainMenu.title}  className={styles.MainNav} items={mainMenu.children}/>;
}

export default MainNav;
