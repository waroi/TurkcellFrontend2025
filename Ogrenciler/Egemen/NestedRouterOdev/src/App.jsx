import "./App.css";
import fetchArticles from "../src/services/services";
import Router from "./routes/Router";

function App() {
  fetchArticles();
  return (
    <>
      <Router />
    </>
  );
}

export default App;
