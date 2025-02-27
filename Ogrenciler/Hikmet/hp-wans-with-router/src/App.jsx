import "./App.scss";
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<AboutUs />
			{/* <Router /> */}
			<Footer />
		</>
	);
}

export default App;
