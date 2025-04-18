import { useRoutes } from "react-router";
import Layout from "../components/layout/Layout";
import { lazy } from "react";

const LazyHome = lazy(() => import('../pages/Home/Home'))
const LazyGiftView = lazy(() => import('../pages/Gift/GiftView'))
const LazyAdminLogin = lazy(() => import('../pages/admin/AdminLogin'))
const LazyApplicationView = lazy(() => import('../pages/user/ApplicationView'))
const LazyApplicationDetailView = lazy(() => import('../pages/admin/ApplicationDetailView'))
const LazyApplicationListView = lazy(() => import('../pages/admin/ApplicationListView'))
const LazyTest = lazy(() => import('../pages/test/Test'))
const LazyDashboard = lazy(() => import("../components/DashBoard/Dashboard"))
const LazyCompletedUsers = lazy(() => import("../pages/CompletedUsers/CompletedUsers"))

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <LazyHome /> },
        {
          path: "admin",
          children: [
            { path: "login", element: <LazyAdminLogin /> },
            {
              path: "applications",
              element: <LazyApplicationListView />,
            },
            {
              path: "applications/:applicationId",
              element: <LazyApplicationDetailView />,
            },
          ],
        },
        {
          path: "application",
          element: <LazyApplicationView />,
        },
        {
          path: 'gift',
          element: <LazyGiftView />
        },
        {
          path: "dashboard",
          element: <LazyDashboard />
        },
        {
          path: 'test',
          element: <LazyTest />
        },
        {
          path: 'completed-users',
          element: <LazyCompletedUsers />
        }
      ],
    },
  ]);
  return routes;
};

export default Router;
