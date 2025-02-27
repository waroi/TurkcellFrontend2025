import { NavLink } from "react-router";
import "./App.css";
import Router from "./routes/Router";

function App() {
	return (
		<>
			<ul>
				<li>
					<NavLink to="/">HomePage</NavLink>
				</li>
				<li>
					<NavLink to="/user">UserPage</NavLink>
				</li>
				<li>
					<NavLink to="/parametre/101">Parametre</NavLink>
				</li>
			</ul>
			<Router />
		</>
	);
}

export default App;
