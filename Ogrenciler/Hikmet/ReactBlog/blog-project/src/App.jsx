import "./App.css";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/BlogCards/Blogs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<main>
				<Navbar />
				<Banner />
				<Blogs />
				{/* <BlogDetail /> */}
			</main>
			<Footer />
		</>
	);
}

export default App;
