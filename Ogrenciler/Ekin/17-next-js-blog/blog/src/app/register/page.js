"use client";

import { useRef } from "react";

import Layout from "@/components/Layout";

import useAuth from "@/hooks/useAuth";

export default function Add() {
  const { register } = useAuth();

  const name = useRef();
  const profile = useRef();
  const email = useRef();
  const password = useRef();

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
          id="email"
          placeholder="Email"
          ref={email}
        />
        <label htmlFor="email">Email</label>
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
      <button
        className="btn btn-primary"
        onClick={() =>
          register(
            email.current.value,
            password.current.value,
            name.current.value,
            profile.current.files[0]
          )
        }
      >
        Register
      </button>
    </Layout>
  );
}
