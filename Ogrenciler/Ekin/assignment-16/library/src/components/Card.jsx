import { Card, ButtonGroup, Button } from "react-bootstrap";

export default function CardComponent() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="https://picsum.photos/200/300"
        className="object-fit-cover"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ButtonGroup>
          <Button variant="secondary">View</Button>
          <Button variant="secondary">Edit</Button>
          <Button variant="secondary">Delete</Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}
