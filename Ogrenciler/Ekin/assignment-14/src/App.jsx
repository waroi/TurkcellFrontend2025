import { useEffect, useState } from "react";
import TMDB from "themoviedb";
import Navigation from "./components/Navigation";
import Movies from "./components/Movies";
import Header from "./components/Header";

const database = new TMDB("ffa3dd1d22ae47c3e3b7f9c06c8cbb22");

function setMovieOverview(id) {
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmEzZGQxZDIyYWU0N2MzZTNiN2Y5YzA2YzhjYmIyMiIsIm5iZiI6MTc0MDQxNzYyNC4zMTEsInN1YiI6IjY3YmNhYTU4MTJiZmM4NWJjMzZiZDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zu7OUPZoDu1V1Rpvl8hfzmKx39KDFLfMKcOM2my-9pk",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      document.querySelector(
        `[data-movie-id='${id}']`
      ).textContent = `${response.overview.substring(0, 100)}...`;
    });
}

async function getPerson(name) {
  return await fetch(
    `https://api.themoviedb.org/3/search/person?query=${name}&include_adult=false&language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmEzZGQxZDIyYWU0N2MzZTNiN2Y5YzA2YzhjYmIyMiIsIm5iZiI6MTc0MDQxNzYyNC4zMTEsInN1YiI6IjY3YmNhYTU4MTJiZmM4NWJjMzZiZDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zu7OUPZoDu1V1Rpvl8hfzmKx39KDFLfMKcOM2my-9pk",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => response.results[0]);
}

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState();

  useEffect(() => {
    (async () => {
      let topRatedMovies = await database.topRatedMovies();

      setMovies(topRatedMovies);

      topRatedMovies.forEach((movie) => {
        setMovieOverview(movie.id);
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!search) {
        setSelected();
        return;
      }

      //* Bubble :/
      let selectedMovie = (await database.searchMovies(search)).sort(
          (previous, current) => current.popularity - previous.popularity
        )[0],
        selectedPerson = await getPerson(search);

      if (selectedMovie) {
        if (selectedPerson)
          setSelected(
            (selectedMovie?.popularity ?? 0) > (selectedPerson?.popularity ?? 0)
              ? { ...selectedMovie, type: "movie" }
              : { ...selectedPerson, type: "person" }
          );
        else setSelected({ ...selectedMovie, type: "movie" });
      } else if (selectedPerson)
        setSelected({ ...selectedPerson, type: "person" });
    })();
  }, [search]);

  return (
    <>
      <Navigation setSearch={setSearch} />
      <Header selected={selected} database={database} />
      <Movies movies={movies} />
    </>
  );
}

export default App;
