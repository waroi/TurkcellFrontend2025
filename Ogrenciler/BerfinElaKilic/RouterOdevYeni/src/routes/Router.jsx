import { useRoutes } from "react-router";
import Home from "../views/Home.jsx";
import Contact from "../views/Contact";
import ProductDetail1 from "../views/ProductDetail1.jsx";
import SSS from "../views/SSS.jsx";
import About from "../views/About.jsx";
import ProductDetail2 from "../views/ProductDetail2.jsx";
import ProductDetail3 from "../views/ProductDetail3.jsx";
import ProductDetail4 from "../views/ProductDetail4.jsx";
import ProductDetail5 from "../views/ProductDetail5.jsx";
import ProductDetail6 from "../views/ProductDetail6.jsx";
import ProductDetail7 from "../views/ProductDetail7.jsx";
import { ProductDetail8 } from "../views/ProductDetail8.jsx";
import ProductDetail9 from "../views/ProductDetail9.jsx";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/detail_1", element: <ProductDetail1 /> },
    { path: "/detail_2", element: <ProductDetail2 /> },
    { path: "/detail_3", element: <ProductDetail3 /> },
    { path: "/detail_4", element: <ProductDetail4 /> },
    { path: "/detail_5", element: <ProductDetail5 /> },
    { path: "/detail_6", element: <ProductDetail6 /> },
    { path: "/detail_7", element: <ProductDetail7 /> },
    { path: "/detail_8", element: <ProductDetail8 /> },
    { path: "/detail_9", element: <ProductDetail9 /> },
    { path: "/SSS", element: <SSS /> },
    { path: "/about", element: <About /> },
  ]);
  return routes;
};

export default Router;
