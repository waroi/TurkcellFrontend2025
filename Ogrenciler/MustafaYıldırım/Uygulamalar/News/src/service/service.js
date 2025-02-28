const NEWS_URL =
  "https://api.collectapi.com/news/getNews?country=tr&tag=general";
const TOKEN = "apikey 1vUTuR54ZLk7HqjRwh5zjr:3ueBI1ZjSyPfKbM3epJfyF";
class NewsClient {
  constructor() {}
  static async getNews() {
    return fetch(NEWS_URL, {
      method: "GET",
      headers: { "content-type": "application/json", authorization: TOKEN },
    }).then((response) => response.json());
  }
}
export default NewsClient;
