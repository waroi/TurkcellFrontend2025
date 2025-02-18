const API_KEY = "6ef82edea371c085c5f97771c8e52dc3";

export default class APIRequest {
	static async getWeather(lat, lon) {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
			);
			return response.json();
		} catch (error) {
			console.error("API Error:", error);
		}
	}
}
