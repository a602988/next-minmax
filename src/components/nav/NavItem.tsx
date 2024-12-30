/**
 * NavItem Component
 *
 * - 該頁判斷：判斷是否目前網址為該頁，不需要有link，且增加`aria-current`
 * - data 屬性擴充：資料來源可能會有屬性的設定，例如data-color 或者其他應用的屬性
 * - 樣式：可設定樣式帶入
 * - 子元件：可放入子元件
 *
 */


import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react';

interface Option {
  key: string;
  value: string;
}

interface NavItemProps {
  item: {
    title: string;
    url: string;
    target?: string;
    options?: Array<Option> | string | null;
  };
  className?: string;
  children?: React.ReactNode;
}

function NavItem({ children, className, item }: NavItemProps): React.ReactElement {
  const pathname = usePathname();

  // 判斷當前菜單項是否為活動狀態（當前頁面）
  const isActive = item.url && pathname === item.url;

  // 解析和處理菜單項的額外選項
  const { optionAttributes, optionClass } = React.useMemo(() => {
    let resultClass = '';
    const resultAttributes: Record<string, string> = {};

    if (item.options) {
      try {
        const parsedOptions: Array<Option> = Array.isArray(item.options)
          ? item.options
          : JSON.parse(item.options);

        parsedOptions.forEach(option => {
          if (option.key === 'class') {
            resultClass = option.value;
          } else {
            resultAttributes[option.key] = option.value;
          }
        });
      } catch (error) {
        console.error('navItem option:', error);
      }
    }

    return { optionAttributes: resultAttributes, optionClass: resultClass };
  }, [item.options]);

  // 組合所有的 className
  const combinedClassName = `listItem ${className || ''} ${optionClass}`.trim();


  return (
    <li className={combinedClassName} {...optionAttributes}>
      {item.url && !isActive ? (
        <Link
          className="link"
          href={item.url}
          target={item.target || '_self'}
        >
          {item.title}
        </Link>
      ) : (
        <div
          aria-current={isActive ? 'page' : undefined}
          className="link"
        >
          {item.title}
        </div>
      )}
      {children}
    </li>
  );
}

export default NavItem;
