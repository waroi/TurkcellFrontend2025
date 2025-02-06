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
movie_list = [];

function ekleFunction() {
  let movie_name = document.getElementById("movie-name").value;
  let year = document.getElementById("year").value;
  let genre = document.getElementById("genre").value;
  let creator = document.getElementById("creator").value;
  let Imdb = document.getElementById("imdb").value;
  let url = document.getElementById("url").value;
  movie_list.push([movie_name, year, genre, creator, Imdb, url]);
  localStorage.setItem("movie_list", JSON.stringify(movie_list));
  console.log(movie_list);
}
createCard();
function createCard() {
  let list = JSON.parse(localStorage.getItem("movie_list"));
  const row = document.getElementById("row");
  console.log(list);
  const col = document.createElement("div");
  col.className = ".col-md-6 .col-lg-4";
  const card = document.createElement("div");
  card.className = ".card";
  //   const teaser = document.createElement("iframe");
  //   teaser.src = list[list.length - 1][5];
  //   teaser.width = "640";
  //   teaser.height = "360";
  //   teaser.frameBorder = "0";
  //   teaser.allowFullscreen = true;
  //const t_source = document.createElement("source");
  //t_source.src = "https://youtu.be/H3seCWH1PG8?si=uhxP_DkZVs_ayB8A"; //list[list.length - 1][5];
  //t_source.type = "video/mp4";
  //teaser.appendChild(t_source);
  const body = document.createElement("div");
  body.className = ".card-body";
  const title = document.createElement("h5");
  let title_text = document.createTextNode(`${list[list.length - 1][0]}`);
  title.appendChild(title_text);
  title.className = ".card-title";
  const ul = document.createElement("ul");
  ul.className = ".list-group .list-group-flush";
  for (let i = 1; i < 5; i++) {
    const li = document.createElement("li");
    li.className = ".list-group-item";
    const text = document.createTextNode(`${list[list.length - 1][i]}`);
    li.appendChild(text);
    ul.appendChild(li);
  }
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(teaser);
  card.appendChild(body);
  body.appendChild(title);
  card.appendChild(ul);
}
