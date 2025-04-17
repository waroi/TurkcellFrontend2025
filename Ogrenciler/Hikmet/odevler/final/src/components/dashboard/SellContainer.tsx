import { Button, FloatingLabel, Form, InputGroup } from "react-bootstrap";

export default function BuyContainer({ t }: { t: (key: string) => string }) {
	return (
		<div>
			<Form.Group className="mb-3">
				<FloatingLabel label={t("pay")} controlId="amount">
					<Form.Control type="number" placeholder="0.00" />
					<InputGroup.Text className="top-0 bottom-0 position-absolute bg-transparent border-0 end-0">
						BTC
					</InputGroup.Text>
				</FloatingLabel>
			</Form.Group>

			<Form.Group className="mb-3">
				<FloatingLabel label={t("receive")} controlId="price">
					<Form.Control type="number" placeholder="0.00" />
					{/* //! InputGroup yerine dropdown yapılacak */}
					<InputGroup.Text className="top-0 bottom-0 position-absolute bg-transparent border-0 end-0">
						USD
					</InputGroup.Text>
				</FloatingLabel>
			</Form.Group>

			<div className="d-grid">
				<Button variant="danger" className="py-2 rounded-pill">
					{t("sell")}
				</Button>
			</div>
		</div>
	);
}
