async function GetWeather(city) {
    const apiKey = "c3b13fd51e85ce381f9fadd96babb612";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const weather = {
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
        };
        console.log(weather);
        return weather;
    } catch (error) {
        console.error("Hava durumu verisi alınırken hata oluştu:", error);
    }
}

export default GetWeather;