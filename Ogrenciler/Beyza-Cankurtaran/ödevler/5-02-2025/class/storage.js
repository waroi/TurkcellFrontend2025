//addFilmStorage()
//deletefilmStorgae
//filmJSONToStorage()
class Storage {
    addFilmStorage(film) {
        let films = JSON.parse(localStorage.getItem("films")) || [];
        films.unshift(film);
        localStorage.setItem("films", JSON.stringify(films));
    }
    deleteFilmStorage(index) {
        let films = JSON.parse(localStorage.getItem("films")) || [];
        films.splice(index, 1);
        localStorage.setItem("films", JSON.stringify(films));
    }
    updateFilmStorage(index, updatedFilm) {
        let films = JSON.parse(localStorage.getItem("films")) || [];
        if (index < 0 || index >= films.length) {
            console.error("Geçersiz index:", index);
            return;
        }

        films[index] = updatedFilm;
        localStorage.setItem("films", JSON.stringify(films));
    }


    filmJSONToStorage() {
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
}