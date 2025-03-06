import { useRoutes } from "react-router";
import HomeView from "../../views/HomeView";
import AdminView from "../../views/AdminView";
import LoginView from "../../views/LoginView";

export default function Router() {
  const router = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/login", element: <LoginView /> },
    { path: "/admin", element: <AdminView /> },
  ]);
  return router;
}
