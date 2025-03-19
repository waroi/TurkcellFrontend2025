import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Router />
    </div>
  );
}

export default App;
