function Movie(name, year, poster, director, type) {
    this.name = name
    this.year = year
    this.poster = poster
    this.director = director
    this.type = type
    this.id = Math.random() * 50
}