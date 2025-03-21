import React from "react";

const AdminHeader = ({ onRefresh }) => {
	return (
		<div className="row mb-4">
			<div className="col-12">
				<div className="card shadow-sm border-0">
					<div className="card-body d-flex justify-content-between align-items-center">
						<h4 className="m-0 fw-bold">İş Başvurusu Yönetim Paneli</h4>
						<button
							className="btn btn-sm btn-outline-primary"
							onClick={onRefresh}>
							<i className="bi bi-arrow-clockwise me-1"></i>Verileri Yenile
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminHeader;
