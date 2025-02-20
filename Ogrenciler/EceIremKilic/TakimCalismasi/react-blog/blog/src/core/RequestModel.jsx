const API_URL = "http://localhost:3000/blog";

export async function getBlogs() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (response.ok) {
      console.log("dönen data:", data);
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export async function postBlog(blog) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export async function deleteBlog(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export async function updateBlog(id, blog) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}
