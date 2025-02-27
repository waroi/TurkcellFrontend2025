import React from "react";
import { useRoutes } from "react-router";
import Home from "../views/Home";
import ParametreView from "../views/ParametreView";
import userRouter from "./userRouter";

function Router() {
	const routes = useRoutes([
		{ path: "/", element: <Home /> },
		userRouter,
		{
			path: "/parametre/:id",
			element: <ParametreView />,
		},
	]);

	return routes;
}

export default Router;
