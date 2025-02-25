import { useState } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import PaginationCom from "./Components/PaginationCom";
import FormCom from "./Components/FormCom";
import Navbar from "./Components/Navbar";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [query, setQuery] = useState("");
  //Pagination işlemi için stateler
  const [currentPage, setCurrentPage] = useState(1); // Şu anki sayfa
  const [totalPages, setTotalPages] = useState(1);

  const searchMovieURL = "https://api.themoviedb.org/3/search/movie";
  //image için gerekn url'in sonuna pathi ekledğimizfde geliyor
  const imageMovieURL = "https://image.tmdb.org/t/p/original";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFiNjQyYjY3YmFiY2M4NjNkNGI0MjgxNDc3YWMzZSIsIm5iZiI6MTc0MDQxNzQyNC42MzkwMDAyLCJzdWIiOiI2N2JjYTk5MDIzZmUxMTdlZTZhNDc2MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wa65ycPLRl8D9je5Bmzb6029f-39QKLFU4h8RgcgP78",
    },
  };

  //default olarak 1 demem'[z gerekiyor]
  const fetchMovieData = async (page = 1) => {
    const response = await fetch(
      `${searchMovieURL}?query=${query}&language=tr-TR&page=${page}`,
      options
    );
    const data = await response.json();
    setMovieData(data.results || []);
    //gelen data ile totalpage aliyoruz
    setTotalPages(data.total_pages || 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovieData(1); // İlk sayfadan başlat
    setCurrentPage(1);

    console.log(movieData);
  };

  //hangi sayfada oldugumu kontral edip o sayfanin get istegini oluturuyor
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      fetchMovieData(newPage);
    }
  };

  return (
    <>
      <Navbar/>
      <h1 className="header col-12 fs-1">En iyi filmleri keşfet! <br />
        <img src="https://media.tenor.com/pFuNNH6LO7cAAAAM/munchies-420.gif" alt="" />
      </h1>
      <div className="container">
        <FormCom 
          handleSubmit={handleSubmit} 
          setQuery={setQuery}
        />
        <div className="row">
          <div className="col-12">
            {movieData?.map((movie) => (
              <MovieCard
                className="w=100"
                key={movie.id}
                Movie={movie}
                imageMovieURL={imageMovieURL}
              />
            ))}
          </div>
        </div>
        <PaginationCom
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </>
  );
}

export default App;
