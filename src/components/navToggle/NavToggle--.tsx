import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
import { useNav } from '@/context/NavContext';
import styles from './NavToggle.module.css';

interface Props {
  children?: ReactNode;
  className?: string;
  variant?: 'default' | 'icon';
}

function NavToggleIcon() {
  return (
    <span aria-hidden="true" className={styles.icon}>
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
      <span className={styles.iconBar} />
    </span>
  );
}

const variants: Record<string, ReactNode> = {
  default: <NavToggleIcon />,
  icon: <NavToggleIcon />,
};

export default function NavToggle({ children, className = '', variant = 'default' }: Props) {
  const { isNavOpen, toggleNav } = useNav();
  const t = useTranslations('NavToggle');

  return (
    <button
      aria-expanded={isNavOpen}
      aria-label={isNavOpen ? t('closeNav') : t('openNav')}
      className={`${styles.navToggle} ${className} ${styles[variant]}`}
      onClick={toggleNav}
      type="button"
    >
      {children || variants[variant]}
    </button>
  )
}
