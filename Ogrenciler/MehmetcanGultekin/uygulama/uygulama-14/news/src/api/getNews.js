

export const getNews = async () => {
    return await fetch(`https://api.collectapi.com/news/getNews?country=tr&tag=general`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
    
        "authorization": "apikey 2ubv4QcCoL7yP2NksNRiaT:4NoQ3PT4X1cBL3tVHpufIE",
    },
    }).then((response) => response.json());
    
  }
  export const getNewsCategory = async (Category) => {
    return await fetch(`https://api.collectapi.com/news/getNews?country=tr&tag=${Category}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
    
        "authorization": "apikey 2ubv4QcCoL7yP2NksNRiaT:4NoQ3PT4X1cBL3tVHpufIE",
    },
    }).then((response) => response.json());
    
  }


