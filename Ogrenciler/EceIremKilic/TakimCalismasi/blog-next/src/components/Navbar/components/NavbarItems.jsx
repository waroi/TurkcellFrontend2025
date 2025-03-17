import React from "react";
import NavbarLinks from "./NavbarLinks";

const NavbarItems = ({ profileImageUrl }) => {
  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <NavbarLinks profileImageUrl={profileImageUrl} />
      </div>
    </div>
  );
};

export default NavbarItems;
