"use client";
import { useEffect, useState } from "react";
import { getUserBlogs } from "../../../firebase/dbController";
import { useDispatch, useSelector } from "react-redux";
import UpdateModal from "../components/organisms/modal/UpdateModal";
import { addAllBlog, searchBlogs } from "../redux/slices/blogSlice";
import { unsubscribe } from "../../../services/authServices";
import Map from "../components/organisms/cardContainer/Map";

const UserPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    if (searchTerm == "") {
      unsubscribe(setUserAuth);
      async function fetchBlog() {
        const data = await getUserBlogs();
        if (data) {
          dispatch(addAllBlog(data));
          setLoading(true);
        }
      }
      fetchBlog();
    } else {
      dispatch(searchBlogs(searchTerm));
    }
  }, [searchTerm, userAuth]);

  return userAuth ? (
    <div>
      <main className="container">
        <h3 className="my-3 text-center text-success fw-semibold">
          Blog Yazılarım
        </h3>
        <Map blogs={blogs} userAuth={userAuth} loading={loading} />
        <UpdateModal />
      </main>
    </div>
  ) : (
    <p>Lütfen Giriş Yapınız</p>
  );
};

export default UserPage;
