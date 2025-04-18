"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "@/styles/nav.scss";

export default function Nav() {
  const pathname = usePathname();

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
              <Link className="nav-link center px-3" href="/DDDDDDDDDD">
                Buy Crypto
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/DDDDDDDDDD">
                Markets
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/DDDDDDDDDD">
                Exchange
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/DDDDDDDDDD">
                Spot
              </Link>
            </li>
            <li className="nav-item fw-semibold">
              <Link className="nav-link center px-3" href="/DDDDDDDDDD">
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
        </div>
      </div>
    </nav>
  );
}
