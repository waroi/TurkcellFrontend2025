import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./routes/Router";
import NavBar from "./components/templates/NavBar";

function App() {
  return (
    <div className="min-vh-100">
      <NavBar />
      <div className="container d-flex flex-column min-vh-100 mt-5">
        <Router />
      </div>
    </div>
  );
}

export default App;
