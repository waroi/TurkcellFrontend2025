import Header from "./components/organisms/Header";
import Main from "./components/organisms/Main";
import Footer from "./components/organisms/Footer";
import { BlogService } from "./services/BlogService";
import { useState, useEffect } from "react";
function App() {
  const [category, setCategory] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    BlogService.getBlogs(category)
      .then((data) => {
        setBlogs(data);
        setTrigger(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category, trigger]);

  return (
    <div>
      <Header
        category={category}
        setCategory={setCategory}
        setTrigger={setTrigger}
      ></Header>
      <Main blogs={blogs} setTrigger={setTrigger}></Main>
      <Footer></Footer>
    </div>
  );
}
export default App;
