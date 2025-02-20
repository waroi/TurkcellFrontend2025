import { useEffect, useState } from "react";
import { BlogService } from "./services/BlogService";
import Card from "./components/Card";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    BlogService.getBlogs()
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {blogs && (
        blogs.map((blog) => 
        <Card key={blog.id} blog={blog} />)
      )}
    </div>
  );
}

export default App;