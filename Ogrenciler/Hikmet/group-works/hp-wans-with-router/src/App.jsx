import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Router from "./router/Router";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> 
      <Router />
      <Footer />
    </>
  );
}

export default App;
