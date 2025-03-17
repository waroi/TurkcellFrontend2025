import React from "react";
import Link from "next/link";
import useAuthStore from "@/store/useAuthStore";
const NavDropdown = ({ profileImageUrl }) => {
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
            <Link className="dropdown-item text-decoration-none" href="/login">
              Giriş Yap
            </Link>
          )}
        </div>
      </li>
    </div>
  );
};

export default NavDropdown;
