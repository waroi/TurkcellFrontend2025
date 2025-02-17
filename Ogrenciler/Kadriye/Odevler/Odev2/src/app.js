import JsonServiceApi from "./services/jsonSeviceApi.js";
import Card from "./ui/card.js";
import Game from "./ui/game.js";
import Modal from "./ui/modal.js";
// new Modal().addModal();
document.querySelectorAll("input").forEach((i) => (i.value = ""));
document.querySelector("option").selected = true;
let category = document.getElementById("category");
let release_start = document.getElementById("releaseDateStart");
let release_end = document.getElementById("releaseDateEnd");
const name = document.querySelector("#name");
const genres = document.querySelector("#genres");
const release = document.querySelector("#release");
const img_url = document.querySelector("#img-url");
const company = document.querySelector("#company");
const stream_url = document.querySelector("#stream-url");
const info = document.querySelector("#info");
const inputs = [name, genres, release, img_url, company, stream_url, info];
document.querySelector("#save").addEventListener("click", () => {
  if (inputCheck(inputs)) {
    JsonServiceApi.post(
      new Game(
        name.value,
        genres.value,
        release.value,
        img_url.value,
        company.value,
        stream_url.value,
        info.value
      )
    );
    clearInput(inputs);
  } else {
    alert("You cannot enter empty input!");
  }
});
document.getElementById("search").addEventListener("click", () => {
  let input_value = document.getElementById("searchInput").value;
  if (input_value != "") {
    JsonServiceApi.search(input_value)
      .then((data) => {
        console.log(data);
        renderGames(data);
      })
      .catch((err) => console.log(err));
  }
});
document.getElementById("clear").addEventListener("click", () => {
  category.value = "";
  release_start = "";
  release_end = "";
  JsonServiceApi.getGames()
    .then((data) => {
      console.log(data);
      renderGames(data);
    })
    .catch((err) => console.log(err));
});
document.getElementById("apply").addEventListener("click", () => {
  JsonServiceApi.applyFilters(
    category.value,
    release_start.value,
    release_end.value
  )
    .then((data) => {
      console.log(data);
      renderGames(data);
    })
    .catch((err) => console.log(err));
});
document.getElementById("order").addEventListener("change", (event) => {
  JsonServiceApi.sort(event.target.value)
    .then((data) => {
      console.log(data);
      renderGames(data);
    })
    .catch((err) => console.log(err));
});
JsonServiceApi.getGames()
  .then((data) => {
    console.log(data);
    renderGames(data);
  })
  .catch((err) => console.log(err));

function renderGames(data) {
  const card_row = document.querySelector("#card-row");
  card_row.textContent = "";
  data.map((game) => card_row.append(new Card(game).createCard()));
}
function inputCheck(inputs) {
  let bool = true;
  inputs.forEach((input) => {
    if (input.value.trim() == "") {
      bool = false;
    }
  });
  return bool;
}
function clearInput(inputs) {
  inputs.map((input) => (input.value = ""));
}
