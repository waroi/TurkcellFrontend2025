import blogData from "@/components/data.json";

function BlogsDetail({ params }) {
	const id = params.id;

	const post = blogData.find((blog) => blog.id === id);

	if (!post) {
		return <div>Blog bulunamadı!</div>;
	}

	return (
		<div className="container">
			<div className="d-flex flex-column align-items-center justify-content-center">
				<img className="shadow-lg border rounded-5 p-3  mt-5" height={"300px"} width={"300px"} src={post.imageUrl} alt={post.title} />
				<h1 className="my-4">{post.title}</h1>
				<p>{post.description}</p>
				<h6>Yayın Tarihi:<span className="badge text-bg-secondary mx-2">{post.releaseDate}</span></h6>
			</div>
		</div>
	);
}

export default BlogsDetail;
