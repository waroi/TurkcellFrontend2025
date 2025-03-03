import React from "react";
import { NavLink } from "react-router";
import './Categories.css';

const Categories = () => {
  return (
    <ul className="nav nav-tabs mb-3">
      <li className="nav-item">
        <NavLink className="nav-link nav-bg" aria-current="page" to="genel">
          Genel
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-bg" to="ekonomi">
          Ekonomi
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link nav-bg" to="spor">
          Spor
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="saglik" className="nav-link nav-bg" aria-disabled="true">
          Sağlık
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="magazin" className="nav-link nav-bg" aria-disabled="true">
          Magazin
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="dunya" className="nav-link nav-bg" aria-disabled="true">
          Dünya
        </NavLink>
      </li>
    </ul>
  );
};

export default Categories;
