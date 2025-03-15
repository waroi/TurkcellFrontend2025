import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";
import React from "react";

const NavbarItems = ({ profileImageUrl }) => {
  const { user, signout } = useAuthStore();
  const buttonStyle = {
    backgroundImage: profileImageUrl ? `url(${profileImageUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };
  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#latest" className="nav-link">
              Son Yayımlananlar
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog/add" className="nav-link">
              Post Ekle
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#subscribe">
              Abone ol
            </a>
          </li>
          <li className="nav-item dropdown">
            <button
              className="btn rounded-circle p-0 d-flex align-items-center justify-content-center"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={
                user
                  ? buttonStyle
                  : {
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: "#ddd",
                    }
              }
            ></button>
            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton"
            >
              {user ? (
                <>
                  <Link
                    className="dropdown-item text-decoration-none"
                    onClick={() => signout()}
                    href="/"
                  >
                    Çıkış Yap
                  </Link>
                </>
              ) : (
                <Link
                  className="dropdown-item text-decoration-none"
                  href="/login"
                >
                  Giriş Yap
                </Link>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarItems;
