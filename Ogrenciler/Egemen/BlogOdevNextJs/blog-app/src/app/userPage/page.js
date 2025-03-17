"use client";
import { useEffect, useState } from "react";
import { getUserBlogs } from "../../../firebase/dbController";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/molecules/card/Card";
import UpdateModal from "../components/organisms/modal/UpdateModal";
import { addAllBlog, searchBlogs } from "../redux/slices/blogSlice";
import { unsubscribe } from "../../../services/authServices";

const UserPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const dispatch = useDispatch();
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    if (searchTerm == "") {
      unsubscribe(setUserAuth);
      async function fetchBlog() {
        const data = await getUserBlogs();
        if (data) {
          dispatch(addAllBlog(data));
        }
      }
      fetchBlog();
    } else {
      dispatch(searchBlogs(searchTerm));
    }
  }, [searchTerm, userAuth, dispatch]);

  return userAuth ? (
    <div>
      <main className="container">
        <h3 className="my-3 text-center text-success fw-semibold">
          Blog Yazılarım
        </h3>
        <div className="row">
          {blogs.length > 0 ? (
            blogs?.map((blog) => (
              <div key={blog?.id} className="col-12">
                <Card userAuth={userAuth} key={blog?.id + "card"} card={blog} />
              </div>
            ))
          ) : (
            <p>Yükleniyor...</p>
          )}
        </div>
        <UpdateModal />
      </main>
    </div>
  ) : (
    <p>Lütfen Giriş Yapınız</p>
  );
};

export default UserPage;
