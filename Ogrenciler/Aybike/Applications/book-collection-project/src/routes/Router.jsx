import { Navigate, useRoutes } from "react-router";
import HomeView from "../views/HomeView";
import CategoryView from "../views/CategoryView";
import LibraryView from "../views/LibraryView";
import BookDetailView from "../views/BookDetailView";
import Layout from "../components/layout/Layout";

const Router = () => {
	const routes = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <HomeView /> },
				{ path: "library", element: <LibraryView /> },
				{ path: "library/:bookId", element: <BookDetailView /> },
				{ path: "library/category/:categoryName", element: <CategoryView /> },
				{ path: "library/category/:categoryName/:bookId", element: <BookDetailView /> },
			],
		},
	]);
	return routes;
};

export default Router;
