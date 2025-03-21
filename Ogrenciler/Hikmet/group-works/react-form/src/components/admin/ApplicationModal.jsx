import ApprovalControls from "./ApprovalControls";

const ApplicationModal = ({ application, onClose, onApprove, onReject }) => {
	if (!application) return null;

	return (
		<div
			className="modal fade show d-block"
			style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content border-0 shadow">
					<div className="modal-header bg-primary text-white">
						<h5 className="modal-title fw-bold">
							<i className="bi bi-file-earmark-text me-2"></i>
							Başvuru Detayları
						</h5>
						<button
							type="button"
							className="btn-close btn-close-white"
							onClick={onClose}></button>
					</div>

					<div className="modal-body p-4">
						{/* İş Bilgileri */}
						<div className="card bg-light mb-4">
							<div className="card-body">
								<h5 className="card-title mb-3 text-primary">
									<i className="bi bi-briefcase me-2"></i>
									İş Bilgileri
								</h5>
								<div className="row g-3">
									<div className="col-md-6">
										<label className="form-label text-muted small">
											Pozisyon
										</label>
										<div className="fw-bold fs-5">
											{application.jobTitle || "Belirtilmemiş"}
										</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">
											Başvuru Tarihi
										</label>
										<div className="fw-medium">
											{application.jobAppliedDate
												? new Date(
														application.jobAppliedDate
												  ).toLocaleDateString("tr-TR", {
														day: "numeric",
														month: "long",
														year: "numeric",
														hour: "2-digit",
														minute: "2-digit",
												  })
												: "Belirtilmemiş"}
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Kişisel Bilgiler */}
						<h5 className="mb-3 text-primary">
							<i className="bi bi-person me-2"></i>
							Kişisel Bilgiler
						</h5>
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label text-muted small">Ad Soyad</label>
								<div className="fw-bold fs-5">
									{application.name} {application.surname}
								</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">Email</label>
								<div className="fw-medium">{application.email}</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">Telefon</label>
								<div className="fw-medium">{application.phoneNumber}</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">Şehir</label>
								<div className="fw-medium">
									{application.city || "Belirtilmemiş"}
								</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">Cinsiyet</label>
								<div className="fw-medium">
									{application.gender || "Belirtilmemiş"}
								</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">
									Doğum Tarihi
								</label>
								<div className="fw-medium">
									{application.birthDate || "Belirtilmemiş"}
								</div>
							</div>
						</div>

						{/* Yasal Bilgiler */}
						<h5 className="mt-4 mb-3 text-primary">
							<i className="bi bi-shield-check me-2"></i>
							Yasal Bilgiler
						</h5>
						<div className="row g-3">
							<div className="col-md-6">
								<label className="form-label text-muted small">
									Gizlilik Politikası
								</label>
								<div>
									<span
										className={`badge ${
											application.securityPolicy ? "bg-success" : "bg-danger"
										}`}>
										{application.securityPolicy
											? "Kabul Edildi"
											: "Kabul Edilmedi"}
									</span>
								</div>
							</div>
							<div className="col-md-6">
								<label className="form-label text-muted small">
									Kullanım Şartları
								</label>
								<div>
									<span
										className={`badge ${
											application.isAccepted ? "bg-success" : "bg-danger"
										}`}>
										{application.isAccepted ? "Kabul Edildi" : "Kabul Edilmedi"}
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className="modal-footer">
						<ApprovalControls
							onClose={onClose}
							onApprove={() => onApprove(application)}
							onReject={() => onReject(application)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ApplicationModal;
