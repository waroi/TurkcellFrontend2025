import "./App.css";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/BlogCards/Blogs";
import Footer from "./components/Footer/Footer";
import ModalCard from "./components/ModalCard/ModalCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<main>
				<ModalCard />
				<Navbar />
				<Banner />
				<Blogs />
			</main>
			<Footer />
		</>
	);
}

export default App;
