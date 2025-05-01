
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import ThemeRegistry from '@/components/ThemeRegistry';

// You may need to generate static params here if using static site generation
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default async function RootLayout({ children,params }: any) {
  // Get the request headers to access the URL
  const locale = params.locale || 'en';

  console.log('params....', params);

  if (!['en', 'ar'].includes(locale)) {
    return notFound();
  }


  let messages;
  try {
    // Dynamically load locale-specific messages
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Failed to load locale messages:', error);
    return notFound();
  }
  // Load the appropriate messages for the locale
  // const messages = (await import(`../../messages/${locale}.json`)).default;

  console.log('locale....', locale); // Debug: log the current locale

  return (
    <html lang={locale}>
      <body>
        <ThemeRegistry>
          {/* Provide locale and messages to the NextIntlClientProvider */}
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
