const url =
  "https://api.collectapi.com/news/getNews?country=tr&paging=1&apiKey=0yzrr97R7JWRvN5jAIbkot:0fTuYi7ukS5aN8Z8HyP6zJ";

export const getNewsletter = async (tag) => {
  try {
    const response = await fetch(`${url}&tag=${tag}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetNewsLetter Error: ", error);
    return null;
  }
};

export const getSportNews = async () => {
  try {
    const response = await fetch(`${url}&tag=sport`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetSportNews Error: ", error);
    return null;
  }
};

export const getTechnologyNews = async () => {
  try {
    const response = await fetch(`${url}&tag=technology`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetTechnologyNews Error: ", error);
    return null;
  }
};

export const getGeneralNews = async () => {
  try {
    const response = await fetch(`${url}&tag=general`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetGeneralNews Error: ", error);
    return null;
  }
};
