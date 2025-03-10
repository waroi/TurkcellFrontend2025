const API_BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `${import.meta.env.VITE_TOKEN}`,
  },
};

export const fetchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${API_BASE_URL}/search/movie?query=${query}&language=tr-TR&page=${page}`,
    options
  );
  const data = await response.json();
  return { results: data.results || [], totalPages: data.total_pages || 1 };
};

export const fetchPersons = async (query, page = 1) => {
  const response = await fetch(
    `${API_BASE_URL}/search/person?query=${query}&language=tr-TR&page=${page}`,
    options
  );
  const data = await response.json();
  return { results: data.results || [], totalPages: data.total_pages || 1 };
};

export { IMG_URL };
