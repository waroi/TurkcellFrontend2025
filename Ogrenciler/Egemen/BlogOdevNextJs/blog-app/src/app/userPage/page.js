"use client";
import { useEffect, useState } from "react";
import { getUserBlogs } from "../../../firebase/dbController";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import UpdateModal from "../components/UpdateModal";
import { addAllBlog, searchBlogs } from "../redux/slices/blogSlice";
import { auth } from "../../../firebase/firebase";

const UserPage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const searchTerm = useSelector((state) => state.blog.searchTerm);
  const dispatch = useDispatch();
  const [userAuth, setUserAuth] = useState();
  useEffect(() => {
    if (searchTerm == "") {
      async function fetchBlog() {
        // const data = await getBlog();
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
  useEffect(() => {
    dispatch(addAllBlog([]));
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUserAuth(userAuth);
      } else {
        setUserAuth(null);
      }
    });

    return () => unsubscribe();
  }, []);
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
    <p>Yükleniyor</p>
  );
};

export default UserPage;
