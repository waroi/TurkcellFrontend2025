import { Outlet, NavLink } from "react-router";

const HaberView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <Outlet />
    </div>
  );
};

export default HaberView;
