import React from "react";
import Card from "./Card/index";

const Blog = () => {
  return (
    <>
      <section className="bg-secondary">
        <h2 className="text-center text-white pt-3">Yaz Tatili</h2>
        <div className="container p-3">
          <div className="row  justify-content-around  gap-1">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <h2 className="text-center text-white pt-3">Yaz Tatili</h2>
        <div className="container p-3">
          <div className="row  justify-content-around  gap-1">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
