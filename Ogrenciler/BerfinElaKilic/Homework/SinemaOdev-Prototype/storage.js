function Storage() {}

Storage.prototype.getMovies = function () {
    let movies = JSON.parse(localStorage.getItem("movieArray")) || [];
    return [...movies];
};

Storage.prototype.setMovies = function(name, object){   
  localStorage.setItem(name, JSON.stringify(object));
}