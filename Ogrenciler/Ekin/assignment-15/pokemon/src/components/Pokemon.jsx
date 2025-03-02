import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

export default function Pokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    try {
      (async () =>
        setPokemon(
          await fetch(`http://localhost:3000/pokemon-details/${name}`).then(
            (response) => response.json()
          )
        ))();
    } catch {}
  }, []);

  if (pokemon)
    return (
      <section id="pokemon">
        <Container className="h-100 px-4">
          <Row className="h-100 g-5 mb-5">
            <Col
              lg={6}
              className="h-100 d-flex align-items-center justify-content-center"
            >
              <Image src={`/${pokemon.image}`} fluid />
            </Col>
            <Col
              lg={6}
              className="h-100 d-flex flex-column justify-content-center align-items-lg-start"
            >
              <h1 className="fw-lighter mb-4">{pokemon.name}</h1>
              <h2 className="mb-4 text-secondary">€{pokemon.price}</h2>
              <div className="mb-5 bg-primary p-4 rounded">
                <h2 className="mb-4">Stats</h2>
                <h3>
                  <b className="text-uppercase">Type: </b>
                  {pokemon.type}
                </h3>
                <h3>
                  <b className="text-uppercase">Height: </b>
                  {pokemon.height.toFixed(1)} m
                </h3>
                <h3>
                  <b className="text-uppercase">Weight: </b>
                  {pokemon.weight.toFixed(1)} kg
                </h3>
                <h3>
                  <b className="text-uppercase">Abilities: </b>
                  {pokemon.abilities
                    .reduce(
                      (abilities, ability) => `${abilities}, ${ability}`,
                      ""
                    )
                    .substring(2)}
                </h3>
              </div>
              <p className="mb-4">{pokemon.description}</p>
              <Button
                variant="danger"
                className="text-uppercase rounded-pill fw-bold px-4"
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
