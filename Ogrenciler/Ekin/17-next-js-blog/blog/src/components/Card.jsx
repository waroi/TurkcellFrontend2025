"use client";

import { useState, useEffect } from "react";
import { getUser } from "@/services/firebase";

export default function Card({ blog }) {
  const [user, setUser] = useState({
    name: "",
    profile:
      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  });

  useEffect(() => {
    if (blog.author) getUser(blog.author).then(setUser);
  }, []);

  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4 pe-0 pe-md-3">
          <img
            src={blog.image}
            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            alt={blog.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title mb-3">{blog.title}</h5>
            <p className="cart-text mb-3">
              <img
                src={user.profile}
                className="rounded-circle object-fit-cover me-2"
              />
              {user.name}
            </p>
            <p className="card-text mb-3">{blog.description}</p>
            <div className="mb-3">
              <a href={`blog/${blog.id}`} className="btn btn-primary">
                Read More
              </a>
            </div>
            <p className="card-text">
              <small className="text-body-secondary">
                Last Updated:
                {" " +
                  new Date(blog.date).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
