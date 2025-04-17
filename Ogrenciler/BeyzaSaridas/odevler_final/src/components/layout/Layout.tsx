import { ReactNode, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "@/context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}
    >
      <Header />
      <main className="flex-1 bg-neutral-50 dark:bg-neutral-900 dark:text-white">
        {children}
      </main>

      <div className="bg-primary py-6 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-white mb-1">
              Earn up to $25 worth of crypto
            </h3>
            <p className="text-blue-100 text-sm">
              Discover How Specific Cryptocurrencies Work — And Get A Bit Of
              Each Crypto To Try Out For Yourself.
            </p>
          </div>
          <button className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-blue-50">
            Create Account
          </button>
        </div>

        <svg
          className="absolute left-0 bottom-0 text-blue-200 opacity-20"
          width="180"
          height="180"
          viewBox="0 0 184 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M182 2L2 182" stroke="currentColor" strokeWidth="3" />
          <path d="M184 40L40 184" stroke="currentColor" strokeWidth="3" />
        </svg>
        <svg
          className="absolute right-0 top-0 text-blue-200 opacity-20"
          width="180"
          height="180"
          viewBox="0 0 184 184"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M182 2L2 182" stroke="currentColor" strokeWidth="3" />
          <path d="M184 40L40 184" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
