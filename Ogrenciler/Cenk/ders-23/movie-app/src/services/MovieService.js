const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export default class MovieService {
  static async getAllMovies(searchValue, page = 1) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(
      `${baseUrl}/search/movie?query=${searchValue}&include_adult=false&language=tr-TR&page=${page}`,
      options
    );
    const data = await response.json();
    return data;
  }
}
