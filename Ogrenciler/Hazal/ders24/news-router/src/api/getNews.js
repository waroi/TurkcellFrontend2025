const api_key = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'general') => {
  const response = await fetch(
    `${BASE_URL}/top-headlines?category=${category}`,
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_key}`,
      },
    });
  const data = await response.json();
  return data.articles;
};