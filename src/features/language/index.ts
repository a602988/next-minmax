//  對外匯出整合（barrel）
export * from './services';       // 子 barrel，會指向 ./services/index.ts
export { default as LanguageSwitcher } from './components/LanguageSwitcher';
export { default as LanguageSwitcherContainer } from './components/LanguageSwitcherContainer';
export { useLanguageSwitcher } from './hooks';
export { getLanguagesForSSR } from './lib/getLanguagesForSSR';