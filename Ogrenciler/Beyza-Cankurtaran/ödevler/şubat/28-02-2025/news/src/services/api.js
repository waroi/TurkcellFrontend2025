const API = {
    URL: "https://newsapi.org/v2",
    key: "187a89b59ed04145a155b53543ddc178",
    };
    export async function getNews(category = "general") {
    return await fetch(
    `${API.URL}/top-headlines?apiKey=${API.key}&category=${category}`
    )
    .then((response) => response.json())
    .then((response) => response.articles);
    }