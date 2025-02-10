function Storage () {}

Storage.prototype.addFilmStorage = function(film) {
    let films = JSON.parse(localStorage.getItem("films"));
    films.unshift(film);
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.deleteFilmStorage = function(index){
    let films = JSON.parse(localStorage.getItem("films"));
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
}