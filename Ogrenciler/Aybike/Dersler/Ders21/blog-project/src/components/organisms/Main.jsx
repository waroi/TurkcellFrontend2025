import { useEffect, useState } from "react";
import { BlogService } from "../../services/BlogService";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../molecules/Card";
import Container from "react-bootstrap/esm/Container";

const Main = ({ category }) => {
  console.log(category, "main");
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    BlogService.getBlogs(category)
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);
  return (
    <main>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-3">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Col>
                  <Card key={blog.id} blog={blog} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
