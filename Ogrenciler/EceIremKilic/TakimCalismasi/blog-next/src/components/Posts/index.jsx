"use client";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import styles from "./posts.module.css";
import useBlogStore from "../../store/useBlogStore";
import Link from "next/link";

const Posts = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const { posts, addPosts } = useBlogStore();

  console.log("123", posts);

  const handleAddPosts = () => {
    const data = {
      title: "Giresun Kalesi: Tarihin ve Manzaranın Buluştuğu Zirve",
      content:
        "Giresun’un en önemli tarihi yapılarından biri olan Giresun Kalesi, şehrin merkezinde yüksek bir tepede yer alır. Antik çağlardan günümüze kadar uzanan bu kale, Pontus Krallığı döneminden kalma izler taşımaktadır. Şehri ve Karadeniz’i kuşbakışı görebileceğiniz bu eşsiz nokta, ziyaretçilere hem tarihi hem de doğal güzellikleri bir arada sunar. Özellikle gün batımında etkileyici manzarasıyla fotoğrafçılar ve doğa severler için vazgeçilmez bir noktadır.",
      image: "https://www.example.com/giresun-kalesi.jpg",
      releaseDate: "2025-03-11",
      author: "Ece İrem",
    };

    addPosts(data);
  };

  useEffect(() => {
    setBlogs(data);
    handleAddPosts();
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSetBlogs = () => {
    const formattedData = data.slice(0, 4);
    setBlogs(formattedData);
    console.log("blogs:", blogs);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="container py-5">
      <div className="row">
        {blogs?.map((blog, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch"
            key={index}
          >
            <Link href={`/blog/${blog.id}`} className="text-decoration-none">
              <div className="card shadow-sm border-0 rounded mb-4 rounded-4">
                <img
                  src={blog?.image}
                  className={`card-img-top object-fit-cover rounded-top-4 img-fluid ${styles.image}`}
                  alt="..."
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div className="card-info d-flex justify-content-between mb-2">
                    <div
                      className={`card-author badge ${styles.bgGreen} text-dark fw-normal rounded-pill px-3 py-1`}
                    >
                      {formatDate(blog?.releaseDate)}
                    </div>
                    <div
                      className={`card-author badge ${styles.bgGreen} text-dark fw-normal rounded-pill px-3 py-1`}
                    >
                      {blog?.author}
                    </div>
                  </div>
                  <h5 className="card-title">{blog?.title}</h5>
                  <p className="card-text">
                    {blog?.content.split(".").slice(0, 1) + "."}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
