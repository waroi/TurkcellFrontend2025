import React from "react";
import { Outlet } from "react-router";

const NewView = () => {
  return (
    <>
      <h2>Haberler</h2>
      <Outlet />
    </>
  );
};

export default NewView;
