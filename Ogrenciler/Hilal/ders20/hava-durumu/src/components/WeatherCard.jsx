import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WeatherCard({ cardData }) {
  return (
    <Card className={'weather-card p-4'}>
      <Card.Body>
        <Row>
          <Col xs={12} md={6} className='weather-main-info'>
            <h2 className='fw-bold'>
              {cardData.cityName}, {cardData.country}
            </h2>
            <div className='temperature'>
              <img
                src={cardData.imgURL}
                alt={cardData.description}
                className='weather-icon'
              />
              <div>
                <span
                  className='current-temp display-4 fw-bold'
                  style={{ color: '#ff5722' }}
                >
                  {cardData.temperature}°C
                </span>
                <p className='text-capitalize fst-italic mt-2 '>
                  {cardData.description}
                </p>
              </div>
            </div>
            <div className='min-max d-flex flex-column'>
              <span>
                <i className='bi bi-thermometer-high'></i> {cardData.maxTemp}°C
              </span>
              <span>
                <i className='bi bi-thermometer-low'></i> {cardData.minTemp}°C
              </span>
              <span>
                <i className='bi bi-thermometer-half'></i> Feels like:{' '}
                {cardData.feelsLike}°C
              </span>
            </div>
          </Col>
          <Col xs={12} md={6} className='weather-details'>
            <div className='wind'>
              <i className='bi bi-wind'></i>
              <div>
                <h4>Wind</h4>
                <p>{cardData.windSpeed} m/s</p>
              </div>
            </div>
            <div className='humidity'>
              <i className='bi bi-moisture'></i>
              <div>
                <h4>Humidity</h4>
                <p>{cardData.humidity}%</p>
              </div>
            </div>
            <div className='pressure'>
              <i className='bi bi-speedometer'></i>
              <div>
                <h4>Pressure</h4>
                <p>{cardData.pressure} hPa</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
