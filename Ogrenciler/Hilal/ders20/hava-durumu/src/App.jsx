import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import WeatherCard from './components/WeatherCard';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './App.css';
import WeatherForm from './components/WeatherForm';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [searchValue, setSearchValue] = useState('bursa');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('null');
  const [startDate, setStartDate] = useState('2025-02-19');
  const [endDate, setEndDate] = useState('2025-02-26');

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/${searchValue}/${startDate}/${endDate}?unitGroup=metric&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;

      const response = await fetch(url, {});

      if (!response.ok) {
        console.error('Hata Kodu:', response.status);
      }

      const data = await response.json();
      setWeatherData(data);

      console.log(data);
    } catch (error) {
      setError(`API çağrısı başarısız: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);
  return (
    <Container>
      <NavBar />

      <main className='d-flex justify-content-center align-items-center'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row className='my-4 justify-content-center'>
            <Col xs={12}>
              <WeatherForm
                handleSearchButtonClick={fetchWeatherData}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
              />
              <WeatherCard weatherData={weatherData} error={error} />
            </Col>
          </Row>
        )}
      </main>
      {error && <p className='d-block fw-bold text-danger'>{error}</p>}
    </Container>
  );
}

export default App;
