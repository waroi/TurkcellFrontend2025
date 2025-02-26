const BASE_MOVIE_URL = "https://api.themoviedb.org/3/search/movie";
const BASE_PERSON_URL = "https://api.themoviedb.org/3/search/person";
const BASE_PERSON_DETAIL_URL = `https://api.themoviedb.org/3/person`;

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
	static async getPerson(person) {
		return fetch(
			`${BASE_PERSON_URL}?query=${person}&include_adult=true&language=en-US&page=1`,
			{
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `${import.meta.env.VITE_TOKEN}`,
				},
			}
		).then((response) => response.json());
	}

	static async getPersonDetail(person_id) {
		return fetch(`${BASE_PERSON_DETAIL_URL}/${person_id}?language=en-US`, {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `${import.meta.env.VITE_TOKEN}`,
			},
		}).then((response) => response.json());
	}
}
