"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useCryptoStore from "@/store/cryptoStore";

import "@/styles/nav.scss";
import { useState, useEffect } from "react";

//TODO BASE URL | https://translate.google.com/translate?hl=tr&sl=auto&u=https://example.com
//TODO SUPRESS IFRAME
//TODO PASS UID?

export default function Nav() {
  const pathname = usePathname();
  const cryptoStore = useCryptoStore();

  const [mode, setMode] = useState();

  useEffect(() => {
    setMode(localStorage.getItem("mode") != "dark" ? "light" : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.dataset.bsTheme = mode;
  }, [mode]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-white p-0">
      <div className="container-fluid h-100">
        <Link className="navbar-brand center reset" href="/">
          <Image src="/logo.png" alt="Logo" width={121} height={32} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse h-100" id="navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 h-100">
            <li className="nav-item fw-semibold dropdown">
              <Link
                className={`nav-link center px-3 dropdown-toggle ${
                  pathname == "/" ? "active" : ""
                }`}
                aria-current="page"
                href="/"
              >
                Homepage
              </Link>
              <ul className="dropdown-menu"></ul>
            </li>
            <li className="nav-item fw-semibold">
              <Link
                className={`nav-link center px-3 ${
                  pathname == "/buy-crypto" ? "active" : ""
                }`}
                href="/buy-crypto"
              >
                Buy Crypto
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link
                className={`nav-link center px-3 ${
                  pathname == "/market" ? "active" : ""
                }`}
                href="/market"
              >
                Markets
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/exchange">
                Exchange
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/exchange">
                Spot
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/exchange">
                BITUSDT
                <Image
                  src="/fire.png"
                  alt="Icon"
                  className="ms-1"
                  width={10}
                  height={10}
                />
              </Link>
            </li>
            <li className="nav-item fw-semibold dropdown">
              <a
                className={`nav-link center px-3 dropdown-toggle ${
                  pathname == "/contact" ||
                  pathname == "/blog" ||
                  pathname == "/faq"
                    ? "active"
                    : ""
                }`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/faq">
                    FAQ
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 h-100">
            <li
              className="nav-item fw-semibold center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                mode != "dark" ? setMode("dark") : setMode("light")
              }
            >
              {mode != "dark" ? (
                <i className="fa-solid fa-moon" aria-hidden="true"></i>
              ) : (
                <i className="fa-solid fa-sun" aria-hidden="true"></i>
              )}
            </li>
            <li className="nav-item fw-semibold dropdown">
              <a
                className="nav-link center px-3 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-language" aria-hidden="true"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://crypto-rocket-app.vercel.app/"
                  >
                    English
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://translate.google.com/translate?hl=tr&sl=auto&u=https://crypto-rocket-app.vercel.app/"
                  >
                    Turkish
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://translate.google.com/translate?hl=ru&sl=auto&u=https://crypto-rocket-app.vercel.app/"
                  >
                    Russian
                  </a>
                </li>
              </ul>
            </li>
            {cryptoStore.user ? (
              <>
                <li className="nav-item fw-semibold">
                  <Link
                    className={`nav-link center px-3 ${
                      pathname == "/wallet" ? "active" : ""
                    }`}
                    href="/wallet"
                  >
                    Wallet
                  </Link>
                </li>
                <li className="nav-item fw-semibold">
                  <Link
                    className={`nav-link center px-3 ${
                      pathname == "/user" ? "active" : ""
                    }`}
                    href="/user"
                  >
                    <i className="fa-solid fa-user" aria-hidden="true"></i>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item fw-semibold">
                  <Link
                    className={`nav-link center px-3 ${
                      pathname == "/login" ? "active" : ""
                    }`}
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item fw-semibold">
                  <Link
                    className={`nav-link center px-3 ${
                      pathname == "/register" ? "active" : ""
                    }`}
                    href="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
