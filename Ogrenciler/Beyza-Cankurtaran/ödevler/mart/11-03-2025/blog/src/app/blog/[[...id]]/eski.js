"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "../../../../firebase/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import DetailCard from "./DetailCard";

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
console.log("id:",id);
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id[0]) return;
      
      try {
        const blogRef = doc(db, "blogs", id[0]);
        
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() });
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error("Blog verisi alınırken hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <h2>Yükleniyor...</h2>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-warning py-4">
          <h1 className="display-5">Blog Bulunamadı!</h1>
          <p className="lead mt-3">
            The requested blog post could not be found.
          </p>
          <a href="/" className="btn btn-outline-warning mt-3">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 blog-detail">
      <DetailCard blog={blog} />
    </div>
  );
}
