import BlogCard from "@/components/BlogCard/BlogCard";
import blogData from "../components/data.json";

export default function Home() {
	return (
		<section className="container">
			<div className="row row-cols-1 row-cols-md-2 ">
				{blogData.map((blog) => (
					<BlogCard key={blog.id} {...blog} />
				))}
			</div>
		</section>
	);
}
