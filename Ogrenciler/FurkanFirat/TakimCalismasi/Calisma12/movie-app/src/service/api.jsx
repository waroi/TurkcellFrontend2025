const API_BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/original';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzFiNjQyYjY3YmFiY2M4NjNkNGI0MjgxNDc3YWMzZSIsIm5iZiI6MTc0MDQxNzQyNC42MzkwMDAyLCJzdWIiOiI2N2JjYTk5MDIzZmUxMTdlZTZhNDc2MDMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wa65ycPLRl8D9je5Bmzb6029f-39QKLFU4h8RgcgP78`,
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
