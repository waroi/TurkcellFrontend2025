import BlogCard from "@/components/BlogCard/BlogCard";
import Navbar from "@/components/Navbar/Navbar";

export default async function Home() {
	async function blogData() {
		return fetch("http://localhost:3000/blogs").then((res) => res.json());
	}
	const blogs = await blogData();

	return (
		<>
			<Navbar />
			<section className="container">
				<div className="row">
					{blogs.map((blog) => (
						<BlogCard key={blog.id} {...blog} />
					))}
				</div>
			</section>
		</>
	);
}
