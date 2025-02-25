import React from "react";
import { Card, Button } from "react-bootstrap";

const FilmCard = ({ movie, onDetailsClick }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="card-img-top"
      />
      <Card.Body>
        <Card.Title><a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-dark"
        >
          {movie.title}
        </a></Card.Title>
        <Card.Text>
          {movie.overview.length > 100
            ? `${movie.overview.substring(0, 100)}...`
            : movie.overview}
        </Card.Text>
        <Card.Text> {movie.release_date}</Card.Text>
        <Card.Text> {Math.round(movie.vote_average * 10)}% </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
