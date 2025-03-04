import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/Router";
import { BrowserRouter as Router } from "react-router"; 
import './App.css';

function App() {
  return (
    <Router> 
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
