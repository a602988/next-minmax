'use client'
import React, { useEffect, useMemo, useState } from 'react';
import { getSystemMenu } from '@/services/getSystemMenu';
import { SystemMenuType } from '@/types/systemMenuType';
import Nav from './common/Nav';

const CODE = 'web-header';

const MainNav: React.FC = React.memo(() => {
    const [menuData, setMenuData] = useState<Array<SystemMenuType>>([]);

    useEffect(() => {
        function fetchMenuData() {
            return async function fetchData() {
                const data = await getSystemMenu();
                setMenuData(data);
            };
        }
        fetchMenuData()();
    }, []);

    const mainMenu = useMemo(() =>
        menuData.find((item: SystemMenuType) => item.code === CODE),
        [menuData]
    );

    if (!mainMenu?.children?.length) return null;

    return <Nav ariaLabel={mainMenu.title} items={mainMenu.children} />;
});

MainNav.displayName = 'MainNav';

export default MainNav;
