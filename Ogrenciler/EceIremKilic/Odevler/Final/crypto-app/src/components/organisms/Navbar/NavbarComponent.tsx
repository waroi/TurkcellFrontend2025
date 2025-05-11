"use client";
import React from "react";
import { Container, Dropdown, Navbar } from "react-bootstrap";
import NavbarBrand from "../../atoms/NavbarBrand";
import NavbarItems from "../../molecules/NavbarItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faBell, faMoon } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../atoms/CustomButton";
import UserAvatar from "../../atoms/UserAvatar";
import { useTheme } from "@/contexts/ThemeContext";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { locales } from "@/i18n/request";
import { useRouter } from "next/navigation";
type Locale = "en" | "tr";

const NavbarComponent = () => {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations();
  const currentLocale = useLocale() as Locale;
  const router = useRouter();

  const navItems1 = [
    { label: t("navbar.home"), href: "/", isDropdown: true },
    { label: t("navbar.buy"), href: "/buy" },
    { label: t("navbar.markets"), href: "/market" },
    { label: t("navbar.exchange"), href: "/" },
    { label: t("navbar.spot"), href: "/" },
    { label: t("navbar.bitusdt"), href: "/" },
    { label: t("navbar.pages"), href: "/", isDropdown: true },
  ];

  const navItems2 = [
    { label: t("navbar.assets"), href: "/", isDropdown: true },
    { label: t("navbar.orders&trades"), href: "/", isDropdown: true },
  ];

  const switchLanguage = (locale: Locale) => {
    if (typeof window === "undefined") return;

    window.location.href = `/${locale === "en" ? "" : locale}`;
  };
  const languageNames: Record<Locale, string> = {
    en: "English",
    tr: "Türkçe",
  };

  return (
    <Navbar bg={theme} variant={theme} expand="lg" className="px-5">
      <NavbarBrand imageURL="/Logo.png" />
      <Navbar.Toggle aria-controls="navbar-component" />
      <Navbar.Collapse id="navbar-component">
        <NavbarItems items={navItems1} />
        <div className="d-flex align-items-center">
          <NavbarItems items={navItems2} />

          <Dropdown className="mx-2">
            <Dropdown.Toggle
              variant="light"
              id="language-dropdown"
              className={`btn-${theme} border-0 bg-transparent`}
            >
              {languageNames[currentLocale]}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {(Array.from(locales) as Locale[]).map((locale) => (
                <Dropdown.Item
                  key={locale}
                  onClick={() => switchLanguage(locale)}
                  active={currentLocale === locale}
                  className={`btn-${theme} `}
                >
                  {languageNames[locale]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="px-2">
            <button className="border-0 bg-transparent" onClick={toggleTheme}>
              {theme === "light" ? (
                <FontAwesomeIcon icon={faMoon} color="gray" />
              ) : (
                <FontAwesomeIcon icon={faSun} color="gray" />
              )}
            </button>
          </div>
          <div className="px-2">
            <FontAwesomeIcon icon={faBell} color="gray" />
          </div>
          <CustomButton
            variant="outline-dark"
            label="Wallet"
            className="rounded-pill mx-3 px-2"
            size="sm"
            onClick={() => router.push("/wallet")}
          />
          <div className="px-2">
            <UserAvatar />
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
