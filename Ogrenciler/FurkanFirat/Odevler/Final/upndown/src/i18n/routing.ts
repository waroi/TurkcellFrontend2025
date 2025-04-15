import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'tr'],

  defaultLocale: 'en',
  pathnames: {
    '/about': {
      en: '/about',
      tr: '/hakkinda',
    },
  },
});
