import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import Person from "./components/Person/Person";
import Footer from "./components/Footer/Footer";

function App() {
	const [searchedMovie, setSearchedMovie] = useState("");
	const [searchedPerson, setSearchedPerson] = useState("");

	const handleMovieSearch = (movieName) => {
		setSearchedMovie(movieName);
	};
	const handlePersonSearch = (person) => {
		setSearchedPerson(person);
	};
	return (
		<>
			<Navbar onMovieSearch={handleMovieSearch} onPersonSearch={handlePersonSearch}/>
			<Movie movieName={searchedMovie} />
			<Person personName={searchedPerson}/>
			<Footer/>
		</>
	);
}

export default App;
