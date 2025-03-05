import { useRoutes } from "react-router";
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
			],
		},
	]);
	return routes;
};

export default Router;
