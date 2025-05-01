'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

const locales = ['en', 'ar'];

interface LocaleContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  messages: any;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');
  const [messages, setMessages] = useState<any>({});

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale') || 'en';
    setLocale(storedLocale);
  }, []);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const localeMessages = await import(`../messages/${locale}.json`);
        setMessages(localeMessages.default);
      } catch (error) {
        console.error(`Error loading messages for ${locale}`, error);
      }
    };

    loadMessages();
  }, [locale]);

  const handleLocaleChange = (newLocale: string) => {
    if (locales.includes(newLocale)) {
      setLocale(newLocale);
      localStorage.setItem('locale', newLocale);
    }
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleLocaleChange, messages }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}; 