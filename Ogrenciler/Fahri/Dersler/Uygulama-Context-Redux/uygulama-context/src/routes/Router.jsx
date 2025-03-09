import { useRoutes } from "react-router";
import BookUpdate from "../components/BookUpdate";
import SignIn from "../components/SignIn";
import HomeView from "../views/HomeView";
import EditorView from "../views/EditorView";
import AdminView from "../views/AdminView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/login", element: <SignIn /> },
    { path: "/editor", element: <EditorView /> },
    { path: "/admin", element: <AdminView /> },
    { path: "/update/:id", element: <BookUpdate /> },
  ]);
  return routes;
};

export default Router;
