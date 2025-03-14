"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import mef from "../../assets/logo.png";
import Link from "next/link";
import { auth } from "@/firebase_config";
import { getProfileImageUrl } from "@/controller/DBController";

const Navbar = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (currentUser) {
        const url = await getProfileImageUrl();
        setProfileImageUrl(url);
      } else {
        setProfileImageUrl(null);
      }
    };
    fetchProfileImage();
  }, [currentUser]);

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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Anasayfa
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#latest" className="text-decoration-none">
                <p className="nav-link active " aria-current="page" href="#">
                  Son Yayımlananlar
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Tüm Bloglar
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog/add" className="text-decoration-none" scroll>
                <p className="nav-link active " aria-current="page" href="#">
                  Post Ekle
                </p>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#subscribe">
                Abone ol
              </a>
            </li>
            <div className="dropdown">
              <button
                className={`${
                  currentUser !== null ? styles.buttonBg : null
                } btn  dropdown rounded-circle p-0`}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={currentUser ? buttonStyle : null}
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <button className="dropdown-item">
                  {currentUser !== null ? (
                    <Link href="/profile" className="text-decoration-none">
                      Profil
                    </Link>
                  ) : null}
                </button>
                <button className="dropdown-item">
                  <Link href="/login" className="text-decoration-none">
                    {currentUser !== null ? "Çıkış Yap" : "Giriş Yap"}
                  </Link>
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
