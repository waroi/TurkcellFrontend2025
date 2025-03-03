export const getNews = async () => {
  return await fetch(
    `https://api.collectapi.com/news/getNews?country=tr&tag=general`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json;",

        authorization: "apikey 5yiLJm74G6HUsVNhPhfCPv:5kK9Z3GhGlaB8AxqqTQidl",
      },
    }
  ).then((response) => response.json());
};
export const getNewsCategory = async (Category) => {
  return await fetch(
    `https://api.collectapi.com/news/getNews?country=tr&tag=${Category}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json;",

        authorization: "apikey 5yiLJm74G6HUsVNhPhfCPv:5kK9Z3GhGlaB8AxqqTQidl",
      },
    }
  ).then((response) => response.json());
};
