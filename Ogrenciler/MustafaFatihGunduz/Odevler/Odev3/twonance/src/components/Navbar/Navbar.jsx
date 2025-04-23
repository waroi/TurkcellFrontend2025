"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
const Navbar = () => {
  const { language, switchLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav>
      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image
              src="/assets/logo.svg"
              width={121}
              height={32}
              alt="logo"
              unoptimized
            />
            <Link href={"/home"}>
              <button className="fs-6 fw-bold text-dark btn btn-white">
                Homepage
              </button>
            </Link>
            <Link href={"/buy"}>
              <button className="fs-6 fw-bold text-dark btn btn-white">
                Buy Crypto
              </button>
            </Link>
            <Link href={"/market"}>
              <button className="fs-6 fw-bold text-dark btn btn-white">
                Markets
              </button>
            </Link>
            <Link href={"/exchange"}>
              <button className="fs-6 fw-bold text-dark btn btn-white">
                Exchange
              </button>
            </Link>
            <button className="fs-6 fw-bold text-dark btn btn-white">
              Spot
            </button>
            <button className="fs-6 fw-bold text-dark btn btn-white">
              BITUSDT
            </button>
            <button className="fs-6 fw-bold text-dark btn btn-white">
              Pages
            </button>
          </div>
          <div className="d-flex">
            <button className="fs-6 fw-bold text-dark btn btn-white">
              Assets
            </button>
            <button className="fs-6 fw-bold text-dark btn btn-white">
              Orders & Trade
            </button>
            <button
              className="fs-6 fw-bold text-dark btn btn-white"
              onClick={() => switchLanguage(language === "en" ? "tr" : "en")}
            >
              {language === "en" ? "EN/USD" : "TR/TRY"}
            </button>
            <button
              className="fs-6 fw-bold text-dark btn"
              onClick={() => toggleTheme()}
            >
              {theme === "light" ? (
                <Image
                  src={"/assets/png/sun.png"}
                  width={16}
                  height={16}
                  alt="sun"
                />
              ) : (
                <Image
                  src={"/assets/png/moon.png"}
                  width={16}
                  height={16}
                  alt="moon"
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
