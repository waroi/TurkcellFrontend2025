import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

function EditForm({ handleClose, postItem }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    topic: '',
    date: '',
  });

  useEffect(() => {
    if (postItem) {
      setFormData({
        title: postItem.title || '',
        content: postItem.body || '',
        topic: postItem.topic || '',
      });
    }
  }, [postItem]);

  const onSubmit = async () => {
    const updatedPost = {
      ...postItem,
      title: formData.title,
      body: formData.content,
      topic: formData.topic,
    };

    const response = await fetch(`http://localhost:3000/posts/${postItem.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });

    if (response.ok) {
      console.log('Post successfully updated');
      handleClose();
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className='mb-3'>
        <Col md='12'>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type='text'
              name='title'
              value={formData.title}
              onChange={(e) =>
                setFormData((prevData) => {
                  console.log(e);
                  return {
                    ...prevData,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              placeholder='Enter blog title'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col md='12'>
          <Form.Group controlId='topic'>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type='text'
              name='topic'
              value={formData.topic}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }))
              }
              placeholder='Enter topic'
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col md='12'>
          <Form.Group controlId='content'>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as='textarea'
              name='content'
              value={formData.content}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  [e.target.name]: e.target.value,
                }))
              }
              placeholder='Enter blog content'
              rows='4'
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <div className='d-flex gap-3 justify-content-end'>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleClose} type='submit'>
          Save Changes
        </Button>
      </div>
    </Form>
  );
}

export default EditForm;
