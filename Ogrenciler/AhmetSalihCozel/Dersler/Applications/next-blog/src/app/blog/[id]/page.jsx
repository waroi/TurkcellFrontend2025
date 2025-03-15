import blogData from "@/components/data.json";

function BlogsDetail({ params }) {
	const id = params.id;

	const post = blogData.find((blog) => blog.id === id);

	if (!post) {
		return <div>Blog bulunamadı!</div>;
	}

	return (
		<div className="container">
			<h1>{post.title}</h1>
			<p>{post.description}</p>
			{post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
			{post.releaseDate && <p>Yayın Tarihi: {post.releaseDate}</p>}
		</div>
	);
}

export default BlogsDetail;
