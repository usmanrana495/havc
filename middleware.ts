
import createMiddleware from 'next-intl/middleware';
import {i18nConfig} from './i18n';

export default createMiddleware(i18nConfig);

export const config = {
  matcher: ['/', '/(en|ar)', '/(en|ar)/:path*'], // IMPORTANT: include base and sub-paths
};