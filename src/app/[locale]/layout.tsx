import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLangDir } from "rtl-detect";
import { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 確保傳入的 `locale` 是有效的
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // 設置請求的語言環境
  setRequestLocale(locale);

  const direction = getLangDir(locale);

  // 獲取當前語言的所有消息
  const messages = await getMessages();

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// 為每個支持的語言生成靜態參數
export function generateStaticParams() {
  // 這個函數用於靜態生成時，為每個語言創建對應的頁面
  return routing.locales.map((locale) => ({ locale }));
}
