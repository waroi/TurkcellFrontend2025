import { useRoutes } from "react-router";

import Home from "@/views/Home";
import Auth from "@/views/Auth";
import Applications from "@/views/Applications";
import User from "@/views/User";
import Admin from "@/views/Admin";

import Nav from "#/page/Nav";
import Footer from "#/page/Footer";
import Toast from "#/page/Toast";

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
