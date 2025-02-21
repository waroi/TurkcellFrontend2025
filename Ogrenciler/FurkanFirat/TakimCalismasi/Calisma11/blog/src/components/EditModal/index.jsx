import Modal from 'react-bootstrap/Modal';
import Form from '../EditForm';
function EditModal({ show, handleClose, postItem }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Blog</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form handleClose={handleClose} postItem={postItem} />
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default EditModal;
