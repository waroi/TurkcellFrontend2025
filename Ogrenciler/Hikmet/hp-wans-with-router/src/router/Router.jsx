import { useRoutes } from "react-router";
import AllProducts from "../views/AllProducts";
import Contact from "../views/Contact";
import FaqView from "../views/Faq";
import Home from "../views/Home";
import Product1 from "../views/Product1";
import Product2 from "../views/Product2";
import Product3 from "../views/Product3";
import Product4 from "../views/Product4";
import Product5 from "../views/Product5";
import Product6 from "../views/Product6";

function Router() {
	const router = useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/faq", element: <FaqView /> },
		{ path: "/contact", element: <Contact /> },
		{ path: "/all-products", element: <AllProducts /> },

		//? Products Routes
		{ path: "/product-1", element: <Product1 /> },
		{ path: "/product-2", element: <Product2/> },
		{ path: "/product-3", element: <Product3/> },
		{ path: "/product-4", element: <Product4 /> },
		{ path: "/product-5", element: <Product5 /> },
		{ path: "/product-6", element: <Product6 /> },
		// { path: "/product-7", element: <Product7 /> },
		// { path: "/product-8", element: <Product8 /> },
		// { path: "/product-9", element: <Product9 /> },
		// { path: "/product-10", element: <Product10 /> },
		// { path: "/product-11", element: <Product11 /> },
		// { path: "/product-12", element: <Product12 /> },
	]);
	return router;
}

export default Router;
