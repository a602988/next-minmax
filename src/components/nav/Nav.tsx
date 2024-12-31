/**
 * Nav 組件
 *
 * 這個組件負責渲染主導航菜單。它的主要功能包括：
 * - 多層：處理多層次的子菜單結構
 * - seo：為導航元素設置適當的 ARIA 屬性以提高可訪問性
 * - 樣式：可設定樣式帶入
 */

import React from 'react';
import { SystemMenuType } from '@/types/systemMenuType';
import NavItem from './NavItem';

// 定義 AdComponentProps 類型
interface AdComponentProps {
  depth: number;
  item: SystemMenuType;
}

interface Props {
  ariaLabel?: string;
  className?: string;
  classNameWp?: string;
  id?: string;
  items: Array<SystemMenuType>;
  AdComponent?: React.ComponentType<AdComponentProps>;
  enableAd?: boolean; // 是否啟用廣告
  maxDepth?: number; // 新增：控制選單顯示的最大層數
}

function Nav({
               AdComponent,
               ariaLabel = "Main Navigation",
               className = "flex",
               classNameWp = "",
               enableAd = true, // 設置設值為 true，表示啟用廣告
               id,
               items,
               maxDepth = Infinity // 設置預設值為 Infinity，表示默認顯示所有層級
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
        >
          {children && children.length > 0 && depth < maxDepth && (
            <div className={`submenu-wp-${depth + 1}`}>
              <ul
                aria-label={`${title} submenu`}
                className={`submenu-${depth + 1}`}
                role="menu"
              >
                {children.map((child) => renderMenuItem(child, depth + 1))}
              </ul>
              {enableAd && AdComponent && (
                <AdComponent depth={depth + 1} item={item} />
              )}
            </div>
          )}
        </NavItem>
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
