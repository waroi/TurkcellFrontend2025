import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const paths = useLocation().pathname.split("/").filter(Boolean);

  return (
    

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Anasayfa</Link>
        </li>
        {paths.map((path, index) => (
          <li key={index} className="breadcrumb-item">
            {index === paths.length - 1 ? (
              pathMap[path]
            ) : (
              <Link to={`/${paths.slice(0, index + 1).join("/")}`}>
                {pathMap[path]}
              </Link>
            )}
          </li>
        ))}
  </ol>
</nav>
  );
};
export default Breadcrumb;

const pathMap = {
  haberler: "Haberler",
  spor: "Spor Haberleri",
  ekonomi: "Ekonomi Haberleri",
  tech: "Teknoloji Haberleri",
  health: "Sağlık Haberleri",
};
