"use client";
import React from "react";
import PostCard from "../PostCard";

const UserBlogCard = ({blog, onEdit, onDelete}) => {
  return (
    <div className="card col-lg-3">
      <PostCard blog={blog} />
      <div className="card-body d-flex justify-content-between">
        <button className="btn btn-warning" onClick={() => onEdit(blog)}>
          Düzenle
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(blog.id)}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default UserBlogCard;
