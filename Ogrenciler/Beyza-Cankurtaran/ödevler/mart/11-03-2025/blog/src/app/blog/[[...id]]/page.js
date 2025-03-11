'use client';
import data from "../../../data/blog.json";
import { useEffect, useState } from "react";

export default function BlogDetail({ params }) {
  const [blog,setBlog]=useState({});
  //const id={params.id}
  const ID=params.id;
  useEffect(() => {
    if (id) {
      const IDBlog = data.find(blog => blog.id === Number(id));  
      setBlog(IDBlog);
      console.log("idBlog:", IDBlog);  
    }
  }, [id]);
  
  console.log(blogID);
  console.log(blog);
  // if(!blog){
  //   return <h1 className="text-center mt-5">Blog Bulunamadı!</h1>;

  // }
  return (
    <div className="container mt-5">
      <h1 className="text-center">{blog.title}</h1>
      <img src={blog.image}alt="Blog image" className="img-fluid mx-auto d-block"/>
      <p>{blog.author}</p>
      <p>{blog.content}</p>

    </div>


  );
}
