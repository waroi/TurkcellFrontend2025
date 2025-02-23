import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../molecules/Card";
import Container from "react-bootstrap/esm/Container";

const Main = ({ blogs, setTrigger }) => {
  return (
    <main className="my-3">
      <Container>
        <Row xs={1} md={2} lg={3} className="g-3">
          {blogs &&
            blogs.map((blog) => {
              return (
                <Col key={blog.id + "col"}>
                  <Card key={blog.id} blog={blog} setTrigger={setTrigger} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
