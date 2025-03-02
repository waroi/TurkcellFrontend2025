import { useRoutes, Navigate } from "react-router";
import userRouter from "./userRouter";
import NewsLetterView from "../../components/views/NewsletterView";
import GeneralNewsView from "../../components/views/GeneralNewsView";
import HealthNewsView from "../../components/views/HealthNewsView";
import EconomyNewsView from "../../components/views/EconomyNewsView";
import SportNewsView from "../../components/views/SportNewsView";
const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <NewsLetterView /> },
    userRouter,
    { path: "/parametre/:id", element: <ParametreView /> },
    {
      path: "/haberler/",
      element: <NewView />,
      children: [
        { index: true, element: <Navigate to="spor" /> },
        { path: "spor", element: <SportNewView /> },
        { path: "ekonomi", element: <EconomyNewView /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
