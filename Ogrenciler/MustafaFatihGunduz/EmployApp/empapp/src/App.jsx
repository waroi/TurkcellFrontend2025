import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import styles from "../src/pages/AdminPanel.module.css"

function App() {
  return (
    <div className= {`${styles.backGround}`}>
          <BrowserRouter>
      <Router />
    </BrowserRouter>
    </div>
  );
}

export default App;
