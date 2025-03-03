const fetchArticles = async (category) => {
  try {
    const response = await fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}&language=en`,
      {
        headers: {
          Authorization:
            "apikey  54YmvxheLZj7NZc3xnrQiU:5eFSLul6xqhu4ET5zk3UzO",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Haberler Bulunamadi!!");
    }
    const data = await response.json();

    return data.result;
  } catch (error) {
    console.log(error);
  }
};
export default fetchArticles;
