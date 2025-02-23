const API_URL = "http://localhost:3000/blog";

export async function getBlogs() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    if (response.ok) {
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
      body: JSON.stringify({
        ...blog,
        id: Date.now().toString(),
      }),
    });
    const data = await response.json();
    console.log("data:", data);
    if (response.ok) {
      return data;
    }
  } catch (error) {
    console.log("Request Model Error: ", error);
    return null;
  }
}

export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/blog/${id}`, {
      method: "DELETE",
    });
    const responseData = await response.json();
    return response;
  } catch (error) {
    console.error("Silme isteği başarısız oldu:", error);
    return null;
  }
};

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
