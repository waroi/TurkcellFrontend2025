"use client";

import { useRef } from "react";

import Layout from "@/components/Layout";

import useAuth from "@/hooks/useAuth";

import Input from "@/components/Input";
import FileInput from "@/components/FileInput";
import Button from "@/components/Button";

export default function Add() {
  const { register } = useAuth();

  const name = useRef();
  const profile = useRef();
  const email = useRef();
  const password = useRef();

  return (
    <Layout active="register">
      <div className="container pt-5">
        <Input ref={name} name="Name" type="text" />
        <FileInput ref={profile} name="Profile Picture" />
        <Input ref={email} name="Email" type="email" />
        <Input ref={password} name="Password" type="password" />
        <Button
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
        </Button>
      </div>
    </Layout>
  );
}
