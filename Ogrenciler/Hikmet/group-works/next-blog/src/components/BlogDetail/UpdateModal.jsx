"use client";
import useBlogStore from "@/store/blogStore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateModal({ id }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [img_url, setImageUrl] = useState("");
	const [releaseDate, setReleaseDate] = useState("");

	const {
		blogs,
		fetchBlogs,
		deleteBlog: deleteBlogInStore,
		updateBlog: updateBlogInStore,
	} = useBlogStore();

	useEffect(() => {
		const currentBlog = blogs.find((blog) => blog.id === id);
		if (currentBlog) {
			setTitle(currentBlog.title);
			setDescription(currentBlog.description);
			setImageUrl(currentBlog.img_url);
			setReleaseDate(currentBlog.releaseDate);
		}
	}, [id]);

	useEffect(() => {
		fetchBlogs();
	}, []);

	async function updateBlog() {
		const blogData = {
			title,
			description,
			img_url,
			releaseDate,
		};

		const success = await updateBlogInStore(id, blogData);
		if (success) {
			redirect(`/blog/${id}`);
		}
	}

	return (
		<div
			className="modal fade"
			id="updateBlog"
			tabIndex="-1"
			aria-labelledby="updateBlogLabel"
			aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content border-0 shadow">
					<div className="modal-header bg-primary text-white">
						<h1 className="modal-title fs-5" id="updateBlogLabel">
							Blog Yazısını Güncelle
						</h1>
						<button
							type="button"
							className="btn-close btn-close-white"
							data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div className="modal-body p-4">
						<form>
							<div className="mb-4">
								<label htmlFor="title" className="form-label fw-semibold">
									Başlık:
								</label>
								<input
									type="text"
									className="form-control form-control-lg border-0 bg-light"
									id="title"
									placeholder="Blog başlığını girin"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="description" className="form-label fw-semibold">
									Açıklama:
								</label>
								<textarea
									className="form-control border-0 bg-light"
									id="description"
									rows="5"
									placeholder="Blog açıklamasını girin"
									value={description}
									onChange={(e) => setDescription(e.target.value)}></textarea>
							</div>
							<div className="mb-4">
								<label htmlFor="imageUrl" className="form-label fw-semibold">
									Görsel URL:
								</label>
								<input
									type="text"
									className="form-control border-0 bg-light"
									id="imageUrl"
									placeholder="Görsel URL'sini girin"
									value={img_url}
									onChange={(e) => setImageUrl(e.target.value)}
								/>
							</div>
							<div className="mb-4">
								<label htmlFor="releaseDate" className="form-label fw-semibold">
									Yayın Tarihi:
								</label>
								<input
									type="date"
									className="form-control border-0 bg-light"
									id="releaseDate"
									value={releaseDate}
									onChange={(e) => setReleaseDate(e.target.value)}
								/>
							</div>
						</form>
					</div>
					<div className="modal-footer border-0">
						<button
							type="button"
							className="btn btn-outline-secondary rounded-pill px-4"
							data-bs-dismiss="modal">
							İptal
						</button>
						<button
							type="button"
							className="btn btn-primary rounded-pill px-4"
							onClick={updateBlog}>
							Güncelle
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
