import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './App.css';

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [cardData, setCardData] = useState({});
  const [search, setSearchValue] = useState('bursa');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearchButtonClick = () => {
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/data/2.5/weather?q=${search}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Hata Kodu:', response.status);
        return;
      }
      const data = await response.json();
      setCurrentWeatherData(data);
      // setCardData({
      //   cityName: data.city.name,
      //   country: data.city.country,
      //   temperature: Math.round(data.list[0].main.temp),
      //   maxTemp: Math.round(data.list[0].main.temp_max),
      //   minTemp: Math.round(data.list[0].main.temp_min),
      //   windSpeed: data.list[0].wind.speed,
      //   humidity: data.list[0].main.humidity,
      //   description: data.list[0].weather[0].description,
      //   main: data.list[0].weather[0].main,
      //   imgURL: `https://openweathermap.org/img/wn/${data.list[0]?.weather[0].icon}@4x.png`,
      //   pressure: data.list[0].main.pressure,
      //   feelsLike: Math.round(data.list[0].main.feels_like),
      // });
      console.log(data);
    } catch (error) {
      console.error('API çağrısı başarısız:', error);
      setError('API çağrısı başarısız.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <>
      <NavBar
        handleSearchButtonClick={handleSearchButtonClick}
        search={search}
        setSearchValue={setSearchValue}
      />

      <main className='d-flex justify-content-center align-items-center'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Container>
            <Row className='my-4 justify-content-center'>
              <Col xs={12}>
                <WeatherCard currentWeather={currentWeatherData} />
              </Col>
            </Row>
          </Container>
        )}
        {error ? <p>{error}</p> : <></>}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
