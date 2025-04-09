import { useRoutes } from "react-router";

import Home from "@/views/Home";
import Game from "@/views/Game";

import "@/style.scss";

export default function App() {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/game", element: <Game /> },
  ]);
}
