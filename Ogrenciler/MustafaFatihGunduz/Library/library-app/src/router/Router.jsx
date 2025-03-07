import { useRoutes } from "react-router";
import CategoryPage from "../Pages/CategoryPage";
import Home from "../Pages/Home";
import LoginScreen from "../Pages/LoginScreen";
const Router = () => {
	const routes = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/login", element: <LoginScreen /> },
		{ path: "/yayinevi/:publishing", element: <CategoryPage /> },
	]);
	return routes;
};

export default Router;
