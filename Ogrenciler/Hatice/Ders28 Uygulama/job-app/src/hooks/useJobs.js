import { useRouter } from "next/navigation";
import useStore from "../store/jobs";

import {
  addJob as addJobFirebase,
  deleteJob as deleteJobFirebase,
} from "../firebase/firebaseConfig";


export default function () {
  const router = useRouter();
  const store = useStore();

  function addJob(title, description, banner, content, job) {
    job = {
      title,
      description: description,
      banner: banner ? banner : defaultImage,
      content,
      date: new Date().getTime(),
      author: store.user.id,
    };

    addJobFirebase(job).then((id) => {
      store.addBlog({ ...job, id });
      router.push("/");
    });
  }

  function deleteJob(id) {
    if (confirm("Are you sure you want to delete the blog?"))
      deleteBlogFirebase(id).then(() => {
        store.deleteBlog(id);
        router.push("/");
      });
  }

  return {
    addJob,
    editJob,
    deleteBlog,
  };
}
