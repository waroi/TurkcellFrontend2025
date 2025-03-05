import { Outlet, NavLink } from "react-router";

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
      <p>footer</p>
    </div>
  );
};

export default NewView;
