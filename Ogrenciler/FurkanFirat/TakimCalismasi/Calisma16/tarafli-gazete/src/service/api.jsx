
const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchNews = async (category, query = '') => {
  const response = await fetch(
    `${BASE_URL}?country=us&category=${category}&q=${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  console.log(API_KEY)
  return data.articles || [];
};
