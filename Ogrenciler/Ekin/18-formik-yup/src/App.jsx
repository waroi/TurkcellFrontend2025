import { useRoutes } from "react-router";

import HomeView from "./views/HomeView";
import ApplicationView from "./views/ApplicationView";
import UserView from "./views/UserView";
import AdminView from "./views/AdminView";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <HomeView /> },
          { path: "/application", element: <ApplicationView /> },
          { path: "/user", element: <UserView /> },
          { path: "/admin", element: <AdminView /> },
        ])}
      </main>
      <Footer />
      <Toast />
    </>
  );
}

export default App;
