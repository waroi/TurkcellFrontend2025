import React, { useEffect, useState } from "react";
import { Outlet, NavLink } from "react-router";

const HomeView = () => {
  return (
    <div>
      <h2>Haberler</h2>
      <Outlet />
    </div>
  );
};

export default HomeView;
