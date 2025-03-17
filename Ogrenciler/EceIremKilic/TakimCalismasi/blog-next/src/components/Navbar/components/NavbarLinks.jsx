import React from "react";
import NavLink from "../atoms/NavLink";
import NavDropdown from "../atoms/NavDropdown";
const NavbarLinks = ({ profileImageUrl }) => {
  return (
    <div>
      <ul className="navbar-nav ms-auto d-flex align-items-center">
        <NavLink route={"/"} title={"Anasayfa"} />
        <NavLink route={"#latest"} title={"Son Yayımlananlar"} />
        <NavLink route={"/blog/add"} title={"Post Ekle"} />
        <NavLink route={"#subscribe"} title={"Abone ol"} />
        <NavDropdown profileImageUrl={profileImageUrl} />
      </ul>
    </div>
  );
};

export default NavbarLinks;
