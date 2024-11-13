const availableLocalesRaw = process.env.AVAILABLE_LOCALES
  ? process.env.AVAILABLE_LOCALES.split(/\s+/)
  : ['zh-TW'];

export const locales: ReadonlyArray<string> = availableLocalesRaw;

export const defaultLocale = process.env.DEFAULT_LOCALE  || 'zh-TW';

export type Locale = typeof locales[number];
