const api_key = import.meta.env.VITE_API_KEY;

async function getAllFilms() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Film bulunamadi");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`getAllFilms API çağrısı başarisiz! ${error}`);
  }
}
async function getFilm() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/950396/credits`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Film bulunamadi");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(`getFilm API çağrısı başarisiz! ${error}`);
  }
}
export { getAllFilms, getFilm };
