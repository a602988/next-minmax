import { headers } from 'next/headers';

export async function detectUserLocale(): Promise<string> {
  const headersList = await headers();
  
  // 1. 從 URL 路徑檢測語系
  const pathname = headersList.get('x-pathname') || '';
  const localeFromPath = extractLocaleFromPath(pathname);
  if (localeFromPath) return localeFromPath;
  
  // 2. 從 Accept-Language header 檢測
  const acceptLanguage = headersList.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = parseAcceptLanguage(acceptLanguage);
    if (preferredLocale) return preferredLocale;
  }
  
  // 3. 從地理位置檢測 (可選)
  const country = headersList.get('x-vercel-ip-country');
  if (country) {
    return mapCountryToLocale(country);
  }
  
  // 4. 返回預設語系
  return 'zh-TW';
}

function extractLocaleFromPath(pathname: string): string | null {
  const localeMatch = pathname.match(/^\/([a-z]{2}(-[A-Z]{2})?)/);
  return localeMatch ? localeMatch[1] : null;
}

function parseAcceptLanguage(acceptLanguage: string): string | null {
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim())
    .filter(Boolean);
  
  // 支援的語系列表 (從 API 獲取)
  const supportedLocales = ['zh-TW', 'zh-CN', 'en', 'ja'];
  
  for (const lang of languages) {
    if (supportedLocales.includes(lang)) {
      return lang;
    }
    // 處理簡化語系代碼
    const simpleLang = lang.split('-')[0];
    const matched = supportedLocales.find(locale => 
      locale.startsWith(simpleLang)
    );
    if (matched) return matched;
  }
  
  return null;
}

function mapCountryToLocale(country: string): string {
  const countryLocaleMap: Record<string, string> = {
    'TW': 'zh-TW',
    'CN': 'zh-CN',
    'HK': 'zh-TW',
    'MO': 'zh-TW',
    'US': 'en',
    'GB': 'en',
    'JP': 'ja',
    // 可以根據需要添加更多國家對應
  };
  
  return countryLocaleMap[country] || 'zh-TW';
}
