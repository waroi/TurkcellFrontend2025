import Card from 'react-bootstrap/Card';

function WeatherCard({ weatherData, error }) {
  const { resolvedAddress: cityName, days } = weatherData;

  const cards = days?.map((day, index) => (
    <Card key={index} className='weather-card p-4 m-3'>
      <Card.Body className='d-flex align-items-center justify-content-evenly flex-wrap gap-3'>
        <div className='d-flex flex-column align-items-start'>
          <h2 className='fw-bold'>{cityName}</h2>
          <p className='fs-5 text-muted'>{day.datetime}</p>
        </div>{' '}
        <div className='d-flex align-items-center gap-3 flex-wrap'>
          <img
            src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/1st%20Set%20-%20Color/${day.icon}.png`}
            alt={day.icon}
            className='weather-icon'
          />
          <div>
            <p className=' display-5 fw-bold' style={{ color: '#ff6723' }}>
              {Math.round(day.temp)}°C
            </p>
            <p className='text-capitalize fst-italic fw-semibold  '>
              {day.conditions}
            </p>
          </div>
        </div>
        <div className='d-flex align-items-center gap-4 flex-wrap '>
          <span>
            <i className='bi bi-thermometer-high fs-3'></i>{' '}
            {Math.round(day.tempmax)}°C
          </span>
          <span>
            <i className='bi bi-thermometer-low fs-3'></i>{' '}
            {Math.round(day.tempmin)}°C
          </span>
          <span>
            <i className='bi bi-thermometer-half fs-3'></i> Feels like:{' '}
            {Math.round(day.feelslike)}°C
          </span>
          <span>
            <i className='bi bi-wind blue-icon fs-3'></i> Wind: {day.windspeed}
            m/s
          </span>
          <span>
            <i className='bi bi-moisture blue-icon fs-3'></i> Humidity:{' '}
            {day.humidity}%
          </span>
          <span>
            <i className='bi bi-speedometer blue-icon fs-3'></i> Pressure:{' '}
            {day.pressure} hPa
          </span>
        </div>
      </Card.Body>
    </Card>
  ));
  return <> {cards}</>;
}

export default WeatherCard;
