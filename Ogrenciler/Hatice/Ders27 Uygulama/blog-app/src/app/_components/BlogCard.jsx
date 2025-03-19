"use client";
import Link from "next/link";
import Image from "next/image";
import { myLoader } from "@/utils/functions";
import Button from "./Button";
import { deleteBlog, getBlogs } from "@/utils/services/helpers";
import { toast } from "react-toastify";
import Card from "./Card";
import CardFooter from "./CardFooter";
import { uiTexts } from "../../../constants/index";

const BlogCard = ({ blog, getBlogs, onUpdate }) => {
  const { buttons, toastMessages } = uiTexts;

  const handleDelete = async (id) => {
    const result = await deleteBlog(id);
    if (result) {
      await getBlogs();
      toast.success(toastMessages?.success?.delete);
    }
  };
      return (
    <>
      {blog && (
        <div className="col-lg-4 rounded">
          <Card
            key={blog?.id}
            id={blog?.id}
            title={blog?.title}
            date={blog?.date}
            poster={blog?.poster}
            content={blog?.content}
            author={blog?.author}
            layout="vertical"
          >
            <CardFooter>
              <Link href={`blog/${blog?.id}`} type="link">
                {buttons?.more}
              </Link>
              <Button
                className="ms-2"
                onClick={() => handleDelete(blog?.id)}
                variant="delete"
              ></Button>
              <Button
                className="ms-2"
                onClick={() => onUpdate(blog)}
                variant="edit"
              ></Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
};

export default BlogCard;
