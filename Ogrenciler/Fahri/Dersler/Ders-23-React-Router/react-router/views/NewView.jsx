import { Outlet, NavLink } from "react";

const NewView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
      <p>Footer</p>
    </div>
  );
};

export default NewView;
