"use client";
import Card from "@/app/_components/Card";
import CardFooter from "@/app/_components/CardFooter";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";
import { deleteBlog, getBlogs } from "@/utils/services/helpers";
import { toast } from "react-toastify";
import { uiTexts } from "../../../../../constants/index";

function Page({ blog }) {
  const router = useRouter();
  const { toastMessages } = uiTexts;

  const handleDelete = async (id) => {
    const result = await deleteBlog(id);
    if (!result) {
      toast.error(toastMessages.error.delete);
      return;
    }
    await getBlogs();
    toast.success(toastMessages.success.delete);
    router.push("/");
  };
  return (
    <div className="container mt-4">
      <Card
        key={blog?.id}
        id={blog?.id}
        title={blog?.title}
        date={blog.date}
        poster={blog.poster}
        content={blog.content}
        author={blog.author}
      >
        <CardFooter>
          <Button
            className="ms-2"
            onClick={() => handleDelete(blog?.id)}
            type="delete"
          ></Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
