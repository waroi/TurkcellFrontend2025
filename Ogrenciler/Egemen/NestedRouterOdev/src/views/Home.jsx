import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Outlet burada çocuk rotaları gösterecek */}
        <Outlet />
      </div>
    </>
  );
};

export default Home;
