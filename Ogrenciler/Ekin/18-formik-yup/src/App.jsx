import { useRoutes } from "react-router";

import Home from "@/views/Home";
import Authentication from "@/views/Authentication";
import ApplicationView from "@/views/ApplicationView";
import UserView from "@/views/UserView";
import AdminView from "@/views/AdminView";

import Navigation from "#/page/Navigation";
import Footer from "#/page/Footer";
import Toast from "#/page/Toast";

import "./App.scss";
import ThankYouView from "./views/ThankYouView";

export default function App() {
  return (
    <>
      <Navigation />
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <Home /> },
          { path: "/sign-up", element: <Authentication /> },
          { path: "/sign-in", element: <Authentication /> },
          { path: "/application", element: <ApplicationView /> },
          { path: "/user", element: <UserView /> },
          { path: "/admin", element: <AdminView /> },
          { path: "/thank-you", element: <ThankYouView /> },
        ])}
      </main>
      <Footer />
      <Toast />
    </>
  );
}
