'use client';
import React from 'react';
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import '../../i18n';
import "../app/global.scss";
import { useTranslation } from "react-i18next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  return (
    <ThemeProvider>
      <html lang={i18n.language}>
        <body className="transition duration-300">
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}