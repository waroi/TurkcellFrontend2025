import { Card, Button } from "react-bootstrap";

export default function MovieCard({ movie }) {
	const cardDescription = movie.overview.substring(0, 80) + "...";
	return (
		<>
			<Card
				style={{ width: "16rem", height: "100%" }}
				className="d-flex flex-column"
			>
				<Card.Img
					variant="top"
					src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				/>
				<Card.Body className="d-flex flex-column flex-grow-1">
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text className="flex-grow-1">{cardDescription}</Card.Text>
					<Button variant="primary">Daha Fazla</Button>
				</Card.Body>
			</Card>
		</>
	);
}
