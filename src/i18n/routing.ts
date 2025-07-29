import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // 支援的語系 - 這個會被 API 動態覆蓋
  locales: ['zh-TW', 'zh-CN', 'en', 'ja'],
  
  // 預設語系 - 這個也會被 API 動態覆蓋
  defaultLocale: 'zh-TW',
  
  // 預設語系不加前綴
  localePrefix: 'as-needed',
  
  // 啟用語系檢測
  localeDetection: true
});
