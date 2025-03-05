import { useRoutes } from "react-router";
import BookList from "../components/BookList/BookList";
import BookDetail from "../components/BookDetail";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <BookList /> },
    { path: "/:id", element: <BookDetail /> },
  ]);
  return routes;
};

export default Router;
