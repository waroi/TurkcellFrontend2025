import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationLinks({ user, logout }) {
  if (!user) {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
    );
  }

  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to="/application">
          Application
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/user">
          User
        </NavLink>
      </li>
      {user.isAdmin && (
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
        </li>
      )}
      <li className="nav-item">
        <button className="nav-link btn btn-link text-white" onClick={logout}>
          Logout
        </button>
      </li>
    </>
  );
}
