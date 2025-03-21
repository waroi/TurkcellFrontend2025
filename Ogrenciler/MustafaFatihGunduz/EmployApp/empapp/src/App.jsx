import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPanel from "./pages/AdminPanel";
import AdminButton from "./components/AdminButton";
import Application from "./FormApplication/page";

function App() {
  return (
    <Router>
      <div>
        {/* <AdminButton /> */}
        <Routes>
          <Route path="/" element={<Application />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
