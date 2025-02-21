import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

function EditForm({ handleClose, postItem, handleEdit }) {
  const [formData, setFormData] = useState({
    title: postItem?.title || "",
    content: postItem?.body || "",
    topic: postItem?.topic || "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const updatedPost = {
      ...postItem,
      title: formData?.title,
      body: formData?.content,
      topic: formData?.topic,
    };
    const isEqual = Object.entries(formData).every(
      ([key, value]) => formData[key] === updatedPost[key]
    );
    console.log(isEqual, formData, updatedPost);
    handleEdit(updatedPost);
  };

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    }); //TODO hocaya soralım;e.target.name neden böyle yazılıyor?
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="topic">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter topic"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter blog content"
              rows="4"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex gap-3 justify-content-end">
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose} type="submit">
          Save Changes
        </Button>
      </div>
    </Form>
  );
}

export default EditForm;
