import { useRoutes } from "react-router";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import ApplicationView from "./views/ApplicationView";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import "./App.scss";
import AdminView from "./views/AdminView";

import useStore from "./store/useStore";

function App() {
  const store = useStore();

  return (
    <>
      <Navigation />
      <button
        onClick={() => {
          store.setToast(Math.random().toString(36));
        }}
      >
        DEBUG !!!!!!!!!!!!!!!!!!!!!
      </button>
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <HomeView /> },
          { path: "/application", element: <ApplicationView /> },
          { path: "/admin", element: <AdminView /> },
        ])}
      </main>
      <Footer />
      <Toast />
    </>
  );
}

export default App;
