import { useRoutes } from "react-router";
import RegisterView from "../views/RegisterView";
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
				{ path: "/bookId", element: <LoginView /> },
				{ path: ":bookId", element: <BookDetailView /> },
				{path: "/register", element: <RegisterView />},
			],
		},
	]);
	return routes;
};

export default Router;
