import "./App.css";
import Banner from "./components/Banner/Banner";
import Blogs from "./components/BlogCards/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Blogs />
		</>
	);
}

export default App;
