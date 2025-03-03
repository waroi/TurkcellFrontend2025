import "./App.css";
// import Home from '../src/view/Home';
import Navbar from "./components/Navbar";
//import Footer from "./components/Footer/Footer";
import fetchArticles from "../src/services/services";
import Router from "./routes/Router";

function App() {
  fetchArticles();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
