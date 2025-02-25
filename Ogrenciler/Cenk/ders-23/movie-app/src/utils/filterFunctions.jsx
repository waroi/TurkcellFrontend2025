import MovieService from "../services/MovieService";

export default class FilterMovies {
  static searchByName = async (query) => {
    try {
      const lowerQuery = query.toLowerCase();
      //   const movies = await MovieService.getAllMovies();
    } catch (error) {
      console.log("Error fetching Movies:", error.message);
    }
  };
}
