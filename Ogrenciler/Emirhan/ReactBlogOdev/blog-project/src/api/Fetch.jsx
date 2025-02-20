import { useEffect, useState } from "react";

const Fetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  return { posts };
};

export default Fetch;
