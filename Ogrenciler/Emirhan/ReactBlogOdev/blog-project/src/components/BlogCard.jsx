const BlogCard = ({ p,blog,setBlog,setSelectedId}) => {
const blogContent=()=> {
  setBlog(p)
  setSelectedId(p.id)
}
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <p className="card-text">{p.text}</p>
        <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#contentModal" onClick={blogContent}>
          Devamını Oku  
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
