import { useState, lazy } from "react";
import MovieForm from "../MovieForm";
const MovieCard = lazy(() => import("../MovieCard"));
const PageControl = lazy(() => import("../PageControl"));
import { fetchMovies, IMG_URL } from "../../service/api";
import Header from "../../components/Header";
export default function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [movieQuery, setMovieQuery] = useState("");
  const [currentMoviePage, setCurrentMoviePage] = useState(1);
  const [moviePages, setMoviePages] = useState(1);
  const handleMovieSubmit = async (e) => {
    e.preventDefault();
    const { results, totalPages } = await fetchMovies(movieQuery, 1);
    setMovieData(results);
    setMoviePages(totalPages);
    setCurrentMoviePage(1);
  };
  const handleMoviePageChange = async (newPage) => {
    if (newPage >= 1 && newPage <= moviePages) {
      setCurrentMoviePage(newPage);
      const { results } = await fetchMovies(movieQuery, newPage);
      setMovieData(results);
    }
  };
  return (
    <>
      <MovieForm
        handleMovieSubmit={handleMovieSubmit}
        setMovieQuery={setMovieQuery}
      />
      <Header text={"Filmler"} />
      {movieData?.map((movie) => (
        <MovieCard key={movie.id} Movie={movie} imgURL={IMG_URL} />
      ))}
      {moviePages > 1 && (
        <PageControl
          currentPage={currentMoviePage}
          totalPages={moviePages}
          handlePageChange={handleMoviePageChange}
        />
      )}
    </>
  );
}
