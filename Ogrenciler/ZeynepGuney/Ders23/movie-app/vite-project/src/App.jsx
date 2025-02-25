import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";

function App() {
	const [searchedMovie, setSearchedMovie] = useState("");

	const handleMovieSearch = (movieName) => {
		setSearchedMovie(movieName);
	};
	return (
		<>
			<Navbar onMovieSearch={handleMovieSearch} />
			<Movie movieName={searchedMovie} />
		</>
	);
}

export default App;
