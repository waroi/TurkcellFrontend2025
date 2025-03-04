import { useRoutes } from "react-router";
import BookList from "../components/BookList/BookList";
import BookDetail from "../components/BookDetail";
import BookUpdate from "../components/BookUpdate";

const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <BookList /> },
    { path: "/:id", element: <BookDetail /> },
    { path: "/update/:id", element: <BookUpdate /> },
  ]);
  return routes;
};

export default Router;
