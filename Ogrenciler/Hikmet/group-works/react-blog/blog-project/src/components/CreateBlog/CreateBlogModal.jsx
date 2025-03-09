import React, { useState } from "react";
import BlogClient from "../../client/blogClient";
import styles from "./CreateBlogModal.module.css";

function CreateBlogModal({ onClose }) {
	function createBlog(blog) {
		BlogClient.create(blog).then((response) => {
			console.log(response);
		});
	}
	function handleSubmit(event) {
		createBlog(blog);
		event.preventDefault();
		window.location.reload();
		onClose();
	}

	const [category, setCategory] = useState("");
	const [description, setDescription] = useState("");
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [avatar, setAvatar] = useState("");
	const [blogContent, setBlogContent] = useState("");
	const [name, setName] = useState("");

	const blog = {
		category,
		description,
		title,
		image,
		avatar,
		blogContent,
		name,
	};
	console.log(blog);

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<h2>Create Blog</h2>
				<form onSubmit={handleSubmit}>
					<div className={styles.formGroup}>
						<label>Category</label>
						<input
							type="text"
							required
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Description</label>
						<input
							type="text"
							required
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Title</label>
						<input
							type="text"
							required
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Image</label>
						<input
							type="text"
							required
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Avatar</label>
						<input
							type="text"
							required
							value={avatar}
							onChange={(e) => setAvatar(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Blog Content</label>
						<textarea
							type="text"
							required
							value={blogContent}
							onChange={(e) => setBlogContent(e.target.value)}
						/>
					</div>
					<div className={styles.formGroup}>
						<label>Name</label>
						<input
							type="text"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<button type="submit" className={styles.submitButton}>
						Create
					</button>
				</form>
				<button className={styles.closeButton} onClick={onClose}>
					Close
				</button>
			</div>
		</div>
	);
}

export default CreateBlogModal;
