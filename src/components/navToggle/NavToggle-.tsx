'use client';
import { useTranslations } from 'next-intl';
import { useNav } from '@/context/NavContext';
import styles from './NavToggle.module.css';

interface Props {
  className?: string;
}

export default function NavToggle({ className = '' }: Props) {
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
      <span aria-hidden="true" className={styles.icon}>
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
      </span>
    </button>
  )
}
