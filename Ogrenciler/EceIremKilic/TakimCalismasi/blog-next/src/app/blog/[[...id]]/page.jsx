"use client";
import React, {use,useEffect,useState} from "react";
import useBlogStore from "@/store/useBlogStore";

const BlogDetails = ({ params }) => {
  const nonPromiseParams = use(params);
  const [date, setDate] = useState("");
  const [isEdit, setIsEdit] = useState(false); //! Sayfanın aynı içerisinde güncelleme işlemi yapılacaksa kullanılabilir. Şu anlık ben kullanmadım. Eğer isEdit ise p ile açılmış tagleri input ile değiştir.
  const { posts,deletePost,updatePost } = useBlogStore();
  const blog = posts.filter((post) => post.id.toString() == nonPromiseParams.id);

  useEffect(() => {
    setDate(new Date(blog[0]?.releaseDate).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }));
  });

  return (
    <div className="container">
      <img src={blog[0]?.image} className="w-100 mb-4" />
      <div className="d-flex">
        <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
          {blog[0]?.author}
        </p>
        <p className="badge bg-success px-4 py-2 rounded-pill">
          {date}
        </p>
      </div>
      <h1>{blog[0]?.title}</h1>
      <div className="my-4 display-6 fs-5">{blog[0]?.content}</div>
      <button
        className="btn btn-danger me-3"
        onClick={() => deletePost(blog[0].id)}
      >
        Sil
      </button>
      <button
        className="btn btn-warning"
        onClick={() => updatePost(blog[0].id)}
      >
        Güncelle
      </button>
    </div>
  );
};

export default BlogDetails;
