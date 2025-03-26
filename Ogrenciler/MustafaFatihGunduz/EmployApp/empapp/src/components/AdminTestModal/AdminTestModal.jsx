import {useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import useAdminTest from '../../store/useAdminTest';

const AdminTestModal = ({show,handleClose,app}) => {
    const {handleModal} = useAdminTest() 
    const [totalQuestion,setTotalQuestion] = useState();
    const [hardQuestion,setHardQuestion] = useState();
    const [mediumQuestion,setMediumQuestion] = useState();
  return (
    <Modal  show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Testi Belirle</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="userForm.ControlInput1">
          <Form.Label>Toplam Soru Sayısını Seçiniz</Form.Label>
          <Form.Select onChange={(e) => setTotalQuestion(e.target.value)}>
                <option>Toplam soru sayısı :</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
         </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="userForm.ControlTextarea1">
          <Form.Label>Zor Soru Sayısını Seçiniz</Form.Label>
          <Form.Select onChange={(e) => setHardQuestion(e.target.value)}>
                <option>Toplam soru sayısı :</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
         </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="userForm.ControlTextarea1">
          <Form.Label>Orta Zorluk Soru Sayısını Seçiniz</Form.Label>
          <Form.Select onChange={(e) => setMediumQuestion(e.target.value)}>
                <option>Toplam soru sayısı :</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
         </Form.Select>
        </Form.Group>
        <Button variant="link" onClick={ async () =>await  handleModal(app,Number(totalQuestion),Number(mediumQuestion),Number(hardQuestion))}>
          Kaydet
        </Button>
        
      <Button variant="secondary" onClick={handleClose}>
        Kapat
      </Button>
      </Form>
    </Modal.Body>
  </Modal>
  )
}

export default AdminTestModal