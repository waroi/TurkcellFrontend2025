"use client";

import { useEffect, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import ThemeManager from "../components/ThemeManager";
import Header from "@/components/organisms/Header";
import FooterNews from "@/components/organisms/FooterNews";
import { PersistGate } from "redux-persist/integration/react";

export default function ClientWrapper({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages: Record<string, Record<string, any>>;
}) {
  const [locale, setLocale] = useState<string | null>(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("lang") || "en";
    setLocale(storedLocale);
  }, []);

  if (!locale) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeManager />
        <NextIntlClientProvider
          locale={locale}
          messages={messages[locale] || messages.en}
        >
          <Header />
          {children}
          <FooterNews />
        </NextIntlClientProvider>
      </PersistGate>
    </Provider>
  );
}
