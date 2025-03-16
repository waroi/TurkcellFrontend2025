"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import mef from "../../assets/logo.png";
import Link from "next/link";
import { auth } from "@/firebase_config";
import { getProfileImageUrl } from "@/controller/DBController";
import useAuthStore from "@/store/useAuthStore";
import NavbarItems from "./components/NavbarItems";

const Navbar = () => {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const { user } = useAuthStore();

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

  return (
    <nav className={`navbar navbar-expand-lg py-2 ${styles.bgColor}`}>
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" href="/">
          <Image src={mef} alt="logo" width={75} height={75} />
        </Link>
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
        <NavbarItems profileImageUrl={profileImageUrl} />
      </div>
    </nav>
  );
};

export default Navbar;
