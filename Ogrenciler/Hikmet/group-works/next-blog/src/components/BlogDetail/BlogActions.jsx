"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function BlogActions({ id }) {
	const [blogData, setBlogData] = useState(null);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [releaseDate, setReleaseDate] = useState("");

	//! async function olan fetchBlog fonksiyonunu useEffect dışına al ve useEFfect içinde çağır
	//! anasayfadaki veri getirme olayı useEffect ile farklı bir componentte denenecek ve state değiştiğinde yani useEffect dependency array değiştiğinde çalışacak
	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const response = await fetch(`http://localhost:3000/blogs/${id}`);

				if (!response.ok) {
					throw new Error("Blog verisi alınamadı");
				}

				const data = await response.json();
				setBlogData(data);

				setTitle(data.title || "");
				setDescription(data.description || "");
				setImageUrl(data.imageUrl || "");
				setReleaseDate(data.releaseDate || "");
			} catch (error) {
				console.error("Blog yüklenirken hata:", error);
			}
		};

		fetchBlog();
	}, [id]);

	function deleteBlog() {
		fetch(`http://localhost:3000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			redirect("/");
		});
	}
	function updateBlog() {}

	return (
		<div className="d-flex justify-content-center gap-3">
			<button
				className="btn btn-primary mt-5"
				data-bs-toggle="modal"
				data-bs-target="#updateBlog">
				Düzenle
			</button>
			<button onClick={deleteBlog} className="btn btn-danger mt-5">
				Sil
			</button>
			<div
				className="modal fade"
				id="updateBlog"
				tabIndex="-1"
				aria-labelledby="updateBlogLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="updateBlogLabel">
								Update Blog Post
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form>
								<div className="mb-3">
									<label htmlFor="title" className="col-form-label">
										Title:
									</label>
									<input
										type="text"
										className="form-control"
										id="title"
										value={title}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="description" className="col-form-label">
										Description:
									</label>
									<textarea
										className="form-control"
										id="description"
										value={description}></textarea>
								</div>
								<div className="mb-3">
									<label htmlFor="imageUrl" className="col-form-label">
										Image URL:
									</label>
									<input
										type="text"
										className="form-control"
										id="imageUrl"
										value={imageUrl}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="releaseDate" className="col-form-label">
										Release Date:
									</label>
									<input
										type="text"
										className="form-control"
										id="releaseDate"
										value={releaseDate}
									/>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={updateBlog}>
								Update Blog Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BlogActions;
