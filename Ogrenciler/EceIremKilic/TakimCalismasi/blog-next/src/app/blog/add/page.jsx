"use client";
import { useCallback, useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";
import { getCurrentUser, getUserData } from "@/controller/AuthController";
import CustomButton from "@/components/CustomButton";
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
    console.log(userData);
  }, []);

  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    author: userData ? userData.fullName : "",
    releaseDate: "",
    content: "",
  });
  const handleChange = useCallback(
    (e) => {
      setNewPost((prevPost) => ({
        ...prevPost,
        author: userData?.fullName,
        [e.target.id]: e.target.value,
      }));
    },
    [userData]
  );
  // useEffect(() => {
  //   if (userData) {
  //     setNewPost((prev) => ({ ...prev, author: userData.fullName }));
  //   }
  // }, [userData]);

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
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="form">
              <Form
                value={newPost}
                onChange={handleChange}
                onSubmit={(e) => handleAdd(newPost, e)}
              />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="preload w-100">
              {/* <Card blog={newPost} /> */}
              <div className="card">
                <img
                  className="card-img-top"
                  src={
                    newPost.image ||
                    "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1741786321~exp=1741789921~hmac=6dae9766aea04f52a17467b86a70dae132aff9267ed9244db0b15a345b39cae1&w=1380"
                  }
                  alt="Post Görseli"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1741786321~exp=1741789921~hmac=6dae9766aea04f52a17467b86a70dae132aff9267ed9244db0b15a345b39cae1&w=1380";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{newPost?.title || "Title"}</h5>
                  <p className="card-text">{newPost?.content || "Content"}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text badge bg-success mb-0">
                      {newPost?.author || "Author"}
                    </p>
                    <p className="card-text badge bg-success">
                      {newPost?.releaseDate || "Date"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
