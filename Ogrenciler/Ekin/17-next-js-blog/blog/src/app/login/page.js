"use client";

import { useRef } from "react";

import Layout from "@/components/Layout";

import useAuth from "@/hooks/useAuth";

import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Add() {
  const { login } = useAuth();

  const email = useRef();
  const password = useRef();

  return (
    <Layout active="login">
      <div className="container pt-5">
        <Input ref={email} name="Email" type="text" />
        <Input ref={password} name="Password" type="password" />
        <Button
          onClick={() => login(email.current.value, password.current.value)}
        >
          Login
        </Button>
      </div>
    </Layout>
  );
}
