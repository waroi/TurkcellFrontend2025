"use client";
import { Roboto } from "next/font/google";
import "./globals.css";

// import BootstrapClient from "./components/BootstrapClient";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "../app/redux/store/";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
