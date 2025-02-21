import { API_BASE_URL } from "../constants/constants";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error("Veri çekme başarısız oldu.");
    }
    return await response.json();
  } catch (error) {
    console.error("API Hatası:", error);
    throw error;
  }
};
