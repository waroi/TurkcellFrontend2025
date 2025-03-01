import { Outlet, NavLink } from "react-router";

const HaberView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <Outlet />
      <ul>
        <li>
          <NavLink to="/haberler/spor">Spor Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/tech">Teknoloji Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/health">Sağlık Haberleri</NavLink>
        </li>
        <li>
          <NavLink to="/haberler/ekonomi">Ekonomi Haberleri</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HaberView;