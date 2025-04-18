import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '@/styles/main.scss';
import Footer from '../../components/Footer';
import Script from 'next/script';

const dmSans = DM_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body className={dmSans.className}>
                <NextIntlClientProvider>

                    {children}
                    <Footer />
                </NextIntlClientProvider>
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
                    crossOrigin="anonymous"
                />
                <Script
                    src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/js/all.min.js"
                    crossOrigin="anonymous"
                />
            </body>
        </html>
    );
}
