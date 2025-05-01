import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../../config';

export default getRequestConfig(async ({locale}) => {
  const resolvedLocale = locale || defaultLocale;

  console.log('✔️ getRequestConfig received locale:', locale);

  console.log('resolvedLocale', resolvedLocale);
  console.log('locale', locale);
  
  return {
    locale: resolvedLocale, // This will always be defined now
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});