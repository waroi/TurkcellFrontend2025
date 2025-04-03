
"use client"; 

import { useEffect } from "react";
import useThemeStore from "../store/useThemeStore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthProvider } from "../hooks/useAuth"; 
import "../styles/globals.css";

const Layout = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <html lang="en"> 
      <body>
        <AuthProvider> 
          <main className="container mt-4">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;












