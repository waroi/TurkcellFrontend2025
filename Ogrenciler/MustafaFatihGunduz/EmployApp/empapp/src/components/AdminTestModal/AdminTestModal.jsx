import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useAdminTest from "../../store/useAdminTest";

const AdminTestModal = ({ show, handleClose, app }) => {
  const { handleSaveTest } = useAdminTest();
  const [totalQuestion, setTotalQuestion] = useState("");
  const [hardQuestion, setHardQuestion] = useState("");
  const [mediumQuestion, setMediumQuestion] = useState("");

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Testi Belirle</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Toplam Soru Sayısını Seçiniz</Form.Label>
            <Form.Select
              value={totalQuestion}
              onChange={(e) => setTotalQuestion(e.target.value)}
            >
              <option value="">Toplam soru sayısı seçiniz</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Zor Soru Sayısını Seçiniz</Form.Label>
            <Form.Select
              value={hardQuestion}
              onChange={(e) => setHardQuestion(e.target.value)}
            >
              <option value="">Zor soru sayısı seçiniz</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Orta Zorluk Soru Sayısını Seçiniz</Form.Label>
            <Form.Select
              value={mediumQuestion}
              onChange={(e) => setMediumQuestion(e.target.value)}
            >
              <option value="">Orta seviye soru sayısı seçiniz</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="primary"
            onClick={async () => {
              if (!totalQuestion || !hardQuestion || !mediumQuestion) {
                alert("Lütfen tüm alanları doldurunuz!");
                return;
              }

              try {
                const success = await handleSaveTest(
                  app,
                  Number(totalQuestion),
                  Number(hardQuestion),
                  Number(mediumQuestion)
                );

                if (success) {
                  handleClose();
                }
              } catch (error) {
                console.error(
                  "Test ayarları kaydedilirken hata oluştu:",
                  error
                );
                alert("Test ayarları kaydedilirken bir hata oluştu.");
              }
            }}
          >
            Kaydet
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AdminTestModal;
