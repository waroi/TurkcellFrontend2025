"use client";

import useBlogStore from "@/store/blogStore";
import { createClient } from "@/utils/supabase/client";

import Link from "next/link";
import { useEffect, useState } from "react";

function UserComponent() {
	const [user, setUser] = useState();

	// Blog creation states
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [releaseDate, setReleaseDate] = useState("");

	const client = createClient();

	async function getUser() {
		const userSession = await client.auth.getUser();

		setUser(userSession.data.user);
	}

	useEffect(() => {
		getUser();
	}, []);

	const logOut = async () => {
		await client.auth.signOut();
		setUser(undefined);
	};

	const createBlog = useBlogStore((state) => state.createBlog);

	const handleCreateBlog = async () => {
		const blogData = {
			title,
			description,
			imageUrl,
			releaseDate,
		};
		const success = await createBlog(blogData);
		if (success) {
			setTitle("");
			setDescription("");
			setImageUrl("");
			setReleaseDate("");
		}
	};

	return (
		<>
			<li>
				{user ? (
					<div className="nav-link" onClick={logOut}>
						Log Out
					</div>
				) : (
					<Link className="nav-link" href="/login">
						Login
					</Link>
				)}
			</li>
			<li>
				{user && (
					<button
						type="button"
						className="btn btn-primary"
						data-bs-toggle="modal"
						data-bs-target="#createBlog"
						data-bs-whatever="@mdo">
						Add New Blog Post
					</button>
				)}
			</li>

			<div
				className="modal fade"
				id="createBlog"
				tabIndex="-1"
				aria-labelledby="createBlogLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="createBlogLabel">
								Create Blog Post
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
										onChange={(e) => setTitle(e.target.value)}
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
										onChange={(e) => setDescription(e.target.value)}
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
										onChange={(e) => setImageUrl(e.target.value)}
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
										onChange={(e) => setReleaseDate(e.target.value)}
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
								data-bs-dismiss="modal"
								onClick={handleCreateBlog}
								onKeyDown={(e) => e.key === "Enter" && handleCreateBlog()}>
								Create Blog Post
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserComponent;
