import React from "react";
import { Card } from "react-bootstrap";

const FilmCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title className="text-truncate"><a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none card-title fw-bold"
        >
          {movie.title}
        </a></Card.Title>
        <Card.Text className="text-secondary card-desc">
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 70)}...`
            : movie.overview}
        </Card.Text>
        <Card.Text>Çıkış Tarihi: {movie.release_date}</Card.Text>
        <Card.Text className="fw-bold">Puan: {Math.round(movie.vote_average * 10)}% </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
