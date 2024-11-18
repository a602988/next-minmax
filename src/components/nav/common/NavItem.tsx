import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react';
import { Option, SystemMenuType } from '@/types/systemMenuType';
import styles from './NavItem.module.css';

interface NavItemProps {
  item: SystemMenuType;
  className?: string;
  children?: React.ReactNode;
}

function NavItem({ children, className, item }: NavItemProps): React.ReactElement {
  const pathname = usePathname();

  // 判斷當前菜單項是否為活動狀態（當前頁面）
  const isActive = pathname === item.url;

  // 解析和處理菜單項的額外選項
  const optionsAttributes = React.useMemo<Record<string, string>>(() => {
    if (!item.options) return {};

    let parsedOptions: Array<Option>;

    if (typeof item.options === 'string') {
      try {
        parsedOptions = JSON.parse(item.options);
      } catch (error) {
        console.error('解析選項時出錯:', error);
        return {};
      }
    } else if (Array.isArray(item.options)) {
      parsedOptions = item.options;
    } else {
      console.error('無效的選項格式');
      return {};
    }

    return Object.fromEntries(parsedOptions.map(option => [option.key, option.value]));
  }, [item.options]);

  // 從 optionsAttributes 中分離出 class，其餘屬性保留在 commonProps 中
  const { class: optionClass, ...commonProps } = optionsAttributes;

  // 組合所有的 className
  const combinedClassName = `${styles.listItem} ${className || ''} ${optionClass || ''}`.trim();

    return (
    <li className={combinedClassName} {...commonProps}>
      {item.url && !isActive ? (
        <>
          <Link
            className={styles.link}
            href={item.url}
            target={item.target || '_self'}
          >
            <span className={styles.title}>{item.title}</span>
          </Link>
          {children}
        </>
      ) : (
        <div
          aria-current={isActive ? 'page' : undefined}
          className={styles.link}
        >
          <span className={styles.title}>{item.title}</span>
          {children}
        </div>
      )}
    </li>
  );
}

export default NavItem;
