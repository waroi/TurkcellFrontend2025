import Storage from "./storage.js";
import Movie from "./movie.js";
import Card from "./card.js";
const local_storage = new Storage();

const ekle_button = document.getElementById("ekle");
ekle_button.addEventListener("click", ekleFunction);
createFromLocaleHistory();

// const genre_list = [
//   "Action",
//   "Adventure",
//   "Science Fiction",
//   "Horror",
//   "Fantastic",
//   "Comedy",
//   "Romantic",
//   "Animation",
//   "Thriller",
//   "Documentary",
//   "Drama",
//   "Biography",
// ];

let movie_name = document.getElementById("movie-name");
let year = document.getElementById("year");
let genre = document.getElementById("genre");
let creator = document.getElementById("creator");
let Imdb = document.getElementById("imdb");
let url = document.getElementById("url");

function ekleFunction() {
  if (
    movie_name.value !== "" &&
    year.value !== "" &&
    genre.value !== "" &&
    creator.value !== "" &&
    Imdb.value !== "" &&
    url.value !== ""
  ) {
    const movie = new Movie(
      movie_name.value,
      year.value,
      creator.value,
      Imdb.value,
      genre.value,
      url.value
    );
    local_storage.saveMovie(movie);
    for (var element of [movie_name, year, genre, creator, Imdb, url]) {
      console.log(element.value);
      element.value = "";
    }
    createFromLocaleHistory();
  } else {
    alert("Your input is wrong!");
  }
}
function createFromLocaleHistory() {
  const row = document.getElementById("row");
  row.textContent = "";
  let list = local_storage.getMovies();
  for (let i = 0; i < list.length; i++) {
    const card = new Card(list, i, ekle_button, local_storage);
    row.appendChild(card);
    //createElements(row, list, i);
  }
}

// function createElements(row, list, index) {
//   console.log(list);
//   const col = document.createElement("div");
//   col.className = "col-md-6 col-lg-4 p-3";
//   const card = document.createElement("div");
//   card.className = "card overflow-hidden";
//   const teaser = document.createElement("video");
//   teaser.controls = true;
//   const t_source = document.createElement("source");
//   t_source.src = list[index].teaser;
//   t_source.type = "video/mp4";
//   teaser.appendChild(t_source);
//   const body = document.createElement("div");
//   body.className = "card-body";
//   const title = document.createElement("h5");
//   title.title = `${list[index].name}`;
//   let title_text = document.createTextNode(`${list[index].name}`);
//   title.appendChild(title_text);
//   title.className = "card-title";
//   const ul = document.createElement("ul");
//   ul.className = "list-group list-group-flush";
//   const keys = Object.keys(list[index]);
//   console.log(keys);
//   for (let i = 1; i < keys.length - 1; i++) {
//     const li = document.createElement("li");
//     li.className = "list-group-item";
//     var text = document.createTextNode(`${list[index][keys[i]]}`);
//     console.log(keys[i]);
//     li.appendChild(text);
//     ul.appendChild(li);
//   }
//   const btn_container = document.createElement("div");
//   btn_container.className = "text-center my-2";
//   const delete_btn = document.createElement("button");
//   delete_btn.addEventListener("click", function () {
//     // list.splice(index, 1);
//     col.remove();
//     local_storage.deleteMovie(index);
//   });
//   delete_btn.className = "btn btn-danger btn-sm rounded-5 ms-2";
//   const delete_icon = document.createElement("i");
//   delete_icon.className = "fas fa-trash";
//   delete_btn.appendChild(delete_icon);
//   const edit_btn = document.createElement("button");
//   const a = document.createElement("a");
//   a.href = "#header";
//   edit_btn.addEventListener("click", function () {
//     // window.location.hash = "header";
//     let list = JSON.parse(localStorage.getItem("movie_list"));
//     if (index !== -1) {
//       document.getElementById("movie-name").value = list[index].name;
//       document.getElementById("year").value = list[index].year;
//       document.getElementById("genre").value = list[index].genre;
//       document.getElementById("creator").value = list[index].director;
//       document.getElementById("imdb").value = list[index].imdb;
//       document.getElementById("url").value = list[index].teaser;
//       ekle_button.textContent = "Update";
//       ekle_button.replaceWith(ekle_button.cloneNode(true));
//       let new_ekle_button = document.getElementById("ekle");
//       new_ekle_button.addEventListener("click", function () {
//         if (
//           movie_name.value !== "" &&
//           year.value !== "" &&
//           genre.value !== "" &&
//           creator.value !== "" &&
//           Imdb.value !== "" &&
//           url.value !== ""
//         ) {
//           const movie = new Movie(
//             movie_name.value,
//             year.value,
//             creator.value,
//             Imdb.value,
//             genre.value,
//             url.value
//           );
//           local_storage.updateMovie(index, movie);
//           location.reload();
//           for (var element of [movie_name, year, genre, creator, Imdb, url]) {
//             console.log(element.value);
//             element.value = "";
//           }
//         } else {
//           alert("Your input is wrong!");
//         }
//       });
//     }
//   });
//   edit_btn.className = "btn btn-warning btn-sm ms-2  rounded-5";
//   const edit_icon = document.createElement("i");
//   edit_icon.className = "fas fa-edit";
//   a.appendChild(edit_icon);
//   edit_btn.appendChild(a);

//   btn_container.appendChild(edit_btn);
//   btn_container.appendChild(delete_btn);
//   row.appendChild(col);
//   col.appendChild(card);
//   card.appendChild(teaser);
//   card.appendChild(body);
//   body.appendChild(title);
//   card.appendChild(ul);
//   card.appendChild(btn_container);
// }
