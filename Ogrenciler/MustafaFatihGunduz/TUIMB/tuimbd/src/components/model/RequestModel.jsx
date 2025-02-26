const moviesUrl = "https://api.themoviedb.org/3/movie/popular?page=1";
const searchMultiUrl = "https://api.themoviedb.org/3/search/multi";

// const url = "https://api.themoviedb.org/3/person"; 
// const listActorMoviesUrl =
//   "https://api.themoviedb.org/3/person/personid/movie_credits";

export const getMovies = async () => {
  try {
    const response = await fetch(moviesUrl, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTNjZGUxNjkxMmVmZTZlNmYxNzIyNzk0NTdmNTYzZSIsIm5iZiI6MTc0MDQxNzI4MC4zNDcwMDAxLCJzdWIiOiI2N2JjYTkwMDIzZmUxMTdlZTZhNDc1YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KPLMOwUUnffO49XiMXeMwx5F5vV2YiRXOvLeB34vXPA",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("GetMovies Error: ", error);
  }
};

export const searchMovieActor = async (search) => {
  try {
    const response = await fetch(`${searchMultiUrl}?query=${search}&page=1`, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTNjZGUxNjkxMmVmZTZlNmYxNzIyNzk0NTdmNTYzZSIsIm5iZiI6MTc0MDQxNzI4MC4zNDcwMDAxLCJzdWIiOiI2N2JjYTkwMDIzZmUxMTdlZTZhNDc1YzIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KPLMOwUUnffO49XiMXeMwx5F5vV2YiRXOvLeB34vXPA",
      },
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("SearchMovieActor Error: ", error);
  }
};
