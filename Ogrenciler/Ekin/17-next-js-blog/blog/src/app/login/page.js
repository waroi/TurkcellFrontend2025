"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import useBlog from "@/blogs";
import { login as loginFirebase } from "@/firebase";

export default function Add() {
  const router = useRouter();
  const blogState = useBlog();

  const user = useRef();
  const password = useRef();

  function login() {
    loginFirebase(user.current.value, password.current.value).then((user) => {
      blogState.setUser(user);
      localStorage.setItem("user", user);
      router.push("/");
    });
  }

  return (
    <>
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
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </>
  );
}
