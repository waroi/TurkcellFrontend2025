const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

export default class MovieService {
  static async fetchData(method) {
    const options = {
      method: method,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(
      `${baseUrl}/trending/movie/day?language=en-US?api_key=` + apiKey,
      options
    );
    const data = await response.json();
    return data;
  }
}
