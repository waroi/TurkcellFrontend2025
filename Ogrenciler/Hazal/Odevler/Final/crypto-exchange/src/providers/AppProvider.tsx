'use client';

import { ThemeProvider } from './../contexts/ThemeContext';
import { AuthProvider } from './../contexts/AuthContext';
import { NextIntlClientProvider } from 'next-intl';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store/store';

export default function AppProvider({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: 'en' | 'tr';
  messages: any;
}) {
  return (
   <ReduxProvider store={store}>
    <NextIntlClientProvider locale="tr" messages={messages}>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  </ReduxProvider>
  );
}