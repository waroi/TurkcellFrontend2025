import blogData from "@/datas/blogData";

const BlogDetail = ({ params }) => {
	const blog = blogData.find((blog) => blog.id === parseInt(params.id));
	return (
		<>
			<div>
				{blog && (
					<div className="detail-container d-flex flex-column align-items-center justify-content-center shadow-lg p-5 m-5">
            
						<h1 className="py-3">{blog.title}</h1>

						<img src={blog.image} alt="Blog Picture" height={500} />
						<div className="detail-body">
							<div className="py-5">
                {blog.content.map((content,index) => (
                  <div key={index}>  <p>{content}</p>
                  </div>
                ))}
                </div>
              <div className="tags">
                {blog.tags.map((tag) => (
                  <span key={tag} className="tag badge me-2">
                    #{tag}
                  </span>
                ))}
              </div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default BlogDetail;
