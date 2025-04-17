import { useState, useContext } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  Search,
  Bell,
  ChevronDown,
  Sun,
  Moon,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/context/ThemeContext";
import { LanguageContext } from "@/context/LanguageContext";
import { AuthContext } from "@/context/AuthContext";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t } = useContext(LanguageContext);
  const { user, logout } = useContext(AuthContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const menuItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.buycrypto"), path: "/buy-crypto" },
    { name: t("nav.markets"), path: "/market" },
    { name: t("nav.exchange"), path: "/exchange" },
    { name: t("nav.spot"), path: "/spot" },
  ];

  return (
    <header className="bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 2L5.88872 12.5004L11.9997 16.5004L18.1107 12.5004L11.9997 2ZM5.88872 13.5004L11.9997 22.0008L18.1107 13.5004L11.9997 17.5004L5.88872 13.5004Z"></path>
                </svg>
              </div>
              <span className="font-semibold text-lg dark:text-white">
                Rocket
              </span>
            </Link>

            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium ${
                    location === item.path
                      ? "text-primary"
                      : "text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary">
                  {t("nav.pages")}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/wallet" className="cursor-pointer">
                      {t("nav.wallet")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      {t("nav.settings")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/history" className="cursor-pointer">
                      {t("nav.history")}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  <Globe className="h-5 w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <LanguageSwitcher />
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {theme === "dark" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <ThemeSwitcher />
                </DropdownMenuContent>
              </DropdownMenu>

              <button className="text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary">
                <Search className="h-5 w-5" />
              </button>

              <button className="text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-primary">
                <Bell className="h-5 w-5" />
              </button>
            </div>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-white">
                        {getInitials(user.username)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/wallet" className="cursor-pointer">
                      {t("user.wallet")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings" className="cursor-pointer">
                      {t("user.settings")}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => logout()}>
                    {t("user.logout")}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Link href="/auth">{t("auth.login")}</Link>
              </Button>
            )}

            <button
              className="md:hidden text-neutral-600 dark:text-neutral-300"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <div className="space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`block py-2 text-base font-medium ${
                    location === item.path
                      ? "text-primary"
                      : "text-neutral-600 dark:text-neutral-300"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/wallet"
                className="block py-2 text-base font-medium text-neutral-600 dark:text-neutral-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t("nav.wallet")}
              </Link>

              <div className="pt-4 mt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex justify-between">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
