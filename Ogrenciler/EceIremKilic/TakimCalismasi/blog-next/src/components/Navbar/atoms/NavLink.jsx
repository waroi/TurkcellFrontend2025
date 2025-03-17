import React from "react";
import Link from "next/link";
const NavLink = ({ route, title }) => {
  return (
    <div>
      <li className="nav-item">
        <Link href={route} className="nav-link">
          {title}
        </Link>
      </li>
    </div>
  );
};

export default NavLink;
