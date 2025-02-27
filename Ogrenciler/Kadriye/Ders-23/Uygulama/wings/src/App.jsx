import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeView from "./views/HomeView";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeView />
      <Footer />
    </>
  );
}

export default App;
