const BASE_URL = "https://api.collectapi.com/economy";
const TOKEN = "apikey 1vUTuR54ZLk7HqjRwh5zjr:3ueBI1ZjSyPfKbM3epJfyF";

class KurClient {
  static async getDovizKur() {
    const url = `${BASE_URL}/allCurrency`;
    return fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: TOKEN,
      },
    }).then((response) => response.json());
  }
  static async getGoldKur() {
    const url = `${BASE_URL}/goldPrice`;
    return fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: TOKEN,
      },
    }).then((response) => response.json());
  }
}

export default KurClient;
