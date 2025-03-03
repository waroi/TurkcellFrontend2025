const BASE_URL = "https://api.collectapi.com/news/getNews";
const TOKEN = "apikey 7kg4zav5byF3E3mH58sP8p:4TQgT1yakXP55reJmt2GLK";

class NewsClient {
	static async getNews(category = "general") {
		const url = `${BASE_URL}?country=tr&tag=${category}`;
		return fetch(url, {
			method: "GET",
			headers: { "content-type": "application/json", authorization: TOKEN },
		}).then((response) => response.json());
	}
}

export default NewsClient;
