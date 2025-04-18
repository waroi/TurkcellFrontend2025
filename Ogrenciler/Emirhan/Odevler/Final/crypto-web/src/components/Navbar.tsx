"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { logoutUser } from "@/firebase/firebaseService";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Link from "next/link";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { app } from "@/firebase/firebase";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();
  const t = useTranslations()

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    const res = await logoutUser();
    if (res.success) {
      router.push("/login");
    } else {
      alert(res.message);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar py-0 px-3 px-md-5">
      <div className="container-fluid justify-content-between p-0 h-100">
        <div className="d-flex align-items-center gap-3 px-0 mx-0 h-100">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <Image src="/image.png" width={30} height={30} alt="logo" />
            Rocket
          </a>
          <ul className="navbar-nav h-100 flex-row d-none d-md-flex">
            <li className="nav-item p-0">
              <a
                className="nav-link active text-white bg-primary px-4 rounded-0 h-100 d-flex align-items-center"
                href="#"
              >
                {t("Home Page")}
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center">
              <a className="nav-link" href="#">
                {t("Buy Crypto")}
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center">
              <a className="nav-link" href="#">
                {t("Market")}
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center d-none d-xl-flex">
              <a className="nav-link" href="#">
                {t("Exchange")}
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                {t("Spot")}
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                BITUSDT
                <Image
                  src="/bitusdt.svg"
                  alt="bitusdt"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                {t("Pages")}
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-4">
          <ul className="navbar-nav h-100 flex-row">
            <li className="nav-item d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                {t("Assets")}
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>
            <li className="nav-item d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                {t("Order & Trades")}
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>
            <LanguageSwitcher />

            <li className="nav-item d-flex align-items-center d-none d-xl-flex">
              <a className="nav-link" href="#">
                <Image
                  src="/light-dark.svg"
                  alt="arrow"
                  width={18}
                  height={18}
                  className="ms-1"
                />
              </a>
            </li>

            <li className="nav-item d-flex align-items-center d-none d-xl-flex">
              <a className="nav-link" href="#">
                <Image
                  src="/notification.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                  className="ms-1"
                />
              </a>
            </li>
          </ul>
          <Button
            className="btn-white border border-black d-none d-xl-flex"
            py="py-1"
            px="px-2"
          >
            {t("Wallet")}
          </Button>
          {currentUser ? (
            <div className="dropdown" ref={dropdownRef}>
              <Image
                src="/pp.jpg"
                alt="Profile"
                width={35}
                height={35}
                className="rounded-circle dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              />

              <ul className="dropdown-menu dropdown-menu-end fs-4 mt-3">
                <li>
                  <Link className="dropdown-item" href="/settings/wallet">
                    {t("Profile")}
                  </Link>
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex d-md-none"
                    href="/dashboard/1"
                  >
                    {t("Buy Crypto")}
                  </a>
                </li>

                <li>
                  <a className="dropdown-item d-flex d-md-none" href="/market">
                    {t("Market")}
                  </a>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="dropdown-item text-danger"
                  >
                    {t("Log Out")}
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="btn btn-primary text-white py-1 px-3 rounded-pill"
              href="/login"
            >
              {t("Login")}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
