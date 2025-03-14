"use client";
import Link from "next/link";
import Image from "next/image";
import { myLoader } from "@/utils/functions";
import Button from "./Button";
import { deleteBlog } from "@/utils/services/helpers";
import { toast } from "react-toastify";
import Card from "./Card";

const BlogCard = ({ blog, getBlogs }) => {
  return (
    <>
      {blog && (
        <div className="col-lg-4 rounded">
          <Card key={blog.id} blog={blog} revalidateFunction={getBlogs} date={blog.date} poster={blog.poster} content={blog.content} author={blog.author} deleteFunction={deleteBlog} />
        </div>
      )}
    </>
  );
};

export default BlogCard;
