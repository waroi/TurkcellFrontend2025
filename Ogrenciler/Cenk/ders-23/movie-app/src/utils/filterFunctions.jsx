import MovieService from '../services/MovieService';

export class filterMovies {
	static searchByName = async (query) => {
    try {
		const lowerQuery = query.toLowerCase();
		const Movies = await MovieService.getAllMovies();
		return Movies.filter((Movie) => Movie.name.toLowerCase().includes(lowerQuery));
      
    } catch (error) {
      console.log("Error fetching Movies:", error.message);      
    }
	};
}
