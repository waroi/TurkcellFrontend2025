import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
function BlogCard({ blog }) {
  return (
    <Card>
      <Card.Img variant="top" src={blog.image} alt={blog.title}></Card.Img>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 190) + "..."}</Card.Text>
        <Card.Text>
          <small className="text-body-secondary">
            Created by {blog.creator} on {blog.date}
          </small>
        </Card.Text>
        <Card.Text>
          <small className="text-body-secondary">
            Category: {blog.category}
          </small>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
