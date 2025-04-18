import { getRequestConfig } from "next-intl/server";
import type { GetRequestConfigParams } from "next-intl/server";

const locales = ["en", "tr"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  // Locale'i kontrol et ve her zaman geçerli bir değer döndür
  const safeLocale: Locale = locales.includes(locale as Locale)
    ? (locale as Locale)
    : "en";

  // Dinamik import yoluyla dil dosyasını yükle
  const messages = (
    await import(`../../public/locales/${safeLocale}/home.json`)
  ).default;

  // RequestConfig tipine uygun nesneyi döndür
  return {
    locale: safeLocale, // Bu artık kesinlikle bir string
    messages,
  };
});

export { locales };
