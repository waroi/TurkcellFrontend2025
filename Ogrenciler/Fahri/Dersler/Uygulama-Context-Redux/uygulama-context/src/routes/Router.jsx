import { useRoutes } from "react-router";

import HomeView from "../views/HomeView";
import EditorView from "../views/EditorView";
import AdminView from "../views/AdminView";
import BookDetailView from "../views/BookDetailView";
import BookUpdateView from "../views/BookUpdateView";
import SignInView from "../views/SignInView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/login", element: <SignInView /> },
    { path: "/editor", element: <EditorView /> },
    { path: "/admin", element: <AdminView /> },
    { path: "/book-detail/:id", element: <BookDetailView /> },
    { path: "/update/:id", element: <BookUpdateView /> },
  ]);
  return routes;
};

export default Router;
