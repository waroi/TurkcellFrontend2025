import "./scss/main.scss";
import Navbar from "./components/organisms/Navbar/Navbar";
import Router from "./routes/router";

function App() {
  return (
    <>
      <Navbar />
      <Router />
    </>
  );
}

export default App;
