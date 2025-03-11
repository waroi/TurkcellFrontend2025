import BlogCard from "@/components/BlogCard/BlogCard";
import blogData from "../components/data.json";

export default function Home() {
	return (
		<section className="container">
			<div className="row">
				{blogData.map((blog) => (
					<BlogCard key={blog.id} {...blog} />
				))}
			</div>
		</section>
	);
}
