"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  const router = useRouter();
  const user = typeof window !== "undefined" ? localStorage.getItem("user") : null;

  useEffect(() => {
    if (!user && router.pathname !== "/auth") {
      router.push("/auth");
    }
  }, [user, router.pathname]);

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
