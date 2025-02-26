import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getFilm } from "../../api/getFilm";
import { useEffect, useState } from "react";
import CardTitle from "./styled";
// const img_url =
//   "https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg";
function MovieCard({ movie }) {
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    if (movie?.id) {
      getFilm(movie.id)
        .then((data) => {
          setMovieInfo(data);
          // console.log(data + " movie crew");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [movie]);

  return (
    <Card className="h-100" style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/` + movie?.backdrop_path}
      />
      <Card.Body>
        <CardTitle>{movie?.original_title}</CardTitle>
        <Card.Text className="text-start">
          {movie?.overview.substring(0, 140) + "..."}
        </Card.Text>
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
        <Card.Link
          href={`https://image.tmdb.org/t/p/w500/` + movie?.poster_path}
          target="_blank"
        >
          See Movie Poster
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
