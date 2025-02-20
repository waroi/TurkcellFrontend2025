import { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";
import Blog from "./components/Blog";
import Database from "./Database";
import "./style/App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({
    id: -1,
    title: "",
    author: "",
    content: "",
    imageUrl: "",
  });
  const [action, setAction] = useState({
    action: () => {},
    text: "",
  });
  const blogRef = useRef(null);

  //* Can't Use Async Function Directly
  useEffect(() => {
    (async () => {
      setBlogs(await Database.getBlogs());
    })();
  }, []);

  useEffect(() => {
    blogRef.current = blog;
  }, [blog]);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  function openModal(blog) {
    if (blog) {
      setBlog(blog);
      setAction({
        action: editBlog,
        text: "Edit",
      });
    } else {
      setBlog({
        id: -1,
        title: "",
        author: "",
        content: "",
        imageUrl: "",
      });
      setAction({
        action: addBlog,
        text: "Add",
      });
    }

    new window.bootstrap.Modal(document.querySelector(".modal")).show();
  }

  async function addBlog() {
    delete blogRef.current.id;

    blogRef.current.publishedAt = new Date().toISOString().split("T")[0];

    setBlogs([
      ...blogs,
      { ...blogRef.current, id: (await Database.addBlog(blogRef.current)).id },
    ]);
  }

  async function editBlog() {
    blogRef.current.publishedAt = new Date().toISOString().split("T")[0];

    await Database.editBlog(blogRef.current);

    setBlogs(
      blogs.map((blog) =>
        blog.id == blogRef.current.id ? blogRef.current : blog
      )
    );
  }

  async function deleteBlog(id) {
    if (confirm("Are you sure you want to delete this blog?")) {
      await Database.deleteBlog(id);
      setBlogs(blogs.filter((blog) => blog.id != id));
    }
  }

  return (
    <>
      <Navigation openModal={() => openModal()} />
      <Modal blog={blog} setBlog={setBlog} action={action} />
      <main className="py-5">
        <div className="container">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              editBlog={() => openModal(blog)}
              deleteBlog={deleteBlog}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
