import Movie from "./movie.js";
export default function Card(
  list,
  index,
  ekle_button,
  local_storage,
  movie_name,
  year,
  genre,
  creator,
  Imdb,
  url
) {
  this.list = list;
  this.index = index;
  this.ekle_button = ekle_button;
  this.local_storage = local_storage;
  this.movie_name = movie_name;
  this.year = year;
  this.genre = genre;
  this.creator = creator;
  this.Imdb = Imdb;
  this.url = url;
  this.col = document.createElement("div");
  this.col.className = "col-md-6 col-lg-4 p-3";
  this.card = document.createElement("div");
  this.card.className = "card overflow-hidden";
  this.teaser = document.createElement("video");
  this.teaser.controls = true;
  this.t_source = document.createElement("source");
  this.t_source.src = this.list[this.index].teaser;
  this.t_source.type = "video/mp4";
  this.teaser.appendChild(this.t_source);
  this.body = document.createElement("div");
  this.body.className = "card-body";
  this.title = document.createElement("h5");
  this.title.title = `${this.list[this.index].name}`;
  let title_text = document.createTextNode(`${this.list[this.index].name}`);
  this.title.appendChild(title_text);
  this.title.className = "card-title";
  this.ul = document.createElement("ul");
  this.ul.className = "list-group list-group-flush";
  this.keys = Object.keys(this.list[this.index]);
  for (let i = 1; i < this.keys.length - 1; i++) {
    this.li = document.createElement("li");
    this.li.className = "list-group-item";
    var text = document.createTextNode(
      `${this.list[this.index][this.keys[i]]}`
    );
    this.li.appendChild(text);
    this.ul.appendChild(this.li);
  }
  this.btn_container = document.createElement("div");
  this.btn_container.className = "text-center my-2";
  this.delete_btn = document.createElement("button");
  this.delete_btn.addEventListener("click", this.deleteFunction.bind(this));
  this.delete_btn.className = "btn btn-danger btn-sm rounded-5 ms-2";
  this.delete_icon = document.createElement("i");
  this.delete_icon.className = "fas fa-trash";
  this.delete_btn.appendChild(this.delete_icon);
  this.edit_btn = document.createElement("button");
  this.a = document.createElement("a");
  this.a.href = "#header";
  this.edit_btn.addEventListener("click", this.EditFunction.bind(this));
  this.edit_btn.className = "btn btn-warning btn-sm ms-2  rounded-5";
  this.edit_icon = document.createElement("i");
  this.edit_icon.className = "fas fa-edit";
  this.a.appendChild(this.edit_icon);
  this.edit_btn.appendChild(this.a);
  this.btn_container.appendChild(this.edit_btn);
  this.btn_container.appendChild(this.delete_btn);
  this.col.appendChild(this.card);
  this.card.appendChild(this.teaser);
  this.card.appendChild(this.body);
  this.body.appendChild(this.title);
  this.card.appendChild(this.ul);
  this.card.appendChild(this.btn_container);
  return this.col;
}
Card.prototype.deleteFunction = function () {
  this.col.remove();
  this.local_storage.deleteMovie(this.index);
};
Card.prototype.EditFunction = function () {
  if (this.index !== -1) {
    document.getElementById("movie-name").value = this.list[this.index].name;
    document.getElementById("year").value = this.list[this.index].year;
    document.getElementById("genre").value = this.list[this.index].genre;
    document.getElementById("creator").value = this.list[this.index].director;
    document.getElementById("imdb").value = this.list[this.index].imdb;
    document.getElementById("url").value = this.list[this.index].teaser;
    this.ekle_button.textContent = "Update";
    let new_ekle_button = this.ekle_button.cloneNode(true);
    this.ekle_button.replaceWith(new_ekle_button);
    new_ekle_button.addEventListener(
      "click",
      function () {
        if (
          this.movie_name.value !== "" &&
          this.year.value !== "" &&
          this.genre.value !== "" &&
          this.creator.value !== "" &&
          this.Imdb.value !== "" &&
          this.url.value !== ""
        ) {
          this.movie = new Movie(
            this.movie_name.value,
            this.year.value,
            this.creator.value,
            this.Imdb.value,
            this.genre.value,
            this.url.value
          );
          this.local_storage.updateMovie(this.index, this.movie);
          location.reload();
          for (var element of [
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
      }.bind(this)
    );
  }
};
