import React from 'react';
import { SystemMenuType } from '@/types/systemMenuType';
import NavItem from './NavItem';

interface NavProps {
    ariaLabel?: string;
    className?: string;
    id?: string;
    items: Array<SystemMenuType>;
}

function Nav({
    ariaLabel = "Main Navigation",
    className = "flex",
    id,
    items
}: NavProps){
    function renderMenuItem(item: SystemMenuType, depth: number) {
        return (
            <React.Fragment key={item.code}>
                <NavItem item={item} />
                {item.children && item.children.length > 0 && (
                    <ul className={`sub-${depth + 1}`}>
                        {item.children.map((child) => renderMenuItem(child, depth + 1))}
                    </ul>
                )}
            </React.Fragment>
        );
    }

    return (
        <nav aria-label={ariaLabel}>
            <ul className={className} id={id}>
                {items.map((item) => renderMenuItem(item, 0))}
            </ul>
        </nav>
    );
}

export default Nav;
