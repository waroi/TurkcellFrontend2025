import React from "react";
import { Navigate, useRoutes } from "react-router";
import LeagueInfo from "../components/LeagueInfo";
import NewsList from "../components/NewsList";
import NewsPage from "../components/NewsPage";
import NotFoundPage from "../components/NotFoundPage";
import EconomyView from "../views/EconomyView";
import GeneralView from "../views/GeneralView";
import HomeView from "../views/HomeView";
import SportView from "../views/SportView";
import TechnologyView from "../views/TechnologyView";

function Routers() {
	const routers = useRoutes([
		{ path: "/", element: <HomeView /> },
		{
			path: "/news/",
			element: <NewsPage />,
			children: [
				{ index: true, element: <Navigate to="general" /> },
				{ path: "general", element: <GeneralView /> },
				{ path: "economy", element: <EconomyView /> },
				{
					path: "sport",
					element: <SportView />,
					children: [
						{ index: true, element: <Navigate to="sportnews" /> },
						{ path: "sportnews", element: <NewsList /> },
						{ path: "leaguage", element: <LeagueInfo /> },
					],
				},
				{ path: "technology", element: <TechnologyView /> },
			],
		},
		{ path: "*", element: <NotFoundPage /> },
	]);
	return routers;
}

export default Routers;
