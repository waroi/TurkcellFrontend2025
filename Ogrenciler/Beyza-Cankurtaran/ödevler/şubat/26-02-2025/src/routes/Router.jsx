import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import SssView from "../views/SssView";
import ContactView from "../views/ContactView";
import ProductDetailView from "../views/ProductDetailView";
import About from "../components/About/about";
import Product from "../components/Product/product";
import Contact from "../components/Contact/Contact";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/sss", element: <SssView /> },
    { path: "/contact-us", element: <ContactView /> },
    { path: "/urunDetay/:id", element: <ProductDetailView /> },
  ]);
  return routes;
};

export default Router;
