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
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTJhNDFkMzExN2I3NDA2ODY2NWE4ZmFhMzQ2Njk0MiIsIm5iZiI6MTc0MDQxNzQ5MS4wMDYsInN1YiI6IjY3YmNhOWQyMmFmOTcyZDJkOGE0NzVmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iEIDrw4RR2mJ4JMW7wj91_EE7QxlCVMyhCuYvJwM25Y",
				},
			}
		).then((response) => response.json());
	}
}
