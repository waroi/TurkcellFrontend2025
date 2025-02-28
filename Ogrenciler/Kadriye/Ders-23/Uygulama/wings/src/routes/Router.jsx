import { useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import AboutUsView from "../views/AboutUsView";
import ProductDetailView from "../views/ProductDetailView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/about-us", element: <AboutUsView /> },
    { path: "/product-detail-view/:id", element: <ProductDetailView /> },
  ]);
  return routes;
};

export default Router;
