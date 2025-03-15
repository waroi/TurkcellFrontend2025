import Link from "next/link";
import {routers} from "./routers";

const Navlinks = () => {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {routers.map((route) => (
          <li className="nav-item" key={route.href}>
            <Link href={route.href} className="nav-link active">
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navlinks;
