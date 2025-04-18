import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from '@/contexts/ThemeContext';
import "./styles/main.scss"
import NavigationLayout from '@/components/atoms/NavigationLayout/NavigationLayout';
import { Metadata } from 'next';
import { DM_Sans } from 'next/font/google'
import { AuthProvider } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Rocket Crypto",
  description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const dm_sans = DM_Sans({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale) && locale !== '404') {
    redirect('/login');

  }

  return (
    <html lang={locale}>
      <head>
        <title>{`Rocket Crypto - ${locale}`}</title>
        <meta name="description" content="Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange." />
        <link rel="icon" href="/favic.ico" sizes="any" />
      </head>
      <body className={dm_sans.className}>
        <AuthProvider>
          <ThemeProvider>
            <NextIntlClientProvider>
              <NavigationLayout />
              {children}
            </NextIntlClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
