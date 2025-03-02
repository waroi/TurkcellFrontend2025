const COUNTRY_API = "https://restcountries.com/v3.1/all";
const CITIES_API = "https://countriesnow.space/api/v0.1/countries";

class CountryService {
  static async getCountries() {
    const response = await fetch(COUNTRY_API);
    const data = await response.json();
    return data.map((country) => ({
      code: country.cca2.toLowerCase(),
      name: country.name.common,
    }));
  }

  static async getCities(countryName) {
    const response = await fetch(CITIES_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ country: countryName }),
    });
    const data = await response.json();
    return data?.data || [];
  }
}

export default CountryService;
