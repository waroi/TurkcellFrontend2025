import { useRoutes } from "react-router";
import BookList from "../components/BookList/BookList";
import BookDetail from "../components/BookDetail";
import BookUpdate from "../components/BookUpdate";
import SignIn from "../components/SignIn";
import HomeView from "../views/HomeView";
import EditorView from "../views/EditorView";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeView /> },
    { path: "/login", element: <SignIn /> },
    { path: "/editor", element: <EditorView /> },
    { path: "/books", element: <BookList /> },
    { path: "/:id", element: <BookDetail /> },
    { path: "/update/:id", element: <BookUpdate /> },
  ]);
  return routes;
};

export default Router;
