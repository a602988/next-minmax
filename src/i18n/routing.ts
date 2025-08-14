import { defineRouting } from 'next-intl/routing';
import { LOCALE_CONFIG } from '@/config/locale.config';

export const routing = defineRouting({
  // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
  locales: LOCALE_CONFIG.SUPPORTED_LOCALES as [string, ...string[]],

  // 預設語系 - 從環境變數讀取，會被 API 動態覆蓋
  defaultLocale: LOCALE_CONFIG.DEFAULT_LOCALE,

  // 語系前綴模式 - 從環境變數讀取
  localePrefix: LOCALE_CONFIG.LOCALE_PREFIX_MODE,

  // 啟用語系檢測 - 從環境變數讀取
  localeDetection: LOCALE_CONFIG.DETECTION.ENABLED
});
