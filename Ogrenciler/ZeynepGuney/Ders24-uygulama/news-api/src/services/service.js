const fetchData = async (category = "general") => {
  try {
    console.log("xx", category);
    const response = await fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        headers: {
          Authorization: "apikey 1vvEGMJQRgAwxBg6qIzrKR:2d80Huke0mPqRc7gSvF8Pn",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Haber bulunamadı");
    }
    const data = await response.json();
    //   setUser(data);
    console.log(data);
    return data.result;
  } catch (error) {
    //   setError(`Haber API çağrısı başarisiz! ${error}`);
  }
};
export default fetchData;
