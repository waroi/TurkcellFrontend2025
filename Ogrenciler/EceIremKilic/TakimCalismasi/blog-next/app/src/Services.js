const baseUrl = "http://localhost:3000/posts";
const getPosts = async () => {
  const posts = await fetch(`${baseUrl}`);
  return posts.json();
};
const getPostById = async (id) => {
  const post = await fetch(`${baseUrl}/${id}`);
  return post.json();
};
const addPost = async (newPerson) => {
  const posts = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPerson),
  });
  return posts.json();
};
const editPost = async (id, updatedPerson) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPerson),
  });
  return response.json();
};

const deletePost = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
export default {
  getPosts,
  getPostById,
  editPost,
  deletePost,
  addPost,
};
