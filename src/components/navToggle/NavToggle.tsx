'use client';
import { useTranslations } from 'next-intl';
import { ReactNode} from 'react';
import { useNav } from '@/context/NavContext';
import styles from './NavToggle.module.css';

interface Props {
  className?: string;
  theme?: 'default' | 'twoBar' | 'custom';
  customIcon?: ReactNode;
}

function IconBox() {
  return (
    <span aria-hidden="true" className={styles.iconBox}>
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
    </span>
  );
}

function IconBoxTwo() {
  return (
    <span aria-hidden="true" className={styles.iconBoxTwo}>
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
    </span>
  );
}

function getNavToggleIcon(theme: Props['theme'], customIcon?: ReactNode) {
  // 使用 if-else 語句替代 switch，避免 exhaustiveness 檢查問題
  if (theme === 'twoBar') {
    return <IconBoxTwo />;
  } else if (theme === 'custom') {
    return customIcon || <IconBox />;
  } else {
    return <IconBox />;
  }
}
export default function NavToggle({ className = '', customIcon, theme}: Props) {
  const { isNavOpen, toggleNav } = useNav();
  const t = useTranslations('NavToggle');


  const icon = getNavToggleIcon(theme, customIcon);

  return (
    <button
      aria-expanded={isNavOpen}
      aria-label={isNavOpen ? t('closeNav') : t('openNav')}
      className={`${styles.navToggle} ${className}`}
      onClick={toggleNav}
      type="button"
    >
      {icon}
    </button>
  )
}
