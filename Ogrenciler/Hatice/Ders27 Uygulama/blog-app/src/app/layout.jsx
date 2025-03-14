// "use client";
import { redirect } from "next/navigation";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import ToastProvider from "./_components/ToastProvider";

import "./globals.css";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: {
    template: "%s | Yazılım 101",
    default: "Yazılım 101",
  },
  description: "Yazılım hakkında her şeyi bulabileceğiniz bir blog sitesi.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }) {
  // const user =
  //   typeof window !== "undefined" ? localStorage.getItem("user") : null;

  return (
    <html lang="en">
      <body>
        <Navbar />
        <ToastProvider>{children}</ToastProvider>
        <Footer />
      </body>
    </html>
  );
}
