"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../api/firebaseAuth";
import { doc, getDoc } from "firebase/firestore";

const SiteNavbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        setUser(null);
        return;
      }

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      }
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Çıkış yaparken hata oluştu:", error);
    }
  };

  const roters = [
    { href: "/", label: "Anasayfa" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Hakkımızda" },
    { href: "/contact", label: "İletişim" },
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
          <Link className="navbar-brand fw-bold fs-3" href="/">
            M&lt;ela&gt;M
          </Link>
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
                  <Link href={route.href} className="nav-link active">
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
            <div className="ms-5 d-flex">
              {user ? (
                <>
                  <div className="dropdown">
                    <button
                      className="btn btn-dark dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Hoşgeldin, {user.publisher}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          href="/userBlogs"
                          className="dropdown-item bg-dark w-100 rounded-0 text-white text-center"
                        >
                          Bloklarım
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item bg-dark w-100 rounded-0 text-white text-center"
                        >
                          Çıkış Yap <i className="bi bi-box-arrow-in-right"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link href="/sign/signIn" className="btn btn-dark">
                  Giriş Yap <i className="bi bi-box-arrow-in-right"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SiteNavbar;
