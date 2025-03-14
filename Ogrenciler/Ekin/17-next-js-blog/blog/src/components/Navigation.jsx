"use client";

import useBlog from "@/blogs";
import { getUser } from "@/firebase";
import { useState, useEffect } from "react";
import { useRouter } from 'next/compat/router'
import Link from "next/link";

export default function Navigation({ active }) {
  const blogState = useBlog();
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user") && !blogState.user)
      blogState.setUser(localStorage.getItem("user"));
  }, [blogState]);

  useEffect(() => {
    if (blogState.user) getUser(blogState.user).then(setUser);
  }, [blogState.user]);

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && !user && router) {
  //     router.push("/");
  //   }
  // }, [user, router]);

  function logout() {
    if (confirm("Are you sure you want to logout?")) {
      setUser(null);
      blogState.setUser(null);
      delete localStorage.user;
      // if (typeof window !== 'undefined' && router) {
      //   router.push("/"); 
      // }
    }
  }

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
                  <Link className="nav-link" href="/" onClick={logout}>
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
              <img
                src={user.profile}
                className="ms-5 border border-info border-3 rounded-circle object-fit-cover"
              />
              <span className="badge text-bg-info ms-2 py-2 px-3">
                {user.name}
              </span>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
