import { NextRequest, NextResponse } from 'next/server';
import { getLocaleConfig, STATIC_LOCALE_CONFIG, LocaleConfig } from '@/lib/locale-config';

// 快取語系配置
let cachedLocaleConfig: LocaleConfig | null = null;
let cacheExpiry = 0;

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 獲取語系配置（帶快取）
  const localeConfig = await getCachedLocaleConfig();

  // 檢查 URL 是否已經有語系前綴
  const hasLocalePrefix = new RegExp(`^\\/(${localeConfig.supportedLocales.join('|')})(\\/|$)`).test(pathname);

  if (!hasLocalePrefix) {
    // 檢查用戶偏好語系
    const userPreferredLocale = getUserPreferredLocale(request, localeConfig.supportedLocales);

    let targetLocale: string;

    if (userPreferredLocale) {
        targetLocale = userPreferredLocale; // 優先使用 cookie 中的語系
    } else {
      // 自動檢測語系，使用 API 的預設語系作為後備
      targetLocale = await detectUserLocale(request, localeConfig);
    }

    // 重定向到目標語系
    const newUrl = new URL(`/${targetLocale}${pathname}`, request.url);
    const response = NextResponse.redirect(newUrl);

    // 記錄語系選擇
    if (!userPreferredLocale) {
      response.cookies.set('preferred-locale', targetLocale, {
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
    }

    return response;
  }

  // 更新 cookie 如果用戶切換了語系
  const currentLocale = extractLocaleFromPath(pathname, localeConfig.supportedLocales);
  const storedLocale = getUserPreferredLocale(request, localeConfig.supportedLocales);

  if (currentLocale && currentLocale !== storedLocale) {
    const response = NextResponse.next();
    response.cookies.set('preferred-locale', currentLocale, {
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
    return response;
  }

  return NextResponse.next();
}

// 帶快取的語系配置獲取
async function getCachedLocaleConfig(): Promise<LocaleConfig> {
  const now = Date.now();

  // 如果快取還有效，直接返回
  if (cachedLocaleConfig && now < cacheExpiry) {
    return cachedLocaleConfig;
  }

  try {
    // 嘗試從 API 獲取
    const config = await getLocaleConfig();
    cachedLocaleConfig = config;
    cacheExpiry = now + (60 * 60 * 1000); // 1小時快取
    return config;
  } catch (error) {
    console.warn('Failed to get locale config, using static fallback');
    return STATIC_LOCALE_CONFIG;
  }
}

// 自動檢測用戶語系
async function detectUserLocale(request: NextRequest, localeConfig: LocaleConfig): Promise<string> {
  // 1. 檢查 Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = parseAcceptLanguage(acceptLanguage, localeConfig.supportedLocales);
    if (preferredLocale) return preferredLocale;
  }

  // 2. 檢查地理位置 (從 headers 獲取)
  const country = getCountryFromHeaders(request);
  if (country) {
    const localeFromCountry = mapCountryToLocale(country, localeConfig.supportedLocales);
    if (localeFromCountry) return localeFromCountry;
  }

  // 3. 使用 API 的預設語系
  return localeConfig.defaultLocale;
}

// 從 headers 獲取國家資訊
function getCountryFromHeaders(request: NextRequest): string | null {
  // Vercel 提供的地理位置 headers
  const vercelCountry = request.headers.get('x-vercel-ip-country');
  if (vercelCountry) return vercelCountry;

  // Cloudflare 提供的地理位置 headers
  const cloudflareCountry = request.headers.get('cf-ipcountry');
  if (cloudflareCountry) return cloudflareCountry;

  // 其他可能的 headers
  const customCountry = request.headers.get('x-country-code');
  if (customCountry) return customCountry;

  return null;
}

// 用戶已選擇的語系 (Cookie) 檢測
function getUserPreferredLocale(request: NextRequest, supportedLocales: string[]): string | null {
    // 從 cookie 中讀取用戶之前選擇的語系
    const preferredLocale = request.cookies.get('preferred-locale')?.value;

    // 驗證語系是否在支援列表中
    if (preferredLocale && supportedLocales.includes(preferredLocale)) {
        return preferredLocale;
    }

    return null;
}

function extractLocaleFromPath(pathname: string, supportedLocales: string[]): string | null {
  const localeMatch = pathname.match(new RegExp(`^\\/(${supportedLocales.join('|')})`));
  return localeMatch ? localeMatch[1] : null;
}

// 瀏覽器語言偏好 (Accept-Language) 檢測

function parseAcceptLanguage(acceptLanguage: string, supportedLocales: string[]): string | null {
  // 解析 Accept-Language header
  // 例如: "zh-TW,zh;q=0.9,en;q=0.8,ja;q=0.7"
  const languages = acceptLanguage
    .split(',')                    // 分割多個語言
    .map(lang => lang.split(';')[0].trim()) // 移除權重 (q值)
    .filter(Boolean);              // 過濾空值

  for (const lang of languages) {
    // 完全匹配 (例如: zh-TW)
    if (supportedLocales.includes(lang)) {
      return lang;
    }

    // 部分匹配 (例如: zh 匹配到 zh-TW)
    const simpleLang = lang.split('-')[0];
    const matched = supportedLocales.find(locale => locale.startsWith(simpleLang));
    if (matched) return matched;
  }

  return null;
}

function mapCountryToLocale(country: string, supportedLocales: string[]): string | null {
  const countryLocaleMap: Record<string, string> = {
    'TW': 'zh-TW',
    'CN': 'zh-CN',
    'HK': 'zh-TW',
    'MO': 'zh-TW',
    'US': 'en',
    'GB': 'en',
    'CA': 'en',
    'AU': 'en',
    'JP': 'ja',
    'KR': 'en',
    'SG': 'zh-TW',
  };

  const mappedLocale = countryLocaleMap[country];
  return mappedLocale && supportedLocales.includes(mappedLocale) ? mappedLocale : null;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|robots.txt|sitemap.xml).*)',
  ],
};
