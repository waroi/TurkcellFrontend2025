import BlogActions from "./BlogActions";

function BlogDetails({ blog }) {
	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<img
				className="shadow-lg border rounded-5 p-3  mt-5"
				height={"300px"}
				width={"300px"}
				src={blog.imageUrl ? blog.imageUrl : "/react.svg"}
				alt={blog.title}
			/>
			<h1 className="my-4">{blog.title}</h1>
			<p>{blog.description}</p>
			<h6>
				Yayın Tarihi:
				<span className="badge text-bg-secondary mx-2">{blog.releaseDate}</span>
			</h6>
			<div className="d-flex justify-content-center gap-3">
				<BlogActions id={blog.id} />
			</div>
		</div>
	);
}

export default BlogDetails;
