"use client";
import { useCallback, useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";
import { getCurrentUser, getUserData } from "@/controller/AuthController";
import Form from "@/components/Form";
import Card from "@/components/Card";

const AddBlog = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const { addPost } = useBlogStore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = getCurrentUser();
      if (user) {
        const data = await getUserData(user.uid);
        setUserData(data);
      }
    };

    fetchUserData();
    console.log("userdata", userData);
  }, []);

  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    author: userData ? userData?.fullName : "",
    releaseDate: "",
    content: "",
  });
  const handleChange = useCallback((e) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      [e.target.id]: e.target.value,
    }));
  }, []);

  useEffect(() => {
    if (userData) {
      setNewPost((prev) => ({ ...prev, author: userData.fullName }));
    }
  }, [userData]);

  const handleAdd = useCallback((newPost, e) => {
    e.preventDefault();
    addPost(newPost);
    console.log("added", newPost);
    router.push("/");
  });
  if (!newPost) return <Loading />;
  console.log("val:", newPost);

  return (
    <div className="container">
      <div className="d-flex py-5 w-100">
        <div className="row align-items-center w-100">
          <div className="col-lg-7">
            <Form
              value={newPost}
              onChange={handleChange}
              onSubmit={(e) => handleAdd(newPost, e)}
              btnText="Ekle"
              className="w-100"
            />
          </div>
          <div className="col-lg-5">
            <Card blog={newPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
