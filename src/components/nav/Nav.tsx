/**
 * Nav 組件
 *
 * 這個組件負責渲染主導航菜單。它的主要功能包括：
 * - 處理多層次的子菜單結構
 * - 為導航元素設置適當的 ARIA 屬性以提高可訪問性
 *
 * @param {Props} props - 組件的屬性
 * @returns {JSX.Element} 渲染的導航菜單
 */

import React from 'react';
import { SystemMenuType } from '@/types/systemMenuType';
import NavItem from './NavItem';

interface Props {
    ariaLabel?: string;
    className?: string;
    classNameWp?: string;
    id?: string;
    items: Array<SystemMenuType>;
}

function Nav({
    ariaLabel = "Main Navigation",
    className = "flex",
    classNameWp = "",
    id,
    items
}: Props) {
  function renderMenuItem(item: SystemMenuType, depth: number) {
    const {children, code, options, target, title, url} = item;

    return (
      <React.Fragment key={code}>
        <NavItem
          item={{
            title,
            url: url || '',
            options,
            target
          }}
        />
        {children && children.length > 0 && (
          <ul
            aria-label={`${title} submenu`}
            className={`sub-${depth + 1}`}
            role="menu"
          >
            {children.map((child) => renderMenuItem(child, depth + 1))}
          </ul>
        )}
      </React.Fragment>
    );
  }

  return (
    <nav aria-label={ariaLabel} className={classNameWp} role="navigation">
      <ul className={className} id={id} role="menubar">
        {items.map((item) => renderMenuItem(item, 0))}
      </ul>
    </nav>
  );
}

export default Nav;
