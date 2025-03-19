"use client";
import styles from "./navbar.module.css";
import Image from "next/image";
import mef from "../../assets/logo.png";
import Link from "next/link";
import NavbarItems from "./components/NavbarItems";
import useNavProfileImage from "@/hooks/useNavProfileImage";

const Navbar = () => {
  const {profileImageUrl} = useNavProfileImage();
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
