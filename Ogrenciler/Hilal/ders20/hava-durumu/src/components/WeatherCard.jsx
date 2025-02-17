import Card from 'react-bootstrap/Card';

function WeatherCard({ cardData }) {
  return (
    <Card style={{ width: '18rem' }} className='d-flex flex-row'>
      <Card.Img
        variant='left'
        src={cardData.imgURL}
        className='object-fit-contain'
      />
      <Card.Body>
        <Card.Title>{cardData.cityName}</Card.Title>
        <Card.Text>{cardData.temperature}</Card.Text>
        <Card.Text>{cardData.minTemp}</Card.Text>
        <Card.Text>{cardData.maxTemp}</Card.Text>
        <Card.Text>{cardData.windSpeed}</Card.Text>
        <Card.Text>{cardData.humidity}</Card.Text>
        <Card.Text>{cardData.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
