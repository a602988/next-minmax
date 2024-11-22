"use client"
import { useCallback, useEffect, useState } from 'react';
import styles from './NavToggle.module.css'


interface NavToggleProps {
  desktopBreakpoint?: number;  // 桌機的大小判斷
  autoCloseOnDesktop?: boolean; // 是否桌機時自動關閉選單
}

export default function NavToggle({
  autoCloseOnDesktop = true,
  desktopBreakpoint = 1280
}: NavToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = useCallback(() => {
    setIsOpen(prevState => {
      const newState = !prevState;
      document.body.classList.toggle('nav-open', newState);
      return newState;
    });
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        toggleNav();
      }
    }

    function handleResize(e: MediaQueryList | MediaQueryListEvent) {
      if (e.matches && autoCloseOnDesktop) {
        // 只有在 autoCloseOnDesktop 為 true 時才自動關閉
        document.body.classList.remove('nav-open');
        setIsOpen(false);
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
      document.body.classList.remove('nav-open');
    };
  }, [isOpen, toggleNav, desktopBreakpoint, autoCloseOnDesktop]);

  return (
    <button
      aria-expanded={isOpen}
      aria-label="Toggle navigation"
      className={`${styles.navToggle} ${isOpen ? styles.isOpen : ''}`}
      onClick={toggleNav}
      type="button"
    >
      <span className={styles.icon}>
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
        <span className={styles.iconBar} />
      </span>
    </button>
  )
}
