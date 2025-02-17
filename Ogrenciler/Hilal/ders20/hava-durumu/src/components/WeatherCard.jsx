import Card from "react-bootstrap/Card";

function WeatherCard({ cardData }) {
  return (
    <Card style={{ width: "18rem" }} className="d-flex flex-row">
      <Card.Img
        variant="left"
        src={cardData.imgURL}
        className="object-fit-contain"
      />
      <Card.Body>
        <Card.Title className="fs-1">{cardData.cityName}</Card.Title>
        <Card.Text className="fs-5">{cardData.temperature} &#176;C</Card.Text>
        <Card.Text>
          {cardData.minTemp} &#176;C - {cardData.maxTemp} &#176;C
        </Card.Text>
        <Card.Text>
          <i class="bi bi-wind me-2"></i>
          {cardData.windSpeed}
        </Card.Text>
        <Card.Text>
          <i class="bi bi-moisture me-2"></i> {cardData.humidity}
        </Card.Text>
        <Card.Text>{cardData.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;
