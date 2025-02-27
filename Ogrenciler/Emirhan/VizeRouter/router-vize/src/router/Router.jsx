import { useRoutes } from "react-router";
import About from "../pages/AboutPage";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import SSS from "../pages/SSS";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element: <ProductPage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/sss", element: <SSS /> },
  ]);
  return routes;
};

export default Router;
