import React, { useState, useEffect } from "react";



const url = "http://localhost:3005/blog";

const RequestModel = () => {
  const [blogs, setBlogs] = useState([]);

  const getData = () => {
    try {
      const response = fetch(url);
      const bodyData = response.json();
      return bodyData;
    } catch (error) {
      return console.error(error);
    }
  };

  const postData = ( data) => {
    try {
      const response = fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const bodyData = response.json();
      return bodyData;
    } catch (error) {
      return console.error(error);
    }
  };

  const updateData = ( data) => {
    try {
      const response = fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const bodyData = response.json();
      return bodyData;
    } catch (error) {
      return console.error(error);
    }
  };

  const deleteData = () => {
    try {
      const response = fetch(url, {
        method: "DELETE",
      });
      if (response.status === 200) {
        console.log("Silme işlemi başarılı");
      } else {
        console.error("Silme işlemi başarısız");
      }
    } catch (error) {
      return console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [blogs]);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.blogID}>
          <h3>
            <span>{blog.blogID}</span> {blog.blogTitle}
          </h3>
          <p>{blog.blogContent}</p>
        </div>
      ))}
    </div>
  );
};

export default RequestModel;
