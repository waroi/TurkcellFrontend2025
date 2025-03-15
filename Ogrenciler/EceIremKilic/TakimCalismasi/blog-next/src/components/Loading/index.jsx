import React from "react";

const Loading = () => {
  return (
    <div className="container py-5" id="posts">
      <h2 className="my-5">Bloglar Yükleniyor...</h2>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
