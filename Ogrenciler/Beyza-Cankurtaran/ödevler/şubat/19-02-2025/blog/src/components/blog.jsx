import React, { useState, useEffect } from "react";
import Card from "./Card/index";
import Author from "./author";
import Filter from "./filter";
import "./blog.css";

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
      <section className="bgg">
        <h2 className="text-center text-white pt-4 ">Bloglarımız</h2>
        <section className="m-6"> 
          <div className="container d-flex justify-content-end text-end ">
            <Filter setFilter={setFilter} />
          </div>
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
