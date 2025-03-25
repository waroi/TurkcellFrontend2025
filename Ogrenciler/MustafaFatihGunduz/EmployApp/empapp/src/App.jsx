// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import Application from "./FormApplication/page";
import LoginPage from "./pages/LoginPage";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Router />
    </BrowserRouter>
  );
}

export default App;
