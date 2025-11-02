import { defineRouting } from 'next-intl/routing';

export const LOCALE_COOKIE_NAME = 'fai-locale';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ko'],

  // Used when no locale matches
  defaultLocale: 'ko',

  localePrefix: 'never',

  localeCookie: {
    name: LOCALE_COOKIE_NAME,
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
    secure: true,
  },
});
