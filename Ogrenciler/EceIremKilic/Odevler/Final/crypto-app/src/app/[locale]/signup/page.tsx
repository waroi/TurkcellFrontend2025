"use client";
import SignUpPage from "@/pages/SignUp/SignupPage";
import React from "react";
import "@/style/main.scss";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import CreateAccount from "@/components/organisms/CreateAccount/CreateAccount";
import Footer from "@/components/organisms/Footer/Footer";

const page = () => {
  return (
    <>
      <NavbarComponent />
      <SignUpPage />
      <CreateAccount />
      <Footer />
    </>
  );
};

export default page;
