import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { DM_Sans } from "next/font/google";
import "./styles/main.scss";
import { ThemeProvider } from "../_components/ThemeProvider";
import NavBar from "../_components/ui/Navbar/NavBar";
import Footer from "../_components/ui/Footer/Footer";
import { generatePageMetadata } from "../utils/seo";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return generatePageMetadata({
    title: t("title"),
    description: t("description"),
    locale:locale,

  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${dmSans.className}`}>
        <ThemeProvider />
        <NextIntlClientProvider>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
