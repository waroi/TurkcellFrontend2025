'use client'

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Header from "./components/Header";
// modal çalışmazsa bu alttaki silinecek
import BootstrapJS from "./components/BootstrapJS";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <Header />
          {children}
          <BootstrapJS />
        </body>
      </html>
    </Provider>
  );
}
