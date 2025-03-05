import { Navigate, useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import CategoryView from "../views/CategoryView";
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
				{ path: "category/:categoryName", element: <CategoryView /> },
				{ path: "category/:categoryName/:bookId", element: <BookDetailView /> },
			],
		},
	]);
	return routes;
};

export default Router;
