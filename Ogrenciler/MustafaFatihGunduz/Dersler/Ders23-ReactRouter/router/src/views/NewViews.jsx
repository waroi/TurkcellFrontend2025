import React from "react";
import { Outlet } from "react-router";

const NewViews = () => {
  return (
    <div>
      <h1>NewViews</h1>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/haberler/spor">Spor</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NewViews;
