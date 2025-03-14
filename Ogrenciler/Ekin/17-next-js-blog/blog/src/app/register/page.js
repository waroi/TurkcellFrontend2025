"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import useBlog from "@/blogs";
import { register as registerFirebase } from "@/firebase";
import Layout from "@/components/Layout";

export default function Add() {
  const router = useRouter();
  const blogState = useBlog();

  const name = useRef();
  const profile = useRef();
  const user = useRef();
  const password = useRef();

  function register() {
    convertBase64(profile.current.files[0]).then((profile) => {
      registerFirebase(
        user.current.value,
        password.current.value,
        name.current.value,
        profile
      ).then((user) => {
        blogState.setUser(user);
        localStorage.setItem("user", user);
        router.push("/");
      });
    });

    function convertBase64(file) {
      if (file)
        return new Promise((resolve, reader) => {
          reader = new FileReader();

          reader.onloadend = () => {
            resolve(reader.result);
          };

          reader.readAsDataURL(file);
        });
      return new Promise((resolve) => {
        resolve(
          "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
        );
      });
    }
  }

  return (
    <Layout active="register">
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          ref={name}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="profile">
          Profile Picture
        </label>
        <input
          type="file"
          className="form-control py-3"
          id="profile"
          accept="image/*"
          ref={profile}
        />
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="user"
          placeholder="User"
          ref={user}
        />
        <label htmlFor="user">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ref={password}
        />
        <label htmlFor="password">Password</label>
      </div>
      <button className="btn btn-primary" onClick={register}>
        Register
      </button>
    </Layout>
  );
}
