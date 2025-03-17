import BlogDetails from "@/components/BlogDetail/BlogDetails";
import Navbar from "@/components/Navbar/Navbar";

async function BlogsDetail({ params }) {
	const id = await params.id;

	const blog = await getBlog();

	async function getBlog() {
		return fetch(`http://localhost:3000/blogs/${id}`).then((res) => res.json());
	}

	if (!blog) {
		return <div>Blog bulunamadı!</div>;
	}

	return (
		<>
			<Navbar />

			<div className="container mb-3">
				<BlogDetails blog={blog} />
			</div>
		</>
	);
}

export default BlogsDetail;
