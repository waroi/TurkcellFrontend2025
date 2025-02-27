import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getFilm } from "../../api/getFilm";
import { useEffect, useState } from "react";
import CardTitle from "./styled";
function PersonCard({ movie }) {
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    if (movie?.id) {
      getFilm(movie.id)
        .then((data) => {
          setMovieInfo(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [movie]);

  return (
    <Card className="h-100" style={{ width: "18rem" }}>
      <Card.Img width={220} height={124} className="img-fluid"
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/` + movie?.poster_path} alt={movie?.original_title} loading="lazy" fetchPriority="network-only"
      />
      <Card.Body>
        <CardTitle>{movie?.original_title}</CardTitle>
        <Card.Text className="text-start">{movie?.overview}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Release Date: {movie?.release_date}</ListGroup.Item>
        <ListGroup.Item>
          Vote Average: {movie?.vote_average} / {movie?.vote_count}
        </ListGroup.Item>
        {movieInfo && movieInfo.crew && (
          <ListGroup.Item>
            Writer:{" "}
            {movieInfo.crew.find((member) => member.job === "Writer")?.name ||
              "N/A"}
          </ListGroup.Item>
        )}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default PersonCard;
