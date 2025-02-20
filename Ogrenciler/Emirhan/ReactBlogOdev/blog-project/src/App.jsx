import "./App.css";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Fetch from "./api/Fetch";
import Modal from "./components/Modal";


function App() {

  const { blogs, setBlog, blog, postBlog } = Fetch();

  return (
    <>
      <Navbar />
      <Modal
      setBlog = {setBlog}
      blog = {blog}
      postBlog = {postBlog}
      />
      <div className="container">
        <h2 className="mt-5">React Blog</h2>
        <h6 className="mb-5">
          Bu blog, React ekibinden gelen güncellemeler için resmi kaynaktır.
          Sürüm notları veya kullanımdan kaldırma bildirimleri de dahil olmak
          üzere önemli her şey ilk olarak burada yayınlanacaktır. Twitter’da
          @reactjs hesabını da takip edebilirsiniz, ancak sadece bu blogu
          okursanız önemli bir şey kaçırmazsınız.
        </h6>
        <div className="grid-container">
          {blogs.map((p) => (
            <BlogCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
