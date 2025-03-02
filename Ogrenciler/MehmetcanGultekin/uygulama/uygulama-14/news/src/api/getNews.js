
// const Api_Key = "2ubv4QcCoL7yP2NksNRiaT:4NoQ3PT4X1cBL3tVHpufIE"


const getNews = async () => {
    return await fetch(`https://api.collectapi.com/news/getNews?country=tr&tag=general`, {
      method: "GET",
      headers: {
        "Content-type": "application/json;",
    
        "authorization": "apikey 2ubv4QcCoL7yP2NksNRiaT:4NoQ3PT4X1cBL3tVHpufIE",
    },
    }).then((response) => response.json());
    
  }
// const getNews = async () => {
//     const response = await fetch('https://api.collectapi.com/news/getNews?country=tr&tag=general', {
//         headers: {
//             "Content-type": "application/json;",
        
//             "authorization": "apikey 2ubv4QcCoL7yP2NksNRiaT:4NoQ3PT4X1cBL3tVHpufIE",
//         },

//     });
//     const data = await response.json();
//     console.log(data);
//     return data;
// }
export default getNews;