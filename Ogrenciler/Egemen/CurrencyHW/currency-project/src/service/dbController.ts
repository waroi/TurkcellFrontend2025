
export const fetchData = async (currency = "TRY") => {
    try {
      const response = await fetch(
        `https://api.collectapi.com/economy/currencyToAll?int=10&base=${currency}`,
        {
          headers: {
            Authorization: "apikey 58e1Vowpjao0t9n5aWAOfZ:306w3hPFnZgnpF38SsZN51",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Para Değerleri Bulunamadı");
      }
      const data = await response.json();
      console.log(data);
      return data.result;
    } catch (error) {
      console.log(`Para Birimi API çağrısı başarisiz`)

    }}