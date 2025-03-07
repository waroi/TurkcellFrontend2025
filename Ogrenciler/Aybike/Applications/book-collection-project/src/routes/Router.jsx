import { useRoutes } from "react-router";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import HomeView from "../views/HomeView";
import BookDetailView from "../views/BookDetailView";
import Layout from "../components/layout/Layout";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <HomeView /> },
				{ path: ":bookId", element: <BookDetailView /> },
				{path: "/register", element: <RegisterView />},
				{path: "/login", element: <LoginView />},
				
			],
		},
	]);
	return routes;
};

export default Router;
