import { Card, Modal, Image, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import styles from "../styles/MovieCard.module.scss";

export default function MovieCard({ movie }) {
  const [show, setShow] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const cardDescription = movie.overview.substring(0, 80) + "...";

  const handleShow = () => {
    setSelectedMovie(movie);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <>
      <Card className={`${styles.card} h-100`} onClick={handleShow}>
        <Card.Img
          variant="top"
          alt={movie.title}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className={styles.cardImage}
          loading="lazy"
          width={500}
          height={500}
        />
        <Card.Body className="d-flex flex-column flex-grow-1">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="flex-grow-1">{cardDescription}</Card.Text>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={styles.modal}>
          <Modal.Title>{selectedMovie && selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal}>
          {selectedMovie && (
            <>
              <Row>
                <Col xs={12} md={6} className={styles.modalImageContainer}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className={styles.modalImage}
                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </Col>
                <Col xs={12} md={6} className={styles.modalDetails}>
                  <p>{movie.overview}</p>
                  <p>Çıkış Tarihi: {movie.release_date}</p>
                  <div>
                    <span>⭐</span>
                    {movie.vote_average} / 10
                  </div>
                </Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer className={styles.modal}>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
