const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzQwODYyYzUyNmZiMGM4NjY2NzViMWE3NzNkNjljNCIsIm5iZiI6MTc0MDQxNzYzNi44NzAwMDAxLCJzdWIiOiI2N2JjYWE2NDEyYmZjODViYzM2YmQ3NDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.QA5o2BX3MaygLixSycU1ziJ_5y4NA7VitYSFOcqFQVk",
  },
};

export const getPerson = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
export const getMovie = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
