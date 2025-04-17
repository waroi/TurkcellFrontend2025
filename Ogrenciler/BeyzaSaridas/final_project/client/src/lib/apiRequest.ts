import { getCurrentUser } from "./firebase";

const API_BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const user = getCurrentUser();
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${API_BASE_URL}${endpoint}`;

  const headers = new Headers(options.headers || {});

  if (user) {
    const token = await user.getIdToken();
    headers.append("Authorization", `Bearer ${token}`);
  }

  headers.append("Content-Type", "application/json");

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Hatası (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export default apiRequest;
