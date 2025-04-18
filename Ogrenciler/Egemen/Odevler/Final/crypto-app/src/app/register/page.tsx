import React from "react";
import RegisterContent from "../pages/registerRockie/components/organism/registerContent/RegisterContent";
import Calltoaction from "../pages/homePage/components/organisms/calltoaction/Calltoaction";
import Breadcrumb from "../pages/registerRockie/components/organism/breadcrumb/Breadcrumb";

const Register = () => {
  return (
    <>
      <Breadcrumb header={"Register"} />
      <RegisterContent />
      <Calltoaction />
    </>
  );
};

export default Register;
