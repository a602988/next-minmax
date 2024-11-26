'use client';
import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useNav } from '@/context/NavContext';
import styles from './NavToggle.module.css';

type ThemeType = 'default' | 'twoBar' | 'custom';

interface Props {
  className?: string;
  theme?: ThemeType;
  customIcon?: ReactNode;
}

function IconBar() {
  return (
    <span aria-hidden="true" className={styles.icon}>
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
    </span>
  );
}

function IconBarTwo() {
  return (
    <span aria-hidden="true" className={styles.iconTwo}>
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
    </span>
  );
}

function getNavToggleIcon(theme: ThemeType, customIcon?: ReactNode) {
  switch (theme) {
    case 'twoBar':
      return <IconBarTwo />;
    case 'custom':
      return customIcon || <IconBar />;
    case 'default':
    default:
      return <IconBar />;
  }
}

export default function NavToggle({ className = '', theme = 'default', customIcon }: Props) {
  const { isNavOpen, toggleNav } = useNav();
  const t = useTranslations('NavToggle');

  return (
    <button
      aria-expanded={isNavOpen}
      aria-label={isNavOpen ? t('closeNav') : t('openNav')}
      className={`${styles.navToggle} ${className}`}
      onClick={toggleNav}
      type="button"
    >
      {getNavToggleIcon(theme, customIcon)}
    </button>
  )
}
