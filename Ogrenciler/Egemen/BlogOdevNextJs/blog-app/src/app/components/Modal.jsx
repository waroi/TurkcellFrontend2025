"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setUpdateBlog,
  resetBlog,
  addAllBlog,
} from "../redux/slices/blogSlice";
import { addedBlog, getUserBlogs } from "../../../firebase/dbController";
import { auth } from "../../../firebase/firebase";
import Button from "./atoms/buttons/Button";
const Modal = () => {
  const blog = useSelector((state) => state.blog.blog);
  const dispatch = useDispatch();
  const user = auth.currentUser;
  console.log("user", user);

  const handleModalOpen = () => {
    dispatch(resetBlog());
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUpdateBlog({
        [name]: value,
        ["userId"]: user.uid || "",
        ["author"]: user.displayName,
      })
    );
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      // const blogs = await postBlog(blog);
      addedBlog(blog);

      const blogs = await getUserBlogs();
      dispatch(addAllBlog(blogs));
      dispatch(resetBlog());

      console.log("Blog Eklendi");
    } catch (error) {
      console.log("Blog Eklenmedi");
    }
  };
  return (
    <>
      {/* <Button
        type="button"
        className="btn btn-outline-success rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={handleModalOpen}
      >
        ☄️ Blog Ekle
      </Button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3 rounded-4 shadow-lg border-0">
            <div className="modal-header rounded-top-4">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                ☄️ Blog Ekle
              </h1>
              <Button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></Button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Başlık
                  </label>
                  <input
                    value={blog.title || ""}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    Yazar
                  </label>
                  <input
                    disabled
                    value={user.displayName}
                    onChange={handleChange}
                    name="author"
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Konu
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={blog.topic}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      name="topic"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label">
                    Resim URL
                  </label>
                  <input
                    value={blog.image}
                    onChange={handleChange}
                    type="text"
                    name="image"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="form-floating col-12">
                  <textarea
                    value={blog.body}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="body"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">İçerik</label>
                </div>
              </form>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <Button
                onClick={handleClick}
                type="submit"
                className="btn btn-warning px-4 py-2 rounded-3 fw-bold shadow"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Kaydet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
