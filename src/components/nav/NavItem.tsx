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
    options?: Array<Option>;
  };
  className?: string;
  children?: React.ReactNode;
}

function NavItem({ children, className, item }: NavItemProps): React.ReactElement {
  const pathname = usePathname();

  // 判斷當前菜單項是否為活動狀態（當前頁面）
  const isActive = pathname === item.url;

  // 處理 options
  const [optionClass, restOptions] = React.useMemo(() => {
    if (!item.options || !Array.isArray(item.options)) return ['', {}];

    const classOption = item.options.find(opt => opt.key === 'class');
    const otherOptions = item.options.reduce((acc, opt) => {
      if (opt.key !== 'class') acc[opt.key] = opt.value;
      return acc;
    }, {} as Record<string, string>);
    return [classOption?.value || '', otherOptions];
  }, [item.options]);

  // 組合所有的 className
  const combinedClassName = `listItem ${className || ''} ${optionClass}`.trim();

  // 創建共同的屬性對象
  const commonProps = {
    className: combinedClassName,
    ...restOptions,
  };

  // 創建鏈接內容
  const linkContent = (
    <>
      {item.title}
      {children}
    </>
  );

  return (
    <li {...commonProps}>
      {isActive ? (
        <div
          aria-current="page"
          className="link"
        >
          {linkContent}
        </div>
      ) : (
        <Link
          className="link"
          href={item.url || '#'}
          target={item.target || '_self'}
        >
          {linkContent}
        </Link>
      )}
    </li>
  );
}

export default NavItem;
