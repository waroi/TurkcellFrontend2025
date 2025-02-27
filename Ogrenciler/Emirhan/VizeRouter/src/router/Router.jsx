import { useRoutes } from "react-router";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element: <ProductPage /> },

  ]);
  return routes;
};

export default Router;
