"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import HeaderLogo from "../../atoms/HeaderLogo";
import HeaderNavigation from "../../molecules/HeaderNavigation";
import UserTools from "../../organisms/UserTools";
import styles from "./Header.module.css";

const Header = () => {
  const t = useTranslations("Header.menu");
  const [isExpanded, setIsExpanded] = useState(false);

  const navLinks = [
    { href: "/", label: t("homepage") },
    { href: "/buy-crypto", label: t("buyCrypto") },
    { href: "/markets", label: t("markets") },
    { href: "/dashboard", label: t("exchange") },
    { href: "/portfolio", label: t("spot") },
    { href: "/portfolio", label: t("bitusdt") },
    { href: "/portfolio", label: t("pages") },
  ];

  const userLinks = [
    { href: "/", label: t("assets") },
    { href: "/", label: t("orders") },
  ];

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbarCustom}`}>
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center gap-2">
          <HeaderLogo />
        </div>

        <button
          className={`navbar-toggler ${styles.hamburger}`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-controls="navbarNav"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? "show" : ""}`}
          id="navbarNav"
        >
          <HeaderNavigation links={navLinks} />
          <UserTools links={userLinks} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
