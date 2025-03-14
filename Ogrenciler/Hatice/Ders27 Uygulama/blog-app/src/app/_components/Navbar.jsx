"use client";
import { useRef } from "react";
import { auth } from "@/utils/firebaseConfig";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import Button from "./Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const buttonRef = useRef(null);
  const pathname = usePathname();

  const logout = async () => {
    toast.success("Çıkış Yapılıyor");
    await signOut(auth);
    setTimeout(() => {
      redirect("/login");
    }, 2000);
  };

  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container">
        <Link href="/" className="navbar-brand">
          BlogApp
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                Hakkımızda
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                İletişim
              </Link>
            </li>
            {!auth.currentUser ? (
              <>
                <li className="nav-item">
                  <Link href="/login" className="nav-link">
                    Giriş Yap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/register" className="nav-link">
                    Kayıt Ol
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Button
                  ref={buttonRef}
                  onClick={logout}
                  className="nav-link btn btn-danger"
                >
                  Çıkış Yap
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
