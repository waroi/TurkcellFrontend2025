import Navigation from "./components/Navigation";
import { useRoutes } from "react-router";
import HomeView from "./views/HomeView";
import PokemonView from "./views/PokemonView";
import Footer from "./components/Footer";
import "./assets/style.scss";

function App() {
  return (
    <>
      <Navigation />
      {useRoutes([
        { path: "/", element: <HomeView /> },
        { path: "/pokemon/:name", element: <PokemonView /> },
      ])}
      <Footer />
    </>
  );
}

export default App;
