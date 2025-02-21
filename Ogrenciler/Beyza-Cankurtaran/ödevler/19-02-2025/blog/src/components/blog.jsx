import React, { useState, useEffect } from "react";
import Card from "./Card/index";
import Author from "./author";
import Filter from "./filter";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setFilteredBlogs(data);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  useEffect(() => {
    if (filter) {
      setFilteredBlogs(blogs.filter((blog) => blog.author === filter));
    } else {
      setFilteredBlogs(blogs);
    }
  }, [filter, blogs]);

  return (
    <>
      <section className="bg-secondary">
        <h2 className="text-center text-white pt-3">Yaz Tatili</h2>
        <section>
          <Filter setFilter={setFilter} />
        </section>
        <div className="container p-3">
          <div className="row justify-content-around gap-1">
            {filteredBlogs.map((blog) => (
              <Card
                key={blog.id}
                title={blog.title}
                detail={blog.detail}
                author={blog.author}
                img={blog.img}
                date={blog.date}
                explanation={blog.explanation}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <Author />
      </section>
    </>
  );
};

export default Blog;
