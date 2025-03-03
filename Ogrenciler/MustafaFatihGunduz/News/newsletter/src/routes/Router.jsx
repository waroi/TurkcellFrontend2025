import { useRoutes } from "react-router";
import HomeView from "../../components/views/HomeView";
import NewsletterController from "../../components/controller/NewsletterController";
import HealthController from "../../components/controller/HealthController";
import GeneralController from "../../components/controller/GeneralController";
import SportController from "../../components/controller/SportController";
import EconomyController from "../../components/controller/EconomyController";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/haberler/",
      element: <NewsletterController />,
      children: [
        { path: "spor", element: <SportController /> },
        { path: "ekonomi", element: <EconomyController /> },
        { path: "sağlık", element: <HealthController /> },
        { path: "genel", element: <GeneralController /> },
      ],
    },
  ]);
  return routes;
};

export default Router;
