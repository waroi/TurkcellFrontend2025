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
		<Navbar/>
		<section className="container d-flex align-items-center justify-content-center">
			<BlogDetails blog={blog} />
		</section>
		</>
	);
}

export default BlogsDetail;
