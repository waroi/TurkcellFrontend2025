import { useRoutes } from "react-router";
import Navigation from "./components/Navigation";
import HomeView from "./views/HomeView";
import ApplicationView from "./views/ApplicationView";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <main className="py-5 bg-white">
        {useRoutes([
          { path: "/", element: <HomeView /> },
          { path: "/application", element: <ApplicationView /> },
        ])}
      </main>
      <Footer />
    </>
  );
}

export default App;
