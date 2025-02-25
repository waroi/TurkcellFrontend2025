const BASE_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";

export default class MovieClient {
	constructor() {}

	static async getMovies(movie) {
		return fetch(
			`${BASE_MOVIE_URL}?query=${movie}&include_adult=true&language=en-US&page=1`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `${import.meta.env.VITE_TOKEN}`,
				},
			}
		).then((response) => response.json());
	}
}
