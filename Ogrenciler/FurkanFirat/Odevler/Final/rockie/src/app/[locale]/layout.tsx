import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import { DM_Sans } from 'next/font/google';
import BootstrapClient from '@/components/BootstrapClient';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { AuthProvider } from '@/context/AuthContext';
import StoreProvider from '../StoreProvider';
import '@/styles/main.scss';
import GenericAlert from '@/components/GenericAlert/GenericAlert';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rockie',
  description: 'Crypto Currency App',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={dmSans.className}>
      <head>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
        ></link>
      </head>
      <body>
        <ThemeProvider>
          <StoreProvider>
            <AuthProvider>
              <NextIntlClientProvider>
                <GenericAlert />
                <Navbar />
                {children}
                <Footer />
                <BootstrapClient />
              </NextIntlClientProvider>
            </AuthProvider>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
