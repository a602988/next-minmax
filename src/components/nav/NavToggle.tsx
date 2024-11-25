"use client"
import { useEffect } from 'react';
import { useNav } from '@/context/NavContext';
import styles from './NavToggle.module.css'

interface NavToggleProps {
  desktopBreakpoint?: number;
  autoCloseOnDesktop?: boolean;
}

export default function NavToggle({
  autoCloseOnDesktop = true,
  desktopBreakpoint = 1280
}: NavToggleProps) {
  const { isNavOpen, toggleNav } = useNav();

  const handleToggle = () => {
    toggleNav();
    console.log('toggleNav');
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isNavOpen) {
        handleToggle();
      }
    }

    function handleResize(e: MediaQueryList | MediaQueryListEvent) {
      if (e.matches && autoCloseOnDesktop && isNavOpen) {
        handleToggle();
      }
    }

    const mediaQuery = window.matchMedia(`(min-width: ${desktopBreakpoint}px)`);

    document.addEventListener('keydown', handleEscape);
    mediaQuery.addEventListener('change', handleResize);

    // 初始檢查
    handleResize(mediaQuery);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [isNavOpen, handleToggle, desktopBreakpoint, autoCloseOnDesktop]);

  return (
    <button
      aria-expanded={isNavOpen}
      aria-label="Toggle navigation"
      className={`${styles.navToggle} ${isNavOpen ? styles.isOpen : ''}`}
      onClick={toggleNav}
      type="button"
    >
      <p className="text-white">{isNavOpen ? 'Close Nav' : 'Open Nav'}</p>

      <span className={styles.icon}>
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
      </span>
    </button>
  )
}
