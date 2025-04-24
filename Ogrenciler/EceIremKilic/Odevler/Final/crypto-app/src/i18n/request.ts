import { getRequestConfig } from "next-intl/server";
import type { GetRequestConfigParams } from "next-intl/server";
import { routing } from "./routing";

const locales = ["en", "tr"] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }: GetRequestConfigParams) => {
  const safeLocale: Locale = routing.locales.includes(locale as Locale)
    ? (locale as Locale)
    : routing.defaultLocale;

  const messages = (
    await import(`../../public/locales/${safeLocale}/home.json`)
  ).default;

  return {
    locale: safeLocale,
    messages,
  };
});

export { locales };
