import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'tr'],

  defaultLocale: 'en',
  pathnames: {
    '/about': {
      en: '/about',
      tr: '/hakkinda',
    },
    '/register': { en: '/register', tr: '/kayit-ol' },
    '/login': { en: '/login', tr: '/giris-yap' },
    '/profile': { en: '/profile', tr: '/profil' },
    '/wallet': { en: '/wallet', tr: '/cuzdan' },
  },
});
