import { useRoutes } from "react-router";
import BookList from "../components/BookList/BookList";
import BookDetail from "../components/BookDetail";

const Router = () => {
  const routes = useRoutes([
    { path: "/books", element: <BookList /> },
    { path: "/books/:id", element: <BookDetail /> },
  ]);
  return routes;
};

export default Router;
