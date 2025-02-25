import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FilmCard = ({ movie, onDetailsClick }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.overview.length > 100 ? `${movie.overview.substring(0, 100)}...` : movie.overview}
        </Card.Text>
        <Button variant="primary" onClick={() => onDetailsClick(movie.id)}>Detaylar</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
