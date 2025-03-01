import React from "react";
import { NavLink } from "react-router";

const Categories = () => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Genel
        </a>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="ekonomi">
          Ekonomi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="spor">
          Spor
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="saglik" className="nav-link" aria-disabled="true">
          Sağlık
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="magazin" className="nav-link" aria-disabled="true">
          Magazin
        </NavLink>
      </li>
    </ul>
  );
};

export default Categories;
