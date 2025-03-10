const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = 'a17d098aa83662acc470d974bf21e392';
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTdkMDk4YWE4MzY2MmFjYzQ3MGQ5NzRiZjIxZTM5MiIsIm5iZiI6MTc0MDQxOTkxNC45NDksInN1YiI6IjY3YmNiMzRhMmFmOTcyZDJkOGE0Nzk2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._F_c6JhgjYb8c3EG2tSHOe4mzluAVijL8sCz5fwcK0M";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${API_TOKEN}`,
};

export const fetchMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular`, {
      method: "GET",
      headers,
    });
    if (!response.ok) throw new Error("Film verileri alınamadı.");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const fetchActors = async () => {
  try {
    const response = await fetch(`${BASE_URL}/person/popular`, {
      method: "GET",
      headers,
    });
    if (!response.ok) throw new Error("Oyuncu verileri alınamadı.");
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  if (!response.ok) {
    throw new Error("Filmleri ararken hata oluştu!");
  }
  return response.json();
};

export const searchActors = async (query) => {
  const response = await fetch(`${BASE_URL}/search/person?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data;
};