import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Router />
      <Footer></Footer>
    </>
  );
}

export default App;
