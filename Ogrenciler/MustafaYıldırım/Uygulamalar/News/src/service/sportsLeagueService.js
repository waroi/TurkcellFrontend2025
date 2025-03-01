const BASE_URL = "https://api.collectapi.com/sport/leaguesList";
const SPORT_BASE_URL = "https://api.collectapi.com/sport";
const TOKEN = "apikey 1vUTuR54ZLk7HqjRwh5zjr:3ueBI1ZjSyPfKbM3epJfyF";

class Leagues {
  static async getLeaguageList() {
    return fetch(BASE_URL, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: TOKEN,
      },
    }).then((response) => response.json());
  }

  static async getLeaguageResult({ league }) {
    const url = `${SPORT_BASE_URL}/results?data.league=${league}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: TOKEN,
      },
    }).then((response) => response.json());
  }

  static async getLeaguageFikstur({ league }) {
    const url = `${SPORT_BASE_URL}/league?data.league=${league}`;
    return fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: TOKEN,
      },
    }).then((response) => response.json());
  }
}

export default Leagues;
