function LocalStorage() {
    this.movies = JSON.parse(localStorage.getItem("movies")) || [];
}

LocalStorage.prototype.addStorage = function (movie) {
    this.movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(this.movies));
};

LocalStorage.prototype.removeFromStorage = function (index) {
    this.movies.splice(index, 1)
    localStorage.setItem("movies", JSON.stringify(this.movies));
}

LocalStorage.prototype.updateStorage = function (movie, index) {
    this.movies.forEach(element => {
        if (element.id === movie.id) {
            this.movies[index] = movie
        }
    });
    localStorage.setItem('movies', JSON.stringify(this.movies))
}
