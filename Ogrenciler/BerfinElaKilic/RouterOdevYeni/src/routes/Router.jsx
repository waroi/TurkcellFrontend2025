import { useRoutes } from "react-router";
import Home from "../views/Home.jsx";
import Contact from "../views/Contact";
import SSS from "../views/SSS.jsx";
import About from "../views/About.jsx";
import ProductDetails from "../views/ProductDetails.jsx";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    {path: "/product/:id", element: <ProductDetails/>},
    { path: "/SSS", element: <SSS /> },
    { path: "/about", element: <About /> },
  ]);
  return routes;
};

export default Router;
