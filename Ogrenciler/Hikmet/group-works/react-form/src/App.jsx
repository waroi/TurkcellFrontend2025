import Navbar from "../src/components/Navbar";
import "./App.css";
import Footer from "./components/footer/Footer";
import AppRouter from "./routes/Router";

function App() {
	return (
		<>
			<Navbar />
			<AppRouter />
			<Footer />
		</>
	);
}

export default App;
