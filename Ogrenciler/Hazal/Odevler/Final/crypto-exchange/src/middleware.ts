import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default createMiddleware(routing);

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = pathname.split('/')[1];

  if (!['en', 'tr'].includes(locale)) {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}