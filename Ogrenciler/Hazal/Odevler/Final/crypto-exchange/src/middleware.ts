import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/i18n';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};