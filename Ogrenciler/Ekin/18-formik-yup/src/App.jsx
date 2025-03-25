import { useRoutes } from "react-router";

import Home from "@/views/Home";
import Auth from "@/views/Auth";
import Applications from "@/views/Applications";
import Application from "@/views/Application";
import User from "@/views/User";
import Admin from "@/views/Admin";

import Nav from "#/Nav";
import Footer from "#/Footer";
import Toast from "#/Toast";

import "./App.scss";
import ThankYouView from "./views/ThankYouView";

export default function App() {
  return (
    <>
      <Nav />
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <Home /> },
          { path: "/auth", element: <Auth /> },
          { path: "/applications", element: <Applications /> },
          { path: "/application/:application-id", element: <Application /> },
          { path: "/user", element: <User /> },
          { path: "/admin", element: <Admin /> },
          { path: "/thank-you", element: <ThankYouView /> },
        ])}
      </main>
      <Footer />
      <Toast />
    </>
  );
}
