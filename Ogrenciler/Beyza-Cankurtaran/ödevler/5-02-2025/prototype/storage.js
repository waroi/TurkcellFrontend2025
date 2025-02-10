function Storage() {}
Storage.prototype.addFilmStorage = function(film) {
    let films = JSON.parse(localStorage.getItem("films")) || [];
    films.unshift(film);
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.deleteFilmStorage = function(index) {
    let films = JSON.parse(localStorage.getItem("films")) || [];
    films.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(films));
}

Storage.prototype.filmJSONtoStorage = function() {
    let films = JSON.parse(localStorage.getItem("films")) || [];

    if (films.length === 0) {
        fetch("./movies.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("JSON dosyası yüklenemedi!");
                }
                return res.json();
            })
            .then((movieJSON) => {
                movieJSON.forEach((movie) => {
                    let filmObj = new movieObj(movie.title, movie.cast[0], movie.year, movie.genres[0], movie.thumbnail);
                    films.push(filmObj);
                });
                localStorage.setItem("films", JSON.stringify(films));
                console.log("Filmler başarıyla kaydedildi:", films);
            })
            .catch((err) => console.error("Hata:", err));
    }
}
