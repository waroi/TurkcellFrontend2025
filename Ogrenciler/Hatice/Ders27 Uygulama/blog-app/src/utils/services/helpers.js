import apiFetch from "./service";

export async function getBlog(id) {
  const response = await apiFetch(`/blogs/${id}`);

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return null;
  }

  return await response.json();
}

export async function deleteBlog(id) {
  const response = await apiFetch(`/blogs/${id}`, { method: "DELETE" });

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return null;
  }

  return await response.json();
}
