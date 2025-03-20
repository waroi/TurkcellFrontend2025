import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../../firebase/config";

export default function Admin() {
	const [reviewList, setReviewList] = useState([]);
	const [positiveList, setPositiveList] = useState([]);
	const [negativeList, setNegativeList] = useState([]);
	const [selectedReview, setSelectedReview] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	// Admin kontrolü
	useEffect(() => {
		const checkAdmin = () => {
			const unsubscribe = auth.onAuthStateChanged((user) => {
				if (!user || user.email !== "admin@admin.com") {
					navigate("/");
				} else {
					fetchData();
				}
			});

			return unsubscribe;
		};

		const unsubscribe = checkAdmin();
		return () => unsubscribe();
	}, [navigate]);

	// Verileri getir
	const fetchData = async () => {
		try {
			setLoading(true);

			// İncelenecek başvurular
			const reviewSnapshot = await getDocs(collection(db, "incelenecek"));
			setReviewList(
				reviewSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);

			// Olumlu başvurular
			const positiveSnapshot = await getDocs(collection(db, "olumlu"));
			setPositiveList(
				positiveSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);

			// Olumsuz başvurular
			const negativeSnapshot = await getDocs(collection(db, "olumsuz"));
			setNegativeList(
				negativeSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}))
			);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	// Başvuruyu onayla
	const handleApprove = async (item) => {
		try {
			// Clean the item by creating a new object without the id
			const cleanItem = { ...item };
			delete cleanItem.id;

			// Olumlu koleksiyonuna ekle
			await addDoc(collection(db, "olumlu"), cleanItem);

			// İncelenecek koleksiyonundan sil
			await deleteDoc(doc(db, "incelenecek", item.id));

			// State'i güncelle
			setPositiveList([...positiveList, item]);
			setReviewList(reviewList.filter((review) => review.id !== item.id));

			// Modalı kapat
			setSelectedReview(null);
		} catch (error) {
			console.error("Error approving application:", error);
		}
	};

	// Başvuruyu reddet
	const handleReject = async (item) => {
		try {
			// Clean the item by creating a new object without the id
			const cleanItem = { ...item };
			delete cleanItem.id;

			// Olumsuz koleksiyonuna ekle
			await addDoc(collection(db, "olumsuz"), cleanItem);

			// İncelenecek koleksiyonundan sil
			await deleteDoc(doc(db, "incelenecek", item.id));

			// State'i güncelle
			setNegativeList([...negativeList, item]);
			setReviewList(reviewList.filter((review) => review.id !== item.id));

			// Modalı kapat
			setSelectedReview(null);
		} catch (error) {
			console.error("Error rejecting application:", error);
		}
	};

	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="container-fluid py-4">
			<div className="row mb-4">
				<div className="col-12">
					<div className="card shadow-sm border-0">
						<div className="card-body d-flex justify-content-between align-items-center">
							<h4 className="m-0 fw-bold">İş Başvurusu Yönetim Paneli</h4>
							<button
								className="btn btn-sm btn-outline-primary"
								onClick={fetchData}>
								<i className="bi bi-arrow-clockwise me-1"></i>Verileri Yenile
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="row g-4">
				{/* İncelenecek Başvurular */}
				<div className="col-lg-4">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-header bg-white p-3 border-0">
							<h5 className="card-title mb-0">
								<i className="bi bi-hourglass me-2 text-warning"></i>
								İncelenecek Başvurular
								<span className="badge bg-warning text-dark ms-2">
									{reviewList.length}
								</span>
							</h5>
						</div>
						<div className="card-body p-0">
							{reviewList.length === 0 ? (
								<div className="p-4 text-center text-muted">
									<i className="bi bi-inbox-fill fs-1 d-block mb-3 text-light"></i>
									<p>İncelenecek başvuru bulunmamaktadır.</p>
								</div>
							) : (
								<div className="table-responsive">
									<table className="table table-hover align-middle mb-0">
										<thead className="table-light">
											<tr>
												<th>Başvuran</th>
												<th>İletişim</th>
												<th>İşlemler</th>
											</tr>
										</thead>
										<tbody>
											{reviewList.map((item) => (
												<tr key={item.id}>
													<td>
														<div className="d-flex align-items-center">
															<div className="avatar bg-light rounded-circle p-2 me-2">
																<i className="bi bi-person text-primary"></i>
															</div>
															<div>
																<div className="fw-semibold">
																	{item.name} {item.surname}
																</div>
																<small className="text-muted">
																	{item.gender || "Belirtilmemiş"}
																</small>
															</div>
														</div>
													</td>
													<td>
														<div
															className="small text-truncate"
															style={{ maxWidth: "150px" }}>
															<div>{item.email}</div>
															<div className="text-muted">
																{item.phoneNumber}
															</div>
														</div>
													</td>
													<td>
														<div className="btn-group btn-group-sm">
															<button
																className="btn btn-outline-primary"
																onClick={() => setSelectedReview(item)}>
																<i className="bi bi-eye me-1"></i>İncele
															</button>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Onaylanan Başvurular */}
				<div className="col-lg-4">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-header bg-white p-3 border-0">
							<h5 className="card-title mb-0">
								<i className="bi bi-check-circle me-2 text-success"></i>
								Onaylanan Başvurular
								<span className="badge bg-success ms-2">
									{positiveList.length}
								</span>
							</h5>
						</div>
						<div className="card-body p-0">
							{positiveList.length === 0 ? (
								<div className="p-4 text-center text-muted">
									<i className="bi bi-check-circle fs-1 d-block mb-3 text-light"></i>
									<p>Onaylanan başvuru bulunmamaktadır.</p>
								</div>
							) : (
								<div className="table-responsive">
									<table className="table table-hover align-middle mb-0">
										<thead className="table-light">
											<tr>
												<th>Başvuran</th>
												<th>İletişim</th>
											</tr>
										</thead>
										<tbody>
											{positiveList.map((item) => (
												<tr key={item.id}>
													<td>
														<div className="d-flex align-items-center">
															<div className="avatar bg-success bg-opacity-10 rounded-circle p-2 me-2">
																<i className="bi bi-person text-success"></i>
															</div>
															<div>
																<div className="fw-semibold">
																	{item.name} {item.surname}
																</div>
																<small className="text-muted">
																	{item.gender || "Belirtilmemiş"}
																</small>
															</div>
														</div>
													</td>
													<td>
														<div className="small">
															<div>{item.email}</div>
															<div className="text-muted">
																{item.phoneNumber}
															</div>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Reddedilen Başvurular */}
				<div className="col-lg-4">
					<div className="card shadow-sm border-0 h-100">
						<div className="card-header bg-white p-3 border-0">
							<h5 className="card-title mb-0">
								<i className="bi bi-x-circle me-2 text-danger"></i>
								Reddedilen Başvurular
								<span className="badge bg-danger ms-2">
									{negativeList.length}
								</span>
							</h5>
						</div>
						<div className="card-body p-0">
							{negativeList.length === 0 ? (
								<div className="p-4 text-center text-muted">
									<i className="bi bi-x-circle fs-1 d-block mb-3 text-light"></i>
									<p>Reddedilen başvuru bulunmamaktadır.</p>
								</div>
							) : (
								<div className="table-responsive">
									<table className="table table-hover align-middle mb-0">
										<thead className="table-light">
											<tr>
												<th>Başvuran</th>
												<th>İletişim</th>
											</tr>
										</thead>
										<tbody>
											{negativeList.map((item) => (
												<tr key={item.id}>
													<td>
														<div className="d-flex align-items-center">
															<div className="avatar bg-danger bg-opacity-10 rounded-circle p-2 me-2">
																<i className="bi bi-person text-danger"></i>
															</div>
															<div>
																<div className="fw-semibold">
																	{item.name} {item.surname}
																</div>
																<small className="text-muted">
																	{item.gender || "Belirtilmemiş"}
																</small>
															</div>
														</div>
													</td>
													<td>
														<div className="small">
															<div>{item.email}</div>
															<div className="text-muted">
																{item.phoneNumber}
															</div>
														</div>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Başvuru Detay Modalı */}
			{selectedReview && (
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
									onClick={() => setSelectedReview(null)}></button>
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
													{selectedReview.jobTitle || "Belirtilmemiş"}
												</div>
											</div>
											<div className="col-md-6">
												<label className="form-label text-muted small">
													Başvuru Tarihi
												</label>
												<div className="fw-medium">
													{selectedReview.jobAppliedDate
														? new Date(
																selectedReview.jobAppliedDate
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
										<label className="form-label text-muted small">
											Ad Soyad
										</label>
										<div className="fw-bold fs-5">
											{selectedReview.name} {selectedReview.surname}
										</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">Email</label>
										<div className="fw-medium">{selectedReview.email}</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">
											Telefon
										</label>
										<div className="fw-medium">
											{selectedReview.phoneNumber}
										</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">Şehir</label>
										<div className="fw-medium">
											{selectedReview.city || "Belirtilmemiş"}
										</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">
											Cinsiyet
										</label>
										<div className="fw-medium">
											{selectedReview.gender || "Belirtilmemiş"}
										</div>
									</div>
									<div className="col-md-6">
										<label className="form-label text-muted small">
											Doğum Tarihi
										</label>
										<div className="fw-medium">
											{selectedReview.birthDate || "Belirtilmemiş"}
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
													selectedReview.securityPolicy
														? "bg-success"
														: "bg-danger"
												}`}>
												{selectedReview.securityPolicy
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
													selectedReview.isAccepted ? "bg-success" : "bg-danger"
												}`}>
												{selectedReview.isAccepted
													? "Kabul Edildi"
													: "Kabul Edilmedi"}
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-light"
									onClick={() => setSelectedReview(null)}>
									<i className="bi bi-x me-2"></i>
									Kapat
								</button>
								<button
									type="button"
									className="btn btn-danger"
									onClick={() => handleReject(selectedReview)}>
									<i className="bi bi-x-circle me-2"></i>
									Reddet
								</button>
								<button
									type="button"
									className="btn btn-success"
									onClick={() => handleApprove(selectedReview)}>
									<i className="bi bi-check-circle me-2"></i>
									Onayla
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
