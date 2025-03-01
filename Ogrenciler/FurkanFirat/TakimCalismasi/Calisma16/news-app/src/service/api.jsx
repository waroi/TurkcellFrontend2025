export const fetchNews = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=6f612dd450f844eb9ab7c1956417339b`
  );
  const data = await response.json();
  console.log(data);
  return data;
};
