const URL = "http://localhost:5000";

export function getBlogs() {
  return fetch(`${URL}/blogs`).then((response) => response.json());
}

export function getBlog(id) {
  return fetch(`${URL}/blogs/${id}`).then((response) => response.json());
}
