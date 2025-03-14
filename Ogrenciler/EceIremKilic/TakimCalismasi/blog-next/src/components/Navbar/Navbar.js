"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import mef from "../../assets/logo.png";
import Link from "next/link";
import { auth } from "@/firebase_config";
import { getProfileImageUrl } from "@/controller/DBController";
import useAuthStore from "@/store/useAuthStore";

const Navbar = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (user) {
        const url = await getProfileImageUrl();
        setProfileImageUrl(url);
      } else {
        setProfileImageUrl(null);
      }
    };
    fetchProfileImage();
  }, [user]);

  const buttonStyle = {
    backgroundImage: profileImageUrl ? `url(${profileImageUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };
  return (
    <nav className={`navbar navbar-expand-lg py-2 ${styles.bgColor}`}>
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          <Image src={mef} alt="logo" width={75} height={75} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
                      href="/profile"
                    >
                      Profil
                    </Link>
                    <Link
                      className="dropdown-item text-decoration-none"
                      href="/login"
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
    </nav>
  );
};

export default Navbar;
