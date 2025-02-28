import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import SssView from "../views/SssView";
import ContactView from "../views/ContactView";
import ProductDetailView from "../views/ProductDetailView";

const Router = (getirProduct) => {
  const routes = useRoutes([
    { path: "/", element: <HomeView getirProduct={getirProduct} /> },
    { path: "/sss", element: <SssView /> },
    { path: "/contact-us", element: <ContactView /> },
    { path: "/urunDetay/:id", element: <ProductDetailView /> },
  ]);
  return routes;
};

export default Router;
