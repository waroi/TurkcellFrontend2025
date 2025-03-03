const BASE_URL = "https://api.collectapi.com/economy";
const TOKEN = "apikey 7kg4zav5byF3E3mH58sP8p:4TQgT1yakXP55reJmt2GLK";

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
