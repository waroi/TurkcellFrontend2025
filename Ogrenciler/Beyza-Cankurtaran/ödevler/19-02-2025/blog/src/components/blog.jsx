import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card/index";


const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blog") // db.json'ı çalıştırmalısın (json-server)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);
  
  return (
    <>
      <section className="bg-secondary">
        <h2 className="text-center text-white pt-3">Yaz Tatili</h2>
        <div className="container p-3">
          <div className="row justify-content-around  gap-1">
          {blogs.slice(0,3).map(blog => (
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
    </>
  );
};

export default Blog;
