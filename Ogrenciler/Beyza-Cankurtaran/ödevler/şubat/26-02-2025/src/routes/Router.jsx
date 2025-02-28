import { useRoutes } from "react-router";
import { lazy } from "react";
import HomeView from "../views/HomeView";
const SssView = lazy(() => import("../views/SssView"));
const ContactView = lazy(() => import("../views/ContactView"));
const ProductDetailView = lazy(() => import("../views/ProductDetailView"));

const Router = ({ getirProduct, setSelector }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <HomeView getirProduct={getirProduct} setSelector={setSelector} />
      ),
    },
    { path: "/sss", element: <SssView /> },
    { path: "/contact-us", element: <ContactView /> },
    { path: "/urunDetay/:id", element: <ProductDetailView /> },
  ]);
  return routes;
};

export default Router;
