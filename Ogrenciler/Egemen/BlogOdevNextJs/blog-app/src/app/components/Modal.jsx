"use client";

import React, { useEffect } from "react";
import { postBlog } from "../../../services/Api";
import { useSelector, useDispatch } from "react-redux";
import { setUpdateBlog, resetBlog, addBlog } from "../redux/slices/blogSlice";

const Modal = () => {
  const blog = useSelector((state) => state.blog.blog);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       import("bootstrap/dist/js/bootstrap.bundle.min.js").then((bootstrap) => {
  //         window.bootstrap = bootstrap;
  //       });
  //       const handleFormSubmit = () => {
  //         const forms = document.querySelectorAll(".needs-validation");

  //         Array.from(forms).forEach((form) => {
  //           form.addEventListener(
  //             "submit",
  //             (event) => {
  //               if (!form.checkValidity()) {
  //                 event.preventDefault();
  //                 event.stopPropagation();
  //               }

  //               form.classList.add("was-validated");
  //             },
  //             false
  //           );
  //         });
  //       };

  //       handleFormSubmit();
  //     }
  //   }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUpdateBlog({
        [name]: value,
      })
    );
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    // if (!form.checkValidity()) {
    //   form.classList.add("was-validated");

    //   return;
    // }

    try {
      const blogs = await postBlog(blog);
      dispatch(addBlog(blogs));
      dispatch(resetBlog());
      console.log("Blog Eklendi");
      //   form.classList.remove("was-validated");
      //   if (typeof window !== "undefined") {
      //     const modalElement = document.getElementById("exampleModal");
      //     const modalInstance = new bootstrap.Modal(modalElement);
      //     modalInstance.hide();
      //   }
    } catch (error) {
      console.log("Blog Eklenmedi");
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        📚 Blog Ekle
      </button>

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
                📚 Blog Ekle
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
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
                    value={blog.author}
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
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-warning px-4 py-2 rounded-3 fw-bold shadow"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
