import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/styles/globals.scss";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AutoLogin from "@/components/AutoLogin";

//* Declaration is enough for importing from SCSS.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rocket",
  description: "Buy & Sell Digital Assets In The Rocket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-bs-theme="light" style={{ marginTop: "0 !important" }}>
        <AutoLogin />
        <Nav />
        {children}
        <Footer />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/0460a9927e.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
