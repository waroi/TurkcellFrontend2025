"use client";

import { useRef, useEffect } from "react";

import Layout from "@/components/Layout";

import useAuth from "@/hooks/useAuth";

import Input from "@/components/Input";
import FileInput from "@/components/FileInput";
import Button from "@/components/Button";

export default function Add() {
  const { setUser } = useAuth();

  const name = useRef();
  const profile = useRef();

  useEffect(() => {
    name.current.value = JSON.parse(localStorage.getItem("user")).name;
  }, []);

  return (
    <Layout active="register">
      <div className="container pt-5">
        <Input ref={name} name="Name" type="text" />
        <FileInput ref={profile} name="New Profile Picture" />
        <Button
          onClick={() => setUser(name.current.value, profile.current.files[0])}
        >
          Save Changes
        </Button>
      </div>
    </Layout>
  );
}
