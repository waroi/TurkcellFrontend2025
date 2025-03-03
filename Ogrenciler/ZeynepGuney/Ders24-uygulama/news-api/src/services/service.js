const fetchData = async (category = "general") => {
  try {
    const response = await fetch(
      `https://api.collectapi.com/news/getNews?country=tr&tag=${category}`,
      {
        headers: {
          Authorization: "apikey 58e1Vowpjao0t9n5aWAOfZ:306w3hPFnZgnpF38SsZN51",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Haber bulunamadı");
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log(`Haber API çağrısı başarisiz! ${error}`);
  }
};
const fetchTime = async (city) => {
  try {
    const response = await fetch(
      `https://api.collectapi.com/pray/all?data.city=${city}`,
      {
        headers: {
          Authorization: "apikey 58e1Vowpjao0t9n5aWAOfZ:306w3hPFnZgnpF38SsZN51",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Vakit bulunamadı");
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log(`Ezan API çağrısı başarisiz! ${error}`);
  }
};
export { fetchTime, fetchData };
