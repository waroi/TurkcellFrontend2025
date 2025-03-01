const BASE_URL = "https://api.collectapi.com/news/getNews";
const TOKEN = "apikey 1vUTuR54ZLk7HqjRwh5zjr:3ueBI1ZjSyPfKbM3epJfyF";

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
