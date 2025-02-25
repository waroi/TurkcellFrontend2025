// const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export default class MovieService {
  static async getAllMovies(page) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(`${baseUrl}/trending/movie/day?include_adult=false&language=tr-TR&page=${page}`, options);
    const data = await response.json();
    return data;
  } 
  
  static async getPerson(page) {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(`${baseUrl}/trending/person/day?language=tr-TR&page=${page}`, options);
    const data = await response.json();
    return data;
  }
  
}

