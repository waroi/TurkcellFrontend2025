import "./App.css";
// import Home from '../src/view/Home';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}

export default App;
