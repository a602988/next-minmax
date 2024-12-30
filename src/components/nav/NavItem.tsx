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
    options?: Option[] | null;
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
        const parsedOptions: Array<Option> = typeof item.options === 'string'
          ? JSON.parse(item.options)
          : item.options;

        parsedOptions.forEach(option => {
          if (option.key === 'class') {
            resultClass = option.value;
          } else {
            resultAttributes[option.key] = option.value;
          }
        });
      } catch (error) {
        console.error('解析選項時出錯:', error);
      }
    }

    return { optionAttributes: resultAttributes, optionClass: resultClass };
  }, [item.options]);

  // 組合所有的 className
  const combinedClassName = `listItem ${className || ''} ${optionClass}`.trim();

  const linkContent = (
    <>
      {item.title}
      {children}
    </>
  );

  return (
    <li className={combinedClassName} {...optionAttributes}>
      {item.url && !isActive ? (
        <Link
          className="link"
          href={item.url}
          target={item.target || '_self'}
        >
          {linkContent}
        </Link>
      ) : (
        <div
          aria-current={isActive ? 'page' : undefined}
          className="link"
        >
          {linkContent}
        </div>
      )}
    </li>
  );
}

export default NavItem;
