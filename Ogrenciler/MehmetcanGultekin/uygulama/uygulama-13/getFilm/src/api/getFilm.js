const api_key = import.meta.env.VITE_API_KEY;
// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc
async function getAllFilms(page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?&page=${page}`,
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
async function getFilm(id) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
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
    // console.log(data.crew[2].name);
    return data;
  } catch (error) {
    console.error(`getFilm API çağrısı başarisiz! ${error}`);
  }
}

async function getSearchedFilm(movieName, page = 1) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&page=${page}`,
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
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`getSearchedFilm API çağrısı başarisiz! ${error}`);
  }
}
async function getSearchedPersonFilms(moviePerson) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${moviePerson}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${api_key}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Karakter bulunamadi");
    }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(`getSearchedPersonFilms API çağrısı başarisiz! ${error}`);
  }
}

export { getAllFilms, getFilm, getSearchedFilm, getSearchedPersonFilms };
