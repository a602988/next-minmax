// TypeScript
// features/locales/application/use-cases/resolveLocaleForSSR.ts
import { cookies } from 'next/headers';
import { localesRepository } from '@/features/locales/services/locales.repository';
import { languageRepository } from '@/features/language/services/language.repository';

type Input = {
    requestLocale?: string | null;   // 來自 URL
    detectedCountry?: string | null; // 來自 Geo（若有）
};

export async function resolveLocaleForSSR({ requestLocale, detectedCountry }: Input) {
    const languages = await languageRepository.getLanguages();
    const supported = languages.map(l => l.id);
    const dynamicDefault = languages.find(l => l.default)?.id ?? supported[0];

    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;

    const candidate =
        (requestLocale && supported.includes(requestLocale) && requestLocale) ||
        (cookieLocale && supported.includes(cookieLocale) && cookieLocale) ||
        (detectedCountry && (await localesRepository.getLocaleByCountry(detectedCountry))) ||
        dynamicDefault;

    const final = supported.includes(candidate!) ? candidate! : dynamicDefault!;
    return { locale: final };
}