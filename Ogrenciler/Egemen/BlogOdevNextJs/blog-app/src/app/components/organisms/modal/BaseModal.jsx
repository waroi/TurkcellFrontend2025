"use client";
import { useDispatch } from "react-redux";
import { auth } from "../../../../../firebase/firebase";
import Button from "../../atoms/buttons/Button";
import { setUpdateBlog } from "@/app/redux/slices/blogSlice";
import { useEffect } from "react";
import FormInput from "../../molecules/formInput/FormInput";
import FormTextarea from "../../molecules/formTextarea/FormTextarea";

const BaseModal = ({ ...props }) => {
  const dispatch = useDispatch();
  const user = auth.currentUser;

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(
      setUpdateBlog({
        [name]: value,
        ["userId"]: user.uid || "",
        ["author"]: user.displayName || "",
      })
    );
  };
  return (
    <>
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3 rounded-4 shadow-lg border-0">
            <div className="modal-header rounded-top-4">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.title}
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
                <FormInput
                  labelName={"Başlık"}
                  id={"titleInput"}
                  type={"text"}
                  value={props.blog.title || ""}
                  onChange={handleChange}
                  name={"title"}
                ></FormInput>
                <FormInput
                  labelName={"Yazar"}
                  id={"authorInput"}
                  type={"text"}
                  value={user.displayName}
                  name="author"
                  disabled
                ></FormInput>
                <FormInput
                  labelName={"Konu"}
                  id={"topicInput"}
                  type={"text"}
                  value={props.blog.topic}
                  name="topic"
                  onChange={handleChange}
                ></FormInput>
                <FormInput
                  labelName={"Resim URL"}
                  id={"imageInput"}
                  type={"text"}
                  value={props.blog.image}
                  name="image"
                  onChange={handleChange}
                ></FormInput>
                <FormTextarea
                  labelName={"İçerik"}
                  id={"contentInput"}
                  onChange={handleChange}
                  name="body"
                  value={props.blog.body}
                ></FormTextarea>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <Button
                onClick={props.handleClick}
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

export default BaseModal;
