"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { logoutUser } from "@/firebase/firebaseService";
import { useRouter } from "next/navigation";
import Button from "./Button";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar py-0 px-5">
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
                Home Page
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center">
              <a className="nav-link" href="#">
                Buy Crypto
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center">
              <a className="nav-link" href="#">
                Markets
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center d-none d-xl-flex">
              <a className="nav-link" href="#">
                Exchange
              </a>
            </li>
            <li className="nav-item px-2 d-flex align-items-center d-none d-xxxl-flex">
              <a className="nav-link" href="#">
                Spot
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
                Pages
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
                Assets
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
                Order & Trades
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>
            <li className="nav-item d-flex align-items-center d-none d-xl-flex">
              <a className="nav-link" href="#">
                EN/USD
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
            </li>

            <li className="nav-item d-flex align-items-center d-none d-md-flex">
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

            <li className="nav-item d-flex align-items-center d-none d-md-flex">
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
          <Button className="btn-white border border-black" py="py-1" px="px-2">
            Wallet
          </Button>
          <div className="position-relative" ref={dropdownRef}>
            <Image
              src="/pp.jpg"
              alt="Profile"
              width={35}
              height={35}
              className="rounded-circle cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            />
            {dropdownOpen && (
              <div className="dropdown-menu show position-absolute end-0 mt-2 p-2 shadow bg-white rounded-2">
                 <a className="nav-link d-flex d-xl-none" href="#">
                EN/USD
                <Image
                  src="/arrow-down.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                  className="ms-1"
                />
              </a>
                <button
                  onClick={handleLogout}
                  className="dropdown-item text-danger"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
