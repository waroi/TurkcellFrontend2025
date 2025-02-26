import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function MovieForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>
            Film ya da aktör ismi arayın....
          </Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter movie or actor name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>İyi Görünüyor!</Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Button type="submit">Formu gönder</Button>
    </Form>
  );
}

export default MovieForm;
