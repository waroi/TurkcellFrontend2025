import { useRoutes, Navigate } from "react-router";
import Layout from "../components/layout/Layout";
import ApplicationListView from "../pages/admin/ApplicationListView";
import ApplicationDetailView from "../pages/admin/ApplicationDetailView";
import ApplicationView from "../pages/user/ApplicationView";
import PrivateRoute from "./PrivateRoute";
import AdminLogin from "../pages/admin/AdminLogin";
import GiftView from "../pages/Gift/GiftView";
import CVSlider from "../pages/Slider/CVSlider";
const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <CVSlider /> },
        {
          path: "admin",
          children: [
            { path: "login", element: <AdminLogin /> },
            {
              path: "applications",
              element: <ApplicationListView />,
            },
            {
              path: "applications/:applicationId",
              element: <ApplicationDetailView />,
            },
          ],
        },
        {
          path: "application",
          element: <ApplicationView />,
        },
        {
          path: 'gift',
          element: <GiftView />
        }
      ],
    },
  ]);
  return routes;
};

export default Router;
