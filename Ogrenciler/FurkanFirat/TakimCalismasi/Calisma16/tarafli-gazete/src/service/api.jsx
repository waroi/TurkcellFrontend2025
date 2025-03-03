const BASE_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = '71a9b81b167343738dfd6bb4bb2fa41d';

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
  return data.articles || [];
};
