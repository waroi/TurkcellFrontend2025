import {routers} from "@/components/Navbar/NavLinks/routers";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  return (
    <div className="col-md-4 align-items-center d-flex flex-column">
      <h5>Hızlı Erişim</h5>
      <ul className="list-unstyled ">
        {routers.map((route) => (
          <li className="nav-item" key={route.href}>
            <Link
              key={route.href}
              href={route.href}
              className="nav-link active"
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
