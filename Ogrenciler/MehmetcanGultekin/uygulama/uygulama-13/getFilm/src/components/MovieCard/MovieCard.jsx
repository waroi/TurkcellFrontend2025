import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getFilm } from "../../api/getFilm";
// const img_url =
//   "https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg";
function MovieCard({ movie }) {
  const movie_info = getFilm();
  console.log(movie_info);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/` + movie?.poster_path}
      />
      <Card.Body>
        <Card.Title>{movie?.original_title}</Card.Title>
        <Card.Text>{movie?.overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Date: {movie?.release_date}</ListGroup.Item>
        <ListGroup.Item>
          Vote Average: {movie?.vote_average} / {movie?.vote_count}
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
