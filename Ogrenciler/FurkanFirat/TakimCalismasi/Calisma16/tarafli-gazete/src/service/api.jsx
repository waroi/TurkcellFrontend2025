
const BASE_URL = 'https://newsapi.org/v2/top-headlines';


export const fetchNews = async (category, query = '') => {
  const response = await fetch(
    `${BASE_URL}?country=us&category=${category}&q=${query}`,
    {
      method: 'GET',
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data.articles || [];
};
