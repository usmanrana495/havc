
import { notFound } from 'next/navigation';
import ThemeRegistry from '@/components/ThemeRegistry';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function RootLayout({ children, params }: any) {
  const messages = useMessages();
  const dir = params.locale === 'ar' ? 'rtl' : 'ltr';

  if (!['en', 'ar'].includes(params.locale)) notFound();

  return (
    <html lang={params.locale} dir={dir}>
      <body>
        <ThemeRegistry direction={dir}>
          <NextIntlClientProvider messages={messages} locale={params.locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
