"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SiteNavbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const roters = [
    {
      href: "/",
      label: "Anasayfa",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/about",
      label: "Hakkımızda",
    },
    {
      href: "/contact",
      label: "İletişim",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };

  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/">
            M&lt;ela&gt;M
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {roters.map((route) => (
                <li className="nav-item" key={route.href}>
                  <Link
                    key={route.href}
                    href={route.href}
                    className="nav-link active"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Ara.."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-dark" type="submit">
                Ara
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavbar;
