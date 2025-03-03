import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router";

const HomeView = ({ news }) => {
  return (
    <div className="container py-5">
      <Outlet />
    </div>
  );
};

export default HomeView;
