import { useState, useEffect } from "react";
import CustomNavbar from "./components/CustomNavbar";
import Article from "./components/Article";
import MainArticle from "./components/MainArticle";
import Footer from "./components/Footer";
import {getBlogs, updateBlog, postBlog, deleteBlog} from "./core/RequestModel";
function App() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
      const fetchBlogs = async () => {
        const data = await getBlogs();
        setBlog(data);
      }
      fetchBlogs();
    }, []);
  return (
    <>
      <CustomNavbar />
      <MainArticle />
      <Article key={blog.blogID}/>
      <Footer />
    </>
  );
}

export default App;
