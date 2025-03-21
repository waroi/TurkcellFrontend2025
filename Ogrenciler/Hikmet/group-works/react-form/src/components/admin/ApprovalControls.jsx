import React from "react";

const ApprovalControls = ({ onClose, onApprove, onReject }) => {
	return (
		<>
			<button type="button" className="btn btn-light" onClick={onClose}>
				<i className="bi bi-x me-2"></i>
				Kapat
			</button>
			<button type="button" className="btn btn-danger" onClick={onReject}>
				<i className="bi bi-x-circle me-2"></i>
				Reddet
			</button>
			<button type="button" className="btn btn-success" onClick={onApprove}>
				<i className="bi bi-check-circle me-2"></i>
				Onayla
			</button>
		</>
	);
};

export default ApprovalControls;
