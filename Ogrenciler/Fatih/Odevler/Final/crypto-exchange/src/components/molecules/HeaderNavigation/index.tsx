"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../organisms/Header/Header.module.css";

const HeaderNavigation = ({
  links,
}: {
  links: { href: string; label: string }[];
}) => {
  const pathname = usePathname();

  return (
    <div className="d-flex align-items-center me-auto gap-3">
      {links.map(({ href, label }) => {
        const isPortfolioRoute = href === "/portfolio";

        if (isPortfolioRoute) {
          return (
            <span
              key={href + label}
              className={`nav-link ${styles.activeNav} disabled`}
              style={{ opacity: 0.6, cursor: "not-allowed" }}
            >
              {label}
            </span>
          );
        }

        return (
          <Link
            key={href + label}
            className={`nav-link ${pathname === href ? styles.activeNav : ""}`}
            href={href}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderNavigation;
