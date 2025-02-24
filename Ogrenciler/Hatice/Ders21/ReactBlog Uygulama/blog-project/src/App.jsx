import "./App.css";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Fetch from "./api/Fetch";
import ModalForm from "./components/ModalForm";
import ModalContent from "./components/ModalContent";
import { useState } from "react";

function App() {
  const { blogs, setBlog, blog, postBlog, deleteBlog, selectedId, setSelectedId} = Fetch();
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Navbar handleSearch={handleSearch} search={search} />
      <ModalContent setBlog={setBlog} blog={blog} postBlog={postBlog} deleteBlog={deleteBlog} selectedId={selectedId} setSelectedId={setSelectedId}/>
      <ModalForm setBlog={setBlog} blog={blog} postBlog={postBlog} />
      <div className="container text-light">
        <h2 className="mt-5">React Blog</h2>
        <h6 className="mb-5">
          Bu blog, React ekibinden gelen güncellemeler için resmi kaynaktır.
          Sürüm notları veya kullanımdan kaldırma bildirimleri de dahil olmak
          üzere önemli her şey ilk olarak burada yayınlanacaktır. Twitter’da
          @reactjs hesabını da takip edebilirsiniz, ancak sadece bu blogu
          okursanız önemli bir şey kaçırmazsınız.
        </h6>
        <div className="grid-container">
          {(search ? filteredBlogs : blogs).map((p) => (
            <BlogCard key={p.id} p={p} blog={blog} setBlog={setBlog} setSelectedId={setSelectedId} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;