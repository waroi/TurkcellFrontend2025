import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Blog Sayfası</h1>
      {children}
    </div>
  );
};

export default Layout;
