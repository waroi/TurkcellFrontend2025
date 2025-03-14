"use client";
import { useCallback, useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";
import { getCurrentUser, getUserData } from "@/controller/AuthController";

const BlogDetails = () => {
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
        author: userData.fullName,
        [e.target.id]: e.target.value,
      }));
    },
    [userData]
  );

  const handleAdd = useCallback((newPost) => {
    addPost(newPost);
    console.log("added", newPost);
    router.push("/");
  });

  return (
    <div className="container">
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="form">
              <form>
                <h5 className="display-6 fs-3 mb-5 text-center">
                  Post İçeriğini Düzenle
                </h5>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Post Görsel URL'i
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Post Başlığı
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    aria-describedby="emailHelp"
                    onChange={(e) => handleChange(e)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Post İçeriği
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Post Yazarı
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    defaultValue={userData ? userData.fullName : ""}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="release-date" className="form-label">
                    Post Yayınlanma Tarihi
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="releaseDate"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleAdd(newPost)}
                >
                  Ekle
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="preload">
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

export default BlogDetails;
