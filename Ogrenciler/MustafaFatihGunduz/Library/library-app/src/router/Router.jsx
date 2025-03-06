import { useRoutes } from "react-router";
import LoginScreen from "../Pages/LoginScreen";
import Home from "../Pages/Home";
import CategoryPage from "../Pages/CategoryPage";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "/kategori/:category", element: <CategoryPage /> },
  ]);
  return routes;
};

export default Router;
