'use client';

import React, { useState, useRef, useEffect, KeyboardEvent, useCallback } from 'react';
import { Link } from '@/i18n/routing';
import styles from './LanguageSwitcherDropdown.module.css';
import { LanguageOption } from '@/services/minmax/types/language';


interface LanguageSwitcherDropdownProps {
  languageOptions: LanguageOption[];
  currentLanguage: LanguageOption;
  pathnameWithoutLocale: string;
  isPending: boolean;
  handleLanguageChange: (newLocale: string) => void;
  className?: string;
  translations: {
    select: string;
    'aria-label': string;
    switch: string;
  };
}

export default function LanguageSwitcherDropdown({
   languageOptions,
   currentLanguage,
   pathnameWithoutLocale,
   isPending,
   handleLanguageChange,
   className = '',
   translations,
 }: LanguageSwitcherDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);
  // 處理鍵盤導航
  const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLButtonElement | HTMLDivElement | HTMLUListElement>) => {
      if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
        setIsOpen(true);
        e.preventDefault();
        return;
      }
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          setIsOpen(false);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(prev => (prev < languageOptions.length - 1 ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(prev => (prev > 0 ? prev - 1 : languageOptions.length - 1));
          break;
        case 'Enter':
        case ' ':
          if (activeIndex >= 0) {
            e.preventDefault();
            handleLanguageChange(languageOptions[activeIndex].id);
            setIsOpen(false);
          }
          break;
        case 'Tab':
          if (!e.shiftKey) {
            setIsOpen(false);
          }
          break;
        default:
          break;
      }
    },
    [activeIndex, isOpen, languageOptions, handleLanguageChange]
  );

  // 每次下拉選單開關時重置活動索引
  useEffect(() => {
    setActiveIndex(-1);
  }, [isOpen]);

  // 當活動索引變化時，自動聚焦對應的選項
  useEffect(() => {
    if (isOpen && activeIndex >= 0 && optionRefs.current[activeIndex]) {
      optionRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isOpen]);

  // 點擊外部時關閉下拉選單
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
      <div className={`${styles.container} ${className}`} ref={dropdownRef}>
        <button
            type="button"
            className={`${styles.dropdownButton} ${isPending ? styles.pending : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            onKeyDown={handleKeyDown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            disabled={isPending}
            aria-label={translations.select}
        >
        <span className="flex items-center">
          <span>{currentLanguage.title}</span>
        </span>
        </button>

        {isOpen && (
            <ul
                className={styles.dropdown}
                role="listbox"
                aria-label={translations['aria-label']}
                aria-activedescendant={
                  activeIndex >= 0 ? `language-option-${languageOptions[activeIndex].id}` : undefined
                }
                tabIndex={-1}
                onKeyDown={handleKeyDown}
            >
              {languageOptions.map((option, index) => (
                  <li
                      key={option.id}
                      id={`language-option-${option.id}`}
                      className={`${styles.dropdownItem} ${
                          option.current ? styles.dropdownItemActive : ''
                      } ${activeIndex === index ? styles.dropdownItemFocused : ''}`}
                      role="option"
                      aria-selected={option.current}
                      tabIndex={-1}
                      ref={el => {
                        optionRefs.current[index] = el;
                      }}
                  >
                    <Link
                        href={pathnameWithoutLocale}
                        locale={option.id}
                        onClick={() => {
                          handleLanguageChange(option.id);
                          setIsOpen(false);
                        }}
                        className="block w-full h-full"
                        lang={option.id}
                        hrefLang={option.id}
                        title={`${translations.switch} ${option.title}`}
                    >
                      <div className="flex items-center">
                  <span className={option.current ? styles.itemTextActive : styles.itemText}>
                    {option.title}
                  </span>
                      </div>
                    </Link>
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
}
