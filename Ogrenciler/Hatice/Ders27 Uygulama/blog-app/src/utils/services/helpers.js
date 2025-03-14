import apiFetch from "./service";
export async function getBlog(id) {
  const response = await apiFetch(`/blogs/${id}`);

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return null;
  }

  return await response.json();
}
