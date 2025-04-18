// app/[locale]/layout.tsx - Bu sizin verdiğiniz layout dosyası
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { ThemeProvider } from '../context/ThemeContext';
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <head>
        <title>Crypto Trading Platform</title>
        <meta name="description" content="Real-time cryptocurrency trading platform with advanced charts and order books" />
      </head>
      <body>
        <NextIntlClientProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}