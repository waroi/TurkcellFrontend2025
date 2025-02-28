import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    try {
      (async () =>
        setPokemons(
          await fetch("http://localhost:3000/pokemons").then((response) =>
            response.json()
          )
        ))();
    } catch {}
  }, []);

  return (
    <section className="pokemons py-5 bg-light-subtle">
      <div id="pokemons"></div>
      <Container className="py-5">
        <h3 className="text-center text-uppercase mb-5">Pokemons</h3>
        <Row xs={1} sm={2} lg={3} className="g-5 px-5 px-sm-0">
          {pokemons.map((pokemon, key) => (
            <Col key={key}>
              <Card className="py-4 px-2 h-100 border-0">
                <Card.Img
                  variant="top"
                  src="/pokeball.webp"
                  className="pokeball"
                />
                <Image
                  src={`/${pokemon.image}`}
                  alt={pokemon.name}
                  className="pokemon position-absolute start-50"
                />
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>
                    <h5 className="text-center text-uppercase fw-bold mb-3">
                      {pokemon.name}
                    </h5>
                  </Card.Title>
                  <Card.Text className="text-center">
                    {pokemon.description}
                  </Card.Text>
                  <Button
                    as={NavLink}
                    to={`pokemon/${pokemon.id}`}
                    variant="primary"
                    className="text-uppercase textrounded-pill fw-bold mt-auto px-4"
                  >
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
