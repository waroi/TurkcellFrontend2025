import Card from 'react-bootstrap/Card';

function WeatherCard({ currentWeather }) {
  const {
    name: cityName,
    sys: { country },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed: windSpeed },
  } = currentWeather;

  return (
    <Card className='weather-card p-4'>
      <Card.Body className='d-flex align-items-center justify-content-evenly flex-wrap gap-3'>
        <h2 className='fw-bold'>
          {cityName}, {country}
        </h2>
        <div className='d-flex align-items-center gap-3 flex-wrap'>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className='weather-icon'
          />
          <div>
            <p className=' display-5 fw-bold' style={{ color: '#ff6723' }}>
              {Math.round(temp)}°C
            </p>
            <p className='text-capitalize fst-italic fw-semibold  '>
              {weather[0].description}
            </p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-4 flex-wrap '>
          <span>
            <i className='bi bi-thermometer-high fs-3'></i>{' '}
            {Math.round(temp_max)}°C
          </span>
          <span>
            <i className='bi bi-thermometer-low fs-3'></i>{' '}
            {Math.round(temp_min)}°C
          </span>
          <span>
            <i className='bi bi-thermometer-half fs-3'></i> Feels like:{' '}
            {Math.round(feels_like)}°C
          </span>
          <span>
            <i className='bi bi-wind blue-icon fs-3'></i> Wind: {windSpeed}m/s
          </span>
          <span>
            <i className='bi bi-moisture blue-icon fs-3'></i> Humidity:{' '}
            {humidity}%
          </span>
          <span>
            <i className='bi bi-speedometer blue-icon fs-3'></i> Pressure:{' '}
            {pressure} hPa
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
