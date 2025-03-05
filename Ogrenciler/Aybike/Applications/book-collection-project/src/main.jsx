import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<UserProvider>
					<Provider store={store}>
						<App />
					</Provider>
				</UserProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
