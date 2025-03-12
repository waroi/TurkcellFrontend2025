const URL = "http://localhost:5000";

export function getBlogs() {
  return fetch(`${URL}/blogs`).then((response) => response.json());
}

export function getBlog(id) {
  return fetch(`${URL}/blogs/${id}`).then((response) => response.json());
}

export function addBlog(blog) {
  return fetch(`${URL}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
}

export function editBlog(blog) {
  return fetch(`${URL}/blogs/${blog.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  });
}

export function deleteBlog(id) {
  return fetch(`${URL}/blogs/${id}`, {
    method: "DELETE",
  });
}
