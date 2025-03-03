import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container padding-custom">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
