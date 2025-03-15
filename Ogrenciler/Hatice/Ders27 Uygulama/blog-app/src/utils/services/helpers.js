import apiFetch from "./service";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export const logout = async () => {
  toast.success("Çıkış Yapılıyor");
  await signOut(auth);
  setTimeout(() => {
    redirect("/login");
  }, 2000);
};

export async function getBlogs() {
  const response = await apiFetch(`/blogs`);

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return response.statusText;
  }

  return await response.json();
}

export async function getBlog(id) {
  const response = await apiFetch(`/blogs/${id}`);

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return response.statusText;
  }

  return await response.json();
}

export async function deleteBlog(id) {
  const response = await apiFetch(`/blogs/${id}`, { method: "DELETE" });

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    return response.statusText;
  }

  return await response.json();
}

export async function addBlog(data) {
  const response = await apiFetch(`/blogs`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("API Error:", response.status, response.statusText);
    toast.error("Blog eklenirken bir hata oluştu");
    return response.statusText;
  }

  return await response.json();
}
