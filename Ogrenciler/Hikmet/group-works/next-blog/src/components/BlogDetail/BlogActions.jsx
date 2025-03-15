"use client";

import useBlogStore from "@/store/blogStore";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

function BlogActions({ id }) {

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [releaseDate, setReleaseDate] = useState("");

	const { blogs, fetchBlogs, deleteBlog: deleteBlogInStore, updateBlog: updateBlogInStore } = useBlogStore();

	useEffect(() => {
		const currentBlog = blogs.find(blog => blog.id === id);
		if (currentBlog) {
			setTitle(currentBlog.title);
			setDescription(currentBlog.description);
			setImageUrl(currentBlog.imageUrl);
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
			imageUrl,
			releaseDate
		};

		const success = await updateBlogInStore(id, blogData);
		if (success) {
			redirect(`/blog/${id}`);
		}
	}

	async function handleDeleteBlog() {
		const success = await deleteBlogInStore(id);
		if (success) {
			redirect("/");
		}
	}

	return (
		<div className="d-flex justify-content-center gap-3">
			<button
				className="btn btn-primary mt-5"
				data-bs-toggle="modal"
				data-bs-target="#updateBlog">
				Düzenle
			</button>
			<button onClick={handleDeleteBlog} className="btn btn-danger mt-5">
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
										onChange={(e) => setTitle(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="description" className="col-form-label">
										Description:
									</label>
									<textarea
										className="form-control"
										id="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}></textarea>
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
										onChange={(e) => setImageUrl(e.target.value)}
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
										onChange={(e) => setReleaseDate(e.target.value)}
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
								onClick={updateBlog}
								data-bs-dismiss="modal">
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
