"use client";

import { useRef } from "react";

import Layout from "@/components/Layout";

import useAuth from "@/hooks/useAuth";

export default function Add() {
  const { login } = useAuth();

  const user = useRef();
  const password = useRef();

  return (
    <Layout active="login">
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
      <button
        className="btn btn-primary"
        onClick={() => login(user.current.value, password.current.value)}
      >
        Login
      </button>
    </Layout>
  );
}
