"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "next/image";
import Link from "next/link";
import { useAuthState } from "../../../../../services/authServices";
import { signOut } from "firebase/auth";
import { auth } from "../../../../../../../firebase/firebase";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = useAuthState();
  const router = useRouter();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid fix-navbar">
        <Link
          className="navbar-brand d-flex align-items-center"
          href="/homepage"
        >
          <Image
            src="/assets/header/frame.svg"
            alt="Logo"
            width={32}
            height={32}
          />
          <span className="header-rocket">Rocket</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav nav-left d-flex align-items-center">
            <li className="nav-item dropdown nav-item-left">
              <Link
                className="nav-link dropdown-toggle homepage-btn"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-white">Homepage</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/register">
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    href={user ? `/profile/${user.uid}` : "/login"}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item  ">
              <Link
                className="nav-link  nav-item-left"
                aria-current="page"
                href="#"
              >
                Buy Crypto
              </Link>
            </li>
            <li className="nav-item    ">
              <Link className="nav-link  nav-item-left" href="/market">
                Markets
              </Link>
            </li>
            <li className="nav-item   ">
              <a className="nav-link  nav-item-left" href="#">
                Exchange
              </a>
            </li>
            <li className="nav-item  ">
              <a className="nav-link  nav-item-left" href="#">
                Spot
              </a>
            </li>
            <li className="nav-item  ">
              <a className="nav-link  nav-item-left" href="#">
                BITUSDT
              </a>
            </li>
            <li className="nav-item dropdown  ">
              <Link
                className="nav-link dropdown-toggle "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </Link>
              <ul className="dropdown-menu ">
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="navbar-nav nav_2 d-flex align-items-center">
            <li className="nav-item nav-item-2 dropdown  ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Assets
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown    ">
              <a
                className="nav-link dropdown-toggle nav-item-right"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Orders & Trades
              </a>
              <ul className="dropdown-menu nav-item-right">
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown    ">
              <Link
                className="nav-link dropdown-toggle nav-item-right-enusd"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                EN/USD
              </Link>
              <ul className="dropdown-menu ">
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    empty slot
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item  symbol-1 ">
              <Link className="nav-link " href="#">
                <Image
                  src="/assets/header/sun.svg"
                  alt="sun"
                  width={16}
                  height={16}
                />
              </Link>
            </li>
            <li className="nav-item  symbol-2 ">
              <Link className="nav-link " href="#">
                <Image
                  src="/assets/header/Vector.svg"
                  alt="ring"
                  width={16}
                  height={16}
                />
              </Link>
            </li>
            <li className="nav-item wallet-item ">
              <Link className="nav-link circle-link" href="#">
                <span className=" d-flex align-items-center justify-content-center">
                  <span className="">Wallet</span>
                </span>
              </Link>
            </li>

            <li className="nav-item rounded ">
              <Link
                className="nav-link "
                href={user ? `/profile/${user.uid}` : "/login"}
              >
                <Image
                  src="/assets/header/mail.jpg"
                  alt="profile"
                  width={30}
                  height={30}
                />
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <button
                  className="btn btn-danger ms-2"
                  onClick={async () => {
                    await signOut(auth);
                    router.push("/homepage");
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
