import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
	<StrictMode>
    <UserProvider>
		<Provider store={store}>
			<App />
		</Provider>
    </UserProvider>
	</StrictMode>
);
