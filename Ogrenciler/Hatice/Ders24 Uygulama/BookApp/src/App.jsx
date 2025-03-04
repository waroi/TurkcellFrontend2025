import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/Router";
import { BrowserRouter as Router } from "react-router"; // Router buraya taşındı
import './App.css';

function App() {
  return (
    <Router> {/* Router burada tanımlandı */}
      <Navbar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
