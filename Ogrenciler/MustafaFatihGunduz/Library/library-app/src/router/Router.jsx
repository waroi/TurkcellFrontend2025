import { useRoutes } from "react-router";
import CategoryPage from "../Pages/CategoryPage";
import Home from "../Pages/Home";
import LoginScreen from "../Pages/LoginScreen";
import AboutPage from "../Pages/AboutPage";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <LoginScreen /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/yayinevi/:publishing", element: <CategoryPage /> },
  ]);
  return routes;
};

export default Router;
