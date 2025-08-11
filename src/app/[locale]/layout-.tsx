import {setRequestLocale} from 'next-intl/server'; // 靜態渲染
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from 'next'
import { I18nProvider } from '@/providers/I18nProvider';
import { I18nIntegrationService } from '@/services/i18n-integration.service';
import { LOCALE_CONFIG } from '@/config';
import { Language } from '@/types';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 頁面 meta 設置，以設置面標題、描述等等。
export const metadata: Metadata = {
    title: {
        default: '我的網站', // 這是預設標題
        template: '%s | 我的網站', // 如果頁面有自己的 title，會以此模板顯示
    },
    description: '這是我網站的預設描述。',
    keywords: ['Next.js', 'React', '開發'],
    openGraph: {
        type: 'website',
        locale: 'zh_TW',
        url: 'https://yourwebsite.com',
        siteName: '我的網站',
    },
}

// 這個函數用於靜態生成時，為每個語言創建對應的頁面
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}




export default async function LocaleLayout({
     children,
     params
   }: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  // 驗證 locale 是否有效
  const {locale} = await params;

  // 更嚴格的類型檢查
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


    // 🔄 SSR 階段預載語系資料
    let languages: Language[] = [];
    try {
        if (LOCALE_CONFIG.DETECTION.ENABLED) {
            languages = await I18nIntegrationService.getLanguages();
            console.log(`🌐 SSR 預載語系資料成功: ${languages.length} 個語系`);
        }
    } catch (error) {
        console.error('❌ SSR 語系資料預載失敗:', error);
    }

    // 啟用靜態渲染
  setRequestLocale(locale);

  return (
      <html lang={locale}>
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NextIntlClientProvider >
          <I18nProvider languages={languages} currentLocale={locale}>
          {children}
          </I18nProvider>

      </NextIntlClientProvider>
      </body>
      </html>
  );
}
