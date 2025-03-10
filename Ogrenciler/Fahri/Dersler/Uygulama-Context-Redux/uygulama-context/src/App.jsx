import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./routes/Router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

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
