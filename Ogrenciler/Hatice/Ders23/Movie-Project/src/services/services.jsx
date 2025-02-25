// services.jsx

const API_KEY = 'a17d098aa83662acc470d974bf21e392';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchFromTMDB = async (endpoint, params = '') => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}&${params}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const getPopularMovies = async () => {
  return await fetchFromTMDB('/movie/popular');
};

export const searchMovies = async (query) => {
  return await fetchFromTMDB('/search/movie', `query=${encodeURIComponent(query)}`);
};

export const getMovieDetails = async (movieId) => {
  return await fetchFromTMDB(`/movie/${movieId}`);
};

export default fetchFromTMDB;
