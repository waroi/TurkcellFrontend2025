"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { myLoader } from "@/utils/functions";

function Page({ blog }) {
  return (
    <div className="container mt-4">
      <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-md-4">
            <Image
              src={"/noImage.png"}
              height={50}
              width={150}
              className="rounded card-img-top img-fluid w-100 h-100"
              alt={`${blog?.title} Adlı Resim`}
              loader={() => myLoader(blog?.poster)}
              priority
            />
          </div>
          <div className="col-md-8">
            <div className="card-body d-flex flex-column h-100 ">
              <h5 className="card-title">{blog?.title}</h5>
              <p className="card-text">{blog?.content}</p>
              <p className="card-text justify-self-end">
                <small className="text-body-secondary">
                  Yazar: {blog?.author} |{" "}
                  {blog.data && new Date(blog?.date).toLocaleDateString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
