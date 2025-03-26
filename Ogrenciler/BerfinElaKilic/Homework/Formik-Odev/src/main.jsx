import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ActionsProvider } from "./context/ActionsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ActionsProvider>
          <App />
        </ActionsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
