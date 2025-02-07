const ekle_button = document.getElementById("ekle");
ekle_button.addEventListener("click", ekleFunction);
const tur_list = [
  "Aksiyon",
  "Macera",
  "Bilim-Kurgu",
  "Korku",
  "Fantastik",
  "Komedi",
  "Romantik",
  "Animasyon",
  "Gerilim",
  "Belgesel",
  "Drama",
  "Biyografi",
];
let list = JSON.parse(localStorage.getItem("movie_list"));
if (list == null) {
  localStorage.setItem("movie_list", JSON.stringify([]));
}
console.log(list);
createFromLocaleHistory();
const movie_list = [];
function ekleFunction() {
  let movie_name = document.getElementById("movie-name");
  let year = document.getElementById("year");
  let genre = document.getElementById("genre");
  let creator = document.getElementById("creator");
  let Imdb = document.getElementById("imdb");
  let url = document.getElementById("url");
  let list = JSON.parse(localStorage.getItem("movie_list"));
  if (
    movie_name.value !== "" &&
    year.value !== "" &&
    genre.value !== "" &&
    creator.value !== "" &&
    Imdb.value !== "" &&
    url.value !== ""
  ) {
    list.push([
      movie_name.value,
      year.value,
      genre.value,
      creator.value,
      Imdb.value,
      url.value,
    ]);
    localStorage.setItem("movie_list", JSON.stringify(list));
    for (var element of [movie_name, year, genre, creator, Imdb, url]) {
      console.log(element.value);
      element.value = "";
    }
    createCard();
  } else {
    alert("Lütfen girilen bilgileri kontrol ediniz!");
  }

  //   for (var element of [movie_name, year, genre, creator, Imdb, url]) {
  //     if (element == "") {
  //
  //     } else {
  //     }
  //   }
}

function createCard() {
  let list = JSON.parse(localStorage.getItem("movie_list"));
  createElements(list, list.length - 1);
}
function createElements(list, item) {
  const row = document.getElementById("row");
  console.log(list);
  const col = document.createElement("div");
  col.className = "col-md-6 col-lg-4";
  const card = document.createElement("div");
  card.className = "card";
  //const teaser = document.createElement("iframe");
  //   teaser.src = list[item][5];
  //   teaser.height = "200";
  //   teaser.frameBorder = "0";
  //   teaser.allowFullscreen = true;
  const teaser = document.createElement("video");
  teaser.controls = true;
  const t_source = document.createElement("source");
  t_source.src = list[item][5];
  t_source.type = "video/mp4";
  teaser.appendChild(t_source);
  const body = document.createElement("div");
  body.className = "card-body";
  const title = document.createElement("h5");
  let title_text = document.createTextNode(`${list[item][0]}`);
  title.appendChild(title_text);
  title.className = "card-title";
  const ul = document.createElement("ul");
  ul.className = "list-group list-group-flush";
  for (let i = 1; i < 5; i++) {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const text = document.createTextNode(`${list[item][i]}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
  const btn_container = document.createElement("div");
  const delete_btn = document.createElement("button");
  delete_btn.addEventListener("click", function () {
    col.remove();
  });
  delete_btn.className = "btn btn-danger btn-sm rounded-5";
  const delete_icon = document.createElement("i");
  delete_icon.className = "fas fa-trash";
  delete_btn.appendChild(delete_icon);
  const edit_btn = document.createElement("button");
  edit_btn.className = "btn btn-warning btn-sm ms-2  rounded-5";
  const edit_icon = document.createElement("i");
  edit_icon.className = "fas fa-edit";
  edit_btn.appendChild(edit_icon);
  const complete_btn = document.createElement("button");
  complete_btn.className = "btn btn-success btn-sm ms-2 rounded-5";
  const complete_icon = document.createElement("i");
  complete_icon.className = "fas fa-check";
  complete_btn.appendChild(complete_icon);
  btn_container.appendChild(delete_btn);
  btn_container.appendChild(edit_btn);
  btn_container.appendChild(complete_btn);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(teaser);
  card.appendChild(body);
  body.appendChild(title);
  card.appendChild(ul);
  card.appendChild(btn_container);
}
function createFromLocaleHistory() {
  let list = JSON.parse(localStorage.getItem("movie_list"));
  if (list !== null) {
    for (let i = 0; i < list.length; i++) {
      createElements(list, i);
    }
  }
}

//----------------------------------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//   const ekle_button = document.getElementById("ekle");
//   ekle_button.addEventListener("click", ekleFunction);
//   let movie_list = JSON.parse(localStorage.getItem("movie_list")) || [];
//   function ekleFunction() {
//     let movie_name = document.getElementById("movie-name").value;
//     let year = document.getElementById("year").value;
//     let genre = document.getElementById("genre").value;
//     let creator = document.getElementById("creator").value;
//     let imdb = document.getElementById("imdb").value;
//     let url = document.getElementById("url").value;
//     if (!movie_name || !year || !genre || !creator || !imdb || !url) {
//       alert("Lütfen tüm alanları doldurun!");
//       return;
//     }
//     // Yeni filmi listeye ekle
//     movie_list.push([movie_name, year, genre, creator, imdb, url]);
//     localStorage.setItem("movie_list", JSON.stringify(movie_list));
//     createCard(movie_list.length - 1);
//   }
//   function createCard(index) {
//     let list = JSON.parse(localStorage.getItem("movie_list")) || [];
//     if (list.length === 0) return;
//     const row = document.getElementById("row");
//     const col = document.createElement("div");
//     col.className = "col-md-6 col-lg-4";
//     const card = document.createElement("div");
//     card.className = "card";
//     const teaser = document.createElement("iframe");
//     teaser.src = list[index][5];
//     teaser.width = "100%";
//     teaser.height = "200";
//     teaser.frameBorder = "0";
//     teaser.allowFullscreen = true;
//     const body = document.createElement("div");
//     body.className = "card-body";
//     const title = document.createElement("h5");
//     title.className = "card-title";
//     title.textContent = list[index][0];
//     const ul = document.createElement("ul");
//     ul.className = "list-group list-group-flush";
//     for (let i = 1; i < 5; i++) {
//       const li = document.createElement("li");
//       li.className = "list-group-item";
//       li.textContent = list[index][i];
//       ul.appendChild(li);
//     }
//     row.appendChild(col);
//     col.appendChild(card);
//     card.appendChild(teaser);
//     card.appendChild(body);
//     body.appendChild(title);
//     card.appendChild(ul);
//   }
//   // Sayfa yüklendiğinde mevcut verileri göster
//   movielist.forEach((index) => createCard(index));
// });
