"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { myLoader } from "@/utils/functions";

// export const metadata: Metadata = {
//   title: 'Gökten düşen blog tanesi',
// };

function Page({ params }) {
  const { id } = React.use(params);
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    const response = await fetch(`http://localhost:8000/blogs/${id}`);
    console.log(response);

    if (!response.ok) {
      console.log("response", response, response?.statusText);
      return;
    }
    const data = await response.json();
    console.log(data);
    setBlog(data);
  };

  useEffect(() => {
    fetchBlog();
    console.log("hello");
  }, []);

  return id !== undefined ? (
    blog && (
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
                    Yazar: {blog.author} |{" "}
                    {new Date(blog.date).toLocaleDateString()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  ) : (
    <p> Geçerli bir blog id bulunamadı.</p>
  );
}
export default Page;
