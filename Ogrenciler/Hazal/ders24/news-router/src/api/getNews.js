const api_key = import.meta.env.VITE_API_KEY;

async function getAllNews(category = "general") {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Haber bulunamadi");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`getAllNews API çağrısı başarisiz! ${error}`);
  }
}

export { getAllNews };