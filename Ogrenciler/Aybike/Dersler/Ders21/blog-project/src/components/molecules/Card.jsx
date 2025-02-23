import Card from "react-bootstrap/Card";
import DetailModal from "./Modal";
import { DeleteButton } from "../atoms/button";
function BlogCard({ blog, setTrigger }) {
  return (
    <Card>
      <Card.Img variant="top" src={blog.image} alt={blog.title}></Card.Img>
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.content.substring(0, 200) + "..."}</Card.Text>
        <Card.Text>
          <small className="text-body-secondary">Yazar {blog.creator}</small>
          <small className="text-body-secondary">
            {" "}
            / Oluşturulma Tarihi {blog.date}
          </small>
        </Card.Text>
        <Card.Text>
          <small className="text-body-secondary">
            Kategori: {blog.category}
          </small>
        </Card.Text>
        <DetailModal blog={blog} setTrigger={setTrigger}></DetailModal>
        <DeleteButton blogId={blog.id} setTrigger={setTrigger}></DeleteButton>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
