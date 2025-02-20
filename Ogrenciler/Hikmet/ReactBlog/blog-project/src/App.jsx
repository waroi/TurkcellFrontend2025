import "./App.css";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<main>
				<Navbar />
				{/* <Banner />
			<Blogs /> */}
				<BlogDetail />
			</main>
			<Footer />
		</>
	);
}

export default App;
