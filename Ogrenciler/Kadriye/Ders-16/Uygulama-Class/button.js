import Storage from "./storage.js";
import Movie from "./movie.js";
import Card from "./card.js";
export default class Button {
  constructor() {
    this.local_storage = new Storage();
    this.ekle_button = document.getElementById("ekle");
    this.ekle_button.addEventListener("click", () => this.ekleFunction());
    this.genre_list = [
      "Action",
      "Adventure",
      "Science Fiction",
      "Horror",
      "Fantastic",
      "Comedy",
      "Romantic",
      "Animation",
      "Thriller",
      "Documentary",
      "Drama",
      "Biography",
    ];
    this.movie_name = document.getElementById("movie-name");
    this.year = document.getElementById("year");
    this.genre = document.getElementById("genre");
    this.creator = document.getElementById("creator");
    this.Imdb = document.getElementById("imdb");
    this.url = document.getElementById("url");
    this.createFromLocaleHistory();
  }
  ekleFunction() {
    if (
      this.movie_name.value !== "" &&
      this.year.value !== "" &&
      this.genre.value !== "" &&
      this.creator.value !== "" &&
      this.Imdb.value !== "" &&
      this.url.value !== ""
    ) {
      const movie = new Movie(
        this.movie_name.value,
        this.year.value,
        this.creator.value,
        this.Imdb.value,
        this.genre.value,
        this.url.value
      );
      this.local_storage.saveMovie(movie);
      this.createElements(movie, this.local_storage.getMovies().length - 1);
      for (let element of [
        this.movie_name,
        this.year,
        this.genre,
        this.creator,
        this.Imdb,
        this.url,
      ]) {
        element.value = "";
      }
    } else {
      alert("Your input is wrong!");
    }
  }
  createFromLocaleHistory() {
    let list = this.local_storage.getMovies();
    for (let i = 0; i < list.length; i++) {
      this.createElements(list[i], i);
    }
  }
  createElements(movie, index) {
    const card = new Card(
      movie,
      index,
      this.local_storage.getMovies(),
      this.genre_list,
      this.local_storage
    );
    card.createCard();
  }
}

// class Button {
//   constructor(text, cssClass) {
//     this.button = document.createElement("button");
//     textNode = document.createTextNode(text);
//     this.button.appendChild(textNode);
//     this.button.className = cssClass;

//     // if (text == "edit") {
//     //     this.button.addEventListener("click", function(){
//     //         console.log("Edit");
//     //     } );
//     // }
//     // else if(text == "update"){
//     //     this.button.addEventListener("click", function(){
//     //         console.log("Update");
//     //     } );
//     // }
//     // else{
//     //     this.button.addEventListener("click", function(){
//     //         console.log("Delete");
//     //     } );
//     // }
//   }
// }
