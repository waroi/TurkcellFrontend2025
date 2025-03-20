import React, { useState, useEffect } from "react";
import { db } from "../src/firebase/config"; 
import { collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function AdminView() {
	const [reviewList, setReviewList] = useState([]);
	const [positiveList, setPositiveList] = useState([]);
	const [negativeList, setNegativeList] = useState([]);
	const [selectedReview, setSelectedReview] = useState(null); 

	useEffect(() => {
		const fetchReviews = async () => {
			const querySnapshot = await getDocs(collection(db, "incelenecek"));
			const reviews = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setReviewList(reviews);
		};
		fetchReviews();
	}, []);

	const handleApprove = async (item) => {
		await updateDoc(doc(db, "incelenecek", item.id), { isAccepted: true });
		setPositiveList([...positiveList, item]);
		setReviewList(reviewList.filter((review) => review.id !== item.id));
		await deleteDoc(doc(db, "incelenecek", item.id)); 
	};

	const handleReject = async (item) => {
		await updateDoc(doc(db, "incelenecek", item.id), { isAccepted: false });
		setNegativeList([...negativeList, item]);
		setReviewList(reviewList.filter((review) => review.id !== item.id));
		await deleteDoc(doc(db, "incelenecek", item.id));
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center mb-4">Admin Paneli</h1>

			<div className="row">
				<div className="col-md-4">
					<h3 className="text-center">İncelenecekler</h3>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Ad</th>
								<th>Email</th>
								<th>İşlem</th>
							</tr>
						</thead>
						<tbody>
							{reviewList.map((item) => (
								<tr key={item.id}>
									<td>{item.name} {item.surname}</td>
									<td>{item.email}</td>
									<td>
										<button
											className="btn btn-primary btn-sm me-2"
											onClick={() => setSelectedReview(item)}
										>
											İncele
										</button>
										<button
											className="btn btn-success btn-sm me-2"
											onClick={() => handleApprove(item)}
										>
											Olumlu
										</button>
										<button
											className="btn btn-danger btn-sm"
											onClick={() => handleReject(item)}
										>
											Olumsuz
										</button>
									</td>
								</tr>
							))}
							{reviewList.length === 0 && (
								<tr>
									<td colSpan="3" className="text-center">
										İncelenecek yorum yok.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				<div className="col-md-4">
					<h3 className="text-center">Olumlular</h3>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Ad</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{positiveList.map((item) => (
								<tr key={item.id}>
									<td>{item.name} {item.surname}</td>
									<td>{item.email}</td>
								</tr>
							))}
							{positiveList.length === 0 && (
								<tr>
									<td colSpan="2" className="text-center">
										Olumlu yorum yok.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{/* Olumsuzlar Tablosu */}
				<div className="col-md-4">
					<h3 className="text-center">Olumsuzlar</h3>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Ad</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>
							{negativeList.map((item) => (
								<tr key={item.id}>
									<td>{item.name} {item.surname}</td>
									<td>{item.email}</td>
								</tr>
							))}
							{negativeList.length === 0 && (
								<tr>
									<td colSpan="2" className="text-center">
										Olumsuz yorum yok.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</div>

			{selectedReview && (
				<div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Kullanıcı İncele</h5>
								<button className="btn-close" onClick={() => setSelectedReview(null)}></button>
							</div>
							<div className="modal-body">
								<p><strong>Ad:</strong> {selectedReview.name} {selectedReview.surname}</p>
								<p><strong>Email:</strong> {selectedReview.email}</p>
								<p><strong>Şehir:</strong> {selectedReview.city}</p>
								<p><strong>Telefon:</strong> {selectedReview.phoneNumber}</p>
								<p><strong>Cinsiyet:</strong> {selectedReview.gender}</p>
								<p><strong>Doğum Tarihi:</strong> {selectedReview.birthDate}</p>
								<p><strong>Gizlilik Politikası:</strong> {selectedReview.securityPolicy ? "Kabul edildi" : "Kabul edilmedi"}</p>
							</div>
							<div className="modal-footer">
								<button className="btn btn-secondary" onClick={() => setSelectedReview(null)}>Kapat</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
