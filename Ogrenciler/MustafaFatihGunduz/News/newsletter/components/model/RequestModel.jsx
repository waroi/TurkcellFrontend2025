const url =
  "https://api.collectapi.com/news/getNews?country=tr&apiKey=2nr27F9Gj4J6yHhDmW8KkH:2Jns09a45S1ucA85dC9znu";

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

export const getHealthNews = async () => {
  try {
    const response = await fetch(`${url}&tag=health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetTecHealthogyNews Error: ", error);
    return null;
  }
};

export const getGeneralNews = async () => {
  try {
    const response = await fetch(`${url}&tag=general&paging=1`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetGeneralNews Error: ", error);
    return null;
  }
};

export const getEconomyNews = async () => {
  try {
    const response = await fetch(`${url}&tag=economy`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Request Model GetEconomyNews Error: ", error);
    return null;
  }
};
