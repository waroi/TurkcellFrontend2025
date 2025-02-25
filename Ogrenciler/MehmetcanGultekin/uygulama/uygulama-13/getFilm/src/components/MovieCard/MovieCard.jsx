import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { getFilm } from "../../api/getFilm";
import { useEffect, useState } from "react";
// const img_url =
//   "https://image.tmdb.org/t/p/w500/7iMBZzVZtG0oBug4TfqDb9ZxAOa.jpg";
function MovieCard({ movie}) {
  const [movieInfo, setMovieInfo] = useState();

  useEffect(() => {
    if (movie?.id) {
      getFilm(movie.id) // movie.id'yi gönderin
        .then((data) => {
          setMovieInfo(data);
          console.log(data + " movie crew");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [movie]); // movie değiştiğinde tekrar çalışacak

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
        {movieInfo && movieInfo.crew && (
        <ListGroup.Item>
            Writer: {
              movieInfo.crew.find(member => member.job === 'Writer')?.name
              || "N/A" // Eğer writer yoksa N/A göster
            }
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

export default MovieCard;
