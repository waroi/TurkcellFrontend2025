import { Container, Row, Col, Card } from "react-bootstrap";

export default function AboutUs() {
  return (
    <section className="about-us py-5">
      <div id="about-us"></div>
      <Container className="py-5">
        <h3 className="text-white text-center text-uppercase mb-5">About Us</h3>
        <Row className="g-4">
          <Col sm={6} lg={3}>
            <Card className="py-4 px-2 h-100 border-0">
              <Card.Img
                variant="top"
                src="/pokeball.webp"
                className="mx-auto mb-2"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="text-center text-danger text-uppercase fw-bold mb-4">
                    Our Mission
                  </h5>
                </Card.Title>
                <Card.Text className="text-white text-center">
                  To bring the joy of Pokemon collecting to trainers worldwide,
                  offering the highest quality Pokemon at competitive prices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={3}>
            <Card className="py-4 px-2 h-100 border-0">
              <Card.Img
                variant="top"
                src="/pokeball.webp"
                className="mx-auto mb-2"
              />
              <Card.Body>
                <Card.Title className="text-center text-danger text-uppercase fw-bold mb-4">
                  <h5 className="text-center text-danger text-uppercase fw-bold mb-4">
                    Quality Guarantee
                  </h5>
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Every Pokemon in our collection is carefully selected and
                  certified by Pokemon experts to ensure authenticity and
                  satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={3}>
            <Card className="py-4 px-2 h-100 border-0">
              <Card.Img
                variant="top"
                src="/pokeball.webp"
                className="mx-auto mb-2"
              />
              <Card.Body>
                <Card.Title className="text-center text-danger text-uppercase fw-bold mb-4">
                  <h5 className="text-center text-danger text-uppercase fw-bold mb-4">
                    Customer Service
                  </h5>
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Our team of dedicated Pokemon trainers is available 24/7 to
                  assist you with any questions or concerns about your Pokemon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={3}>
            <Card className="py-4 px-2 h-100 border-0">
              <Card.Img
                variant="top"
                src="/pokeball.webp"
                className="mx-auto mb-2"
              />
              <Card.Body>
                <Card.Title className="text-center text-danger text-uppercase fw-bold mb-4">
                  <h5 className="text-center text-danger text-uppercase fw-bold mb-4">
                    Global Community
                  </h5>
                </Card.Title>
                <Card.Text className="text-white text-center">
                  Join thousands of Pokemon trainers worldwide who trust Pokemon
                  Shop for their collecting needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
