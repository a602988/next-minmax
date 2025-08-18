import { defineRouting } from 'next-intl/routing';
import { serverLocaleConfig } from '@/config/';
import { env } from '@/env.mjs';
export const routing = defineRouting({
    // 支援的語系 - 從環境變數讀取，會被 API 動態覆蓋
    locales: serverLocaleConfig.supportedLocales,

    // 預設語系 - 先用 env，若不在支援清單內則回退第一個
    defaultLocale: serverLocaleConfig.isValidLocale(env.DEFAULT_LANGUAGE)
        ? env.DEFAULT_LANGUAGE
        : serverLocaleConfig.supportedLocales[0],


    // 語系前綴模式 - 從環境變數讀取
    localePrefix: env.LOCALE_PREFIX_MODE,

    // 啟用語系檢測 - 從環境變數讀取
    localeDetection: env.LOCALE_DETECTION_ENABLED
});