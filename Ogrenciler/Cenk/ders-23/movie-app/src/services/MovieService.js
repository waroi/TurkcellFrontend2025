// const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export default class MovieService {
  static async getAllMovies(method = "GET") {
    const options = {
      method: method,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(`${baseUrl}/trending/all/day?language=tr-TR`, options);
    const data = await response.json();
    return data;
  }
  // static async getMovieById(movieId) {
  //   const response = await fetch(`${baseUrl}/movie/${movieId}?api_key=${apiKey}`);
  //   const data = await response.json();
  //   return data;
  // }
}