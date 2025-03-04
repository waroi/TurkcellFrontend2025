const URL = "http://localhost:3000";

export async function getLibrary() {
  return await fetch(`${URL}/library`).then((response) => response.json());
}
