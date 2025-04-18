import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import { DM_Sans } from "next/font/google";

import enMessages from "../../messages/en.json";
import trMessages from "../../messages/tr.json";

const messages = {
  en: enMessages,
  tr: trMessages,
};

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className={dmSans.className}>
      <body>
        <ClientWrapper messages={messages}>{children}</ClientWrapper>
      </body>
    </html>
  );
}
