"use client";

import useAuth from "@/hooks/useAuth";

import Link from "next/link";

export default function Navigation({ active }) {
  const { logout, user } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg bg-primary py-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          Bilinç ve Ötesi
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${active == "home" ? "active" : ""}`}
                href="/"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${active == "add" ? "active" : ""}`}
                    href="/add"
                  >
                    Add Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/" onClick={() => logout()}>
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      active == "register" ? "active" : ""
                    }`}
                    href="/register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${active == "login" ? "active" : ""}`}
                    href="/login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          {user ? (
            <>
              <Link href="/user">
                <img
                  src={user.profile}
                  className="ms-5 border border-info border-3 rounded-circle object-fit-cover"
                />
                <span className="badge text-bg-info ms-2 py-2 px-3">
                  {user.name}
                </span>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
