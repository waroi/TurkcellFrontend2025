import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import AboutUsView from "../views/AboutUsView";
import ProductDetailView from "../views/ProductDetailView";
import ProductsView from "../views/ProductsView";
const Router = () => {
  const routes = useRoutes([
    { path: "/home", element: <HomeView /> },
    { path: "/about-us", element: <AboutUsView /> },
    { path: "/product-detail-view/:id", element: <ProductDetailView /> },
    { path: "/products", element: <ProductsView /> },
  ]);
  return routes;
};

export default Router;
