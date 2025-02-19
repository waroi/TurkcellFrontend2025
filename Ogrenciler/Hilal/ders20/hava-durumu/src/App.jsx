import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./App.css";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("null");

  const { resolvedAddress: cityName, days } = weatherData;

  const fetchWeatherData = async (
    searchValue = "bursa",
    endDate = "2025-02-26",
    startDate = "2025-02-19"
  ) => {
    setLoading(true);
    setError(null);

    try {
      const url = `${
        import.meta.env.VITE_WEATHER_API_URL
      }/${searchValue}/${startDate}/${endDate}?unitGroup=metric&key=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        setError("Hata Kodu:", response.status);
      }
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      setError(`API çağrısı başarısız: ${error}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = (searchValue, endDate, startDate) => {
    console.log(searchValue, endDate, startDate);
    fetchWeatherData(searchValue, endDate, startDate);
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <Container>
      <NavBar />
      <main className="d-flex justify-content-center align-items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row className="my-4 justify-content-center">
            <Col xs={12}>
              <WeatherForm handleSearchButtonClick={handleSearch} />
              {days &&
                days?.map((day, index) => (
                  <WeatherCard
                    key={index}
                    error={error}
                    day={day}
                    cityName={cityName}
                  />
                ))}
            </Col>
          </Row>
        )}
      </main>
      {error && <p className="d-block fw-bold text-danger">{error}</p>}
    </Container>
  );
}

export default App;
