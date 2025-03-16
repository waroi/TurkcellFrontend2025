import { useRouter } from "next/navigation";
import useStore from "@/store/blogs";

import {
  addBlog as addBlogFirebase,
  editBlog as editBlogFirebase,
  deleteBlog as deleteBlogFirebase,
} from "@/services/firebase";

const defaultImage =
  "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg";

export default function () {
  const router = useRouter();
  const store = useStore();

  function addBlog(title, image, description, banner, content, blog) {
    blog = {
      title,
      image: image ? image : defaultImage,
      description: description,
      banner: banner ? banner : defaultImage,
      content,
      date: new Date().getTime(),
      author: store.user.id,
    };

    addBlogFirebase(blog).then((id) => {
      store.addBlog({ ...blog, id });
      router.push("/");
    });
  }

  function editBlog(id, title, image, description, banner, content, blog) {
    blog = {
      id,
      title,
      image: image ? image : defaultImage,
      description,
      banner: banner ? banner : defaultImage,
      content: content,
      date: new Date().getTime(),
    };

    editBlogFirebase(blog).then(() => {
      store.editBlog(blog);
    });
    router.push(`/blog/${id}`);
  }

  function deleteBlog(id) {
    if (confirm("Are you sure you want to delete the blog?"))
      deleteBlogFirebase(id).then(() => {
        store.deleteBlog(id);
        router.push("/");
      });
  }

  return {
    addBlog,
    editBlog,
    deleteBlog,
  };
}
