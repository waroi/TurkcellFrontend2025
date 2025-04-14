
export const fetchData = async (currency = "TRY") => {
    try {
      const response = await fetch(
        `https://api.collectapi.com/economy/currencyToAll?int=10&base=${currency}`,
        {
          headers: {
            Authorization: "apikey 1vUTuR54ZLk7HqjRwh5zjr:3ueBI1ZjSyPfKbM3epJfyF",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Para Değerleri Bulunamadı");
      }
      const data = await response.json();
      return data.result;
    } catch (error) {
      console.log(`Para Birimi API çağrısı başarisiz`)
    }}