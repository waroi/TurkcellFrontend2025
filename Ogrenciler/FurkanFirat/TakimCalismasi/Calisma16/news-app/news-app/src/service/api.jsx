const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "6f612dd450f844eb9ab7c1956417339b";

export const fetchNews = async (category, query = "") => {
  const response = await fetch(
    `${BASE_URL}?country=us&category=${category}&q=${query}`,
    {
      method: "GET",
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const data = await response.json();
  return data.articles || [];
};
