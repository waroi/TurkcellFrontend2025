const headers = {
    accept: "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTIxMTY4YjQxMGZjOTYwY2M3Yjk3MWJhYWEyY2Q1ZSIsIm5iZiI6MTcyNDA1MjA4Mi40ODYsInN1YiI6IjY2YzJmMjcyNjNkMjg4NzA5ZGEyOGY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfcDK95-SIr-vwG6UT-yafyB7-mBOvzF5rT_EbtgKak",
};

export const searchMovies = async (movieName, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=tr-TR&page=${page}`;
    const options = {
        method: "GET",
        headers,
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const moviesWithActors = await Promise.all(
            data.results.map(async (movie) => {
                const actors = await getActors(movie.id);
                return { ...movie, actors };
            })
        );
        return moviesWithActors;
    } catch (err) {
        return console.error(err);
    }
};

export const getActors = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=tr-TR`;
    const options = {
        method: "GET",
        headers,
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        data.cast.sort((a, b) => b.popularity - a.popularity);
        return data.cast.slice(0, 5);
    } catch (err) {
        return console.error(err);
    }
};

export const searchActors = async (actorName) => {
    const actorUrl = `https://api.themoviedb.org/3/search/person?query=${actorName}&include_adult=false&language=en-US&page=1`;
    const actorOptions = {
        method: "GET",
        headers,
    };

    try {
        const response = await fetch(actorUrl, actorOptions);
        const data = await response.json();
        const actorsWithMovies = await Promise.all(
            data.results.map(async (actor) => {
                const movies = await getMoviesByPersonId(actor.id);
                return { ...actor, movies };
            })
        );
        return actorsWithMovies;
    } catch (err) {
        return console.error(err);
    }
};

export const getMoviesByPersonId = async (personId) => {
    const url = `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=tr-TR`;
    const options = {
        method: "GET",
        headers,
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.cast;
    } catch (err) {
        return console.error(err);
    }
};