import { useRoutes } from "react-router";

import Home from "@/views/Home";
import Auth from "@/views/Auth";
import Applications from "@/views/Applications";
import Application from "@/views/Application";
import User from "@/views/User";
import Admin from "@/views/Admin";
import Exam from "@/views/Exam";

import Nav from "#/Nav";
import Footer from "#/Footer";
import Toast from "#/Toast";

import "./App.scss";
import Redirect from "./views/Redirect";

export default function App() {
  return (
    <>
      <Nav />
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <Home /> },
          { path: "/auth", element: <Auth /> },
          { path: "/applications", element: <Applications /> },
          { path: "/application/:id", element: <Application /> },
          { path: "/user", element: <User /> },
          { path: "/admin", element: <Admin /> },
          { path: "/redirect/:from", element: <Redirect /> },
          { path: "/exam/:id", element: <Exam /> },
        ])}
      </main>
      <Footer />
      <Toast />
    </>
  );
}
