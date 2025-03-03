import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { addMusic } from '../api/getMusic';

function AddMusicModal({ show, handleClose, refreshMusics }) {
  const [newMusic, setNewMusic] = useState({
    title: "",
    img: "",
    description: "",
    category: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMusic({...newMusic, [name]: value});
  };  
  
  const handleSubmit = async () => {
    try {
      await addMusic(newMusic);
      handleClose();
      refreshMusics();
    } catch (error) {
      console.error('Error adding music:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Music</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              name="title"
              value={newMusic.title}
              onChange={handleChange}
              placeholder="Enter music title" 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control 
              type="text" 
              name="img"
              value={newMusic.img}
              onChange={handleChange}
              placeholder="Enter image URL" 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              name="description"
              value={newMusic.description}
              onChange={handleChange}
              placeholder="Enter description" 
            />
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control 
              type="text" 
              name="category"
              value={newMusic.category}
              onChange={handleChange}
              placeholder="Enter category" 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type="text" 
              name="author"
              value={newMusic.author}
              onChange={handleChange}
              placeholder="Enter category" 
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add Music
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddMusicModal;