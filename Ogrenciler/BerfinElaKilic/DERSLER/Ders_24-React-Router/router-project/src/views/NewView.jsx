import { Outlet, NavLink } from "react-router";

const NewView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <ul>
        <li>
          <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
      <Outlet />
      <p>footer</p>
    </div>
  );
};

export default NewView;
