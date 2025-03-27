import { Modal, Button, Form } from 'react-bootstrap';

const QuestionSettingsModal = ({
    showModal,
    onHide,
    selectedRate,
    handleRateChange,
    questionSettings,
    handleQuestionSettingsChange,
    handleModalSubmit
}) => {
    return (
        <Modal show={showModal} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Değerlendirme Ayarları</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Değerlendirme</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedRate}
                            onChange={handleRateChange}
                        >
                            {[0, 1, 2, 3, 4, 5].map((rate) => (
                                <option key={rate} value={rate}>
                                    {rate} ⭐
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    {parseInt(selectedRate) >= 4 ? (
                        <>
                            <Form.Group className="mb-3">
                                <Form.Label>Toplam Soru Sayısı</Form.Label>
                                <Form.Control
                                    type="number" min={0}
                                    value={questionSettings.totalQuestions}
                                    onChange={(event) => handleQuestionSettingsChange('totalQuestions', event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Kolay Soru Sayısı</Form.Label>
                                <Form.Control
                                    type="number" min={0}
                                    value={questionSettings.difficulty.easy}
                                    onChange={(event) => handleQuestionSettingsChange('easy', event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Orta Zorluk Soru Sayısı</Form.Label>
                                <Form.Control
                                    type="number" min={0}
                                    value={questionSettings.difficulty.medium}
                                    onChange={(event) => handleQuestionSettingsChange('medium', event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Zor Soru Sayısı</Form.Label>
                                <Form.Control
                                    type="number" min={0}
                                    value={questionSettings.difficulty.hard}
                                    onChange={(event) => handleQuestionSettingsChange('hard', event.target.value)}
                                />
                            </Form.Group>
                        </>
                    ) : (
                        <div className="alert alert-danger" role="alert">
                            4 ve üstü değerlendirme yapılmadığı için teste giremez!
                        </div>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className='bg-danger border-danger' onClick={onHide}>
                    İptal
                </Button>
                <Button
                    variant="primary"
                    onClick={handleModalSubmit}
                >
                    {parseInt(selectedRate) >= 4 ? "Testi Gönder" : "Güncelle"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default QuestionSettingsModal