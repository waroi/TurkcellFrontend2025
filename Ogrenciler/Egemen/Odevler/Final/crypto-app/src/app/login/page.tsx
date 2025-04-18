import React from "react";
import Breadcrumb from "../pages/registerRockie/components/organism/breadcrumb/Breadcrumb";
import LoginPage from "../pages/loginPage/LoginPage";

const Login = () => {
  return (
    <>
      <Breadcrumb header={"Login"} />

      <LoginPage />
    </>
  );
};

export default Login;
