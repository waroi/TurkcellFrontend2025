import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import "./lib/firebase";

createRoot(document.getElementById("root")!).render(<App />);
