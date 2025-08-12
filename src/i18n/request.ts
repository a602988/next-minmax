import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import {routing} from './routing';
import {I18nIntegrationService} from '@/services/i18n-integration.service';
import {LOCALE_CONFIG} from '@/config';

export default getRequestConfig(async ({requestLocale}) => {
    const requested = await requestLocale;

    // 1) 取得動態有效語系與動態預設語系（內含快取）
    let supportedLocales: string[] = [];
    let dynamicDefaultLocale: string = routing.defaultLocale;

    try {
        supportedLocales = await I18nIntegrationService.getSupportedLocales();
        dynamicDefaultLocale = await I18nIntegrationService.getDefaultLocale();
    } catch (e) {
        // 動態載入失敗時，使用 routing 的靜態預設作為兜底
        console.warn('⚠️ 載入動態 locales 失敗，使用靜態 routing 作為兜底', e);
        supportedLocales = [...routing.locales]; // Create a mutable copy
        dynamicDefaultLocale = routing.defaultLocale;
    }

    // 2) 依優先序決定候選語系：URL → Cookie → 動態預設 → 靜態預設
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
    const candidate =
        requested ||
        (LOCALE_CONFIG.DETECTION.ENABLED ? cookieLocale : undefined) ||
        dynamicDefaultLocale ||
        routing.defaultLocale;

    // 3) 嚴格以 supportedLocales 驗證，非法則回退至 dynamicDefault → routing.defaultLocale
    const isValid = supportedLocales.includes(candidate);
    const locale = isValid
        ? candidate
        : (supportedLocales.includes(dynamicDefaultLocale)
            ? dynamicDefaultLocale
            : routing.defaultLocale);

    // 4) 載入對應 messages，失敗時回退到 default messages
    let messages: Record<string, unknown>;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (e) {
        console.warn(`⚠️ 找不到 ${locale}.json，回退至 ${routing.defaultLocale}.json`, e);
        messages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;
    }

    if (process.env.NODE_ENV !== 'production') {
        console.log(`🌍 語系決策: requested=${requested} cookie=${cookieLocale} final=${locale}`);
    }

    return {
        locale,
        messages
    };
});