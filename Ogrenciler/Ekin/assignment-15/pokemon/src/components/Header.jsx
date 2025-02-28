import { Container, Image, Row, Col, Button } from "react-bootstrap";

export default function Header() {
  return (
    <header className="position-relative overflow-hidden">
      <iframe
        className="position-absolute w-100 h-100 top-50 start-50"
        src="https://www.youtube.com/embed/sR1hzqn8k5w?autoplay=1&mute=1&controls=0&loop=1&playlist=sR1hzqn8k5w"
        title="Pokémon Journeys Opening Sing-a-Long"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="position-absolute top-0 start-0 w-100 h-100 layer">
        <Container className="h-100 d-flex align-items-center pt-5">
          <Row>
            <Col lg={8} className="p-0 pe-lg-5">
              <Image src="/logo.webp" className="d-block mb-3" fluid />
              <h1 className="text-white text-center mb-5">
                SH
                <Image src="/pokeball.webp" />P
              </h1>
              <h2 className="text-white text-center mb-3">
                Buy Any Pokémon, Get One FREE!
                <br />
                Don't wait - This epic deal ends March 29th!
              </h2>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="text-uppercase rounded-pill fw-bold px-4"
                >
                  Show Now
                </Button>
              </div>
            </Col>
            <Col
              lg={4}
              className="d-none d-lg-flex align-items-center p-0 ps-lg-5"
            >
              <Image src="/pokedex.webp" fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}
