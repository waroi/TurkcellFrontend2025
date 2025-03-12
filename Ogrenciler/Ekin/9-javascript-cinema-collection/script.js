const movies = document.querySelector(".movies .container");
const cardFlip = document.querySelector(".card-inner");

const title = document.querySelector("#title");
const director = document.querySelector("#director");
const genre = document.querySelector("#genre");
const year = document.querySelector("#year");
const image = document.querySelector("#image");
const add = document.querySelector("form button");
const description = document.querySelector("#description");

var editCard = false;

JSON.parse(localStorage.getItem("movies") ?? "[]").forEach((movie) =>
  appendMovie(movie)
);

add.addEventListener("click", (event) => {
  event.preventDefault();
  editCard ? editMovie() : addMovie();
});

document.addEventListener("DOMContentLoaded", function() {
  const cardFlip = document.querySelector(".card-inner");
  if (cardFlip) {
    cardFlip.addEventListener("click", function(){
      cardFlip.classList.toggle("is-flipped");
    });
  } else {
    console.error("cardFlip elementi bulunamadı!");
  }
});


function addMovie() {
  if (
    !title.value ||
    !director.value ||
    !genre.selectedIndex ||
    !year.value ||
    !image.value ||
    !description.value
  ) {
    alert("Lütfen formu eksiksiz doldurunuz.");
    return;
  }

  let movie = {
    title: title.value,
    director: director.value,
    genre: genre.value,
    year: year.value,
    image: image.value,
    description: description.value,
  };

  localStorage.setItem(
    "movies",
    JSON.stringify(
      JSON.parse(localStorage.getItem("movies") ?? "[]").concat(movie)
    )
  );

  appendMovie(movie);

  genre.selectedIndex = 0;
  image.value = year.value = director.value = title.value = description.value = "";
}

function deleteMovie(card, title) {
  let array = JSON.parse(localStorage.getItem("movies") ?? "[]");

  array.splice(
    array.findIndex((movie) => movie.title == title),
    1
  );

  localStorage.setItem("movies", JSON.stringify(array));

  card.remove();
}

function setEdit(card) {
  editCard = card;

  title.value = editCard.children[0].children[0].children[1].children[0].textContent;
  director.value = editCard.children[0].children[0].children[1].children[1].textContent;
  genre.value = editCard.children[0].children[0].children[1].children[2].textContent;
  year.value = editCard.children[0].children[0].children[1].children[3].textContent;
  image.value = editCard.children[0].children[0].children[0].src;
  description.value = editCard.children[0].children[1].textContent;

  add.textContent = "Güncelle";

  scrollTo(0, 0);
}

function editMovie() {
  if (
    !title.value ||
    !director.value ||
    !genre.selectedIndex ||
    !year.value ||
    !image.value  ||
    !description.value
  ) {
    alert("Lütfen formu eksiksiz doldurunuz.");
    return;
  }

  let editMovie = {
    title: title.value,
    director: director.value,
    genre: genre.value,
    year: year.value,
    image: image.value,
    description: description.value,
  };

  let array = JSON.parse(localStorage.getItem("movies") ?? "[]");

  array[
    array.findIndex(
      (movie) => movie.title == editCard.children[0].children[0].children[1].children[0].textContent
    )
  ] = editMovie;

  localStorage.setItem("movies", JSON.stringify(array));
  console.log(editCard.children[0].children[1].children[1]);
  editCard.children[0].children[0].children[1].children[0].textContent = editMovie.title;
  editCard.children[0].children[0].children[1].children[1].textContent = editMovie.director;
  editCard.children[0].children[0].children[1].children[2].textContent = editMovie.genre;
  editCard.children[0].children[0].children[1].children[3].textContent = editMovie.year;
  editCard.children[0].children[0].children[0].src = editMovie.image;
  editCard.children[0].children[1].textContent = editMovie.description;
  

  editCard = false;

  genre.selectedIndex = 0;
  image.value = year.value = director.value = title.value = description.value = "";
  add.textContent = "Ekle";
}

function appendMovie(movie) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");
  cardInner.addEventListener("click", function(){
    cardInner.classList.toggle("is-flipped");
  });
  let cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardFront.classList.add("card-face");
  let cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  cardBack.classList.add("card-face");
  let cardDescription = document.createElement("p");
  cardDescription.classList.add("card-text");
  cardDescription.textContent = movie.description;
  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.classList.add("img-fluid");
  cardImage.src = movie.image;
  let body = document.createElement("div");
  body.classList.add("card-body");
  let cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = movie.title;
  let cardDirector = document.createElement("h5");
  cardDirector.textContent = movie.director;
  cardDirector.classList.add("card-text");
  let cardGenre = document.createElement("p");
  cardGenre.textContent = movie.genre;
  cardGenre.classList.add("card-text");
  let cardYear = document.createElement("p");
  cardYear.textContent = movie.year;
  cardYear.classList.add("card-text");
  let buttons = document.createElement("div");
  let editButton = document.createElement("button");
  editButton.classList.add("btn");
  editButton.classList.add("btn-primary");
  editButton.classList.add("me-3");
  editButton.textContent = "Düzenle";
  editButton.addEventListener("click", () => setEdit(card));
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-danger");
  deleteButton.textContent = "Sil";
  deleteButton.addEventListener("click", () => deleteMovie(card, movie.title));
  cardFront.appendChild(cardImage);
  body.appendChild(cardTitle);
  body.appendChild(cardDirector);
  body.appendChild(cardGenre);
  body.appendChild(cardYear);
  buttons.appendChild(editButton);
  buttons.appendChild(deleteButton);
  body.appendChild(buttons);
  cardFront.appendChild(body);
  cardBack.appendChild(cardDescription);
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);
  movies.appendChild(card);
}

// const template = [
//   {
//     title: "Oppenheimer",
//     director: "Christopher Nolan",
//     genre: "Aksiyon",
//     year: "2023",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
//   },
//   {
//     title: "Barbie",
//     director: "Greta Gerwig",
//     genre: "Fantezi",
//     year: "2023",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BYjI3NDU0ZGYtYjA2YS00Y2RlLTgwZDAtYTE2YTM5ZjE1M2JlXkEyXkFqcGc@._V1_.jpg",
//   },
//   {
//     title: "Im Westen Nichts Neues",
//     director: "Edward Berger",
//     genre: "Aksiyon",
//     year: "2022",
//     image:
//       "https://m.media-amazon.com/images/I/91z4mtZG5gL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "Tenet",
//     director: "Christopher Nolan",
//     genre: "Bilim Kurgu",
//     year: "2020",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BMTU0ZjZlYTUtYzIwMC00ZmQzLWEwZTAtZWFhMWIwYjMxY2I3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//   },
//   {
//     title: "Blade Runner 2049",
//     director: "Denis Villeneuve",
//     genre: "Bilim Kurgu",
//     year: "2017",
//     image: "https://m.media-amazon.com/images/I/81+aXKMlwoL._SL1400_.jpg",
//   },
//   {
//     title: "Nightcrawler",
//     director: "Dan Gilroy",
//     genre: "Aksiyon",
//     year: "2014",
//     image:
//       "https://m.media-amazon.com/images/I/61n0tcEYikL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "Predestination",
//     director: "Michael Spierig, Peter Spierig",
//     genre: "Bilim Kurgu",
//     year: "2014",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BY2VhODM5OTUtZDJhMi00MTc5LThjNjYtZWY1M2NlNWU0N2NjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//   },
//   {
//     title: "Good Will Hunting",
//     director: "Gus Van Sant",
//     genre: "Drama",
//     year: "1997",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_.jpg",
//   },
//   {
//     title: "The Departed",
//     director: "Martin Scorsese",
//     genre: "Aksiyon",
//     year: "2006",
//     image:
//       "https://image.tmdb.org/t/p/original/2bK5GhaCXUJAYFC4ZZHPe0lnl3N.jpg",
//   },
//   {
//     title: "Snatch",
//     director: "Guy Ritchie",
//     genre: "Komedi",
//     year: "2000",
//     image:
//       "https://www.arthipo.com/image/cache/catalog/poster/movie/759-1554/pfilm1183-snatch_cc5a6788-film-movie-posters-cinema-kanvas-tablo-canvas-674x1000.webp",
//   },
//   {
//     title: "Se7en",
//     director: "David Fincher",
//     genre: "Aksiyon",
//     year: "1995",
//     image:
//       "https://i.pinimg.com/736x/51/ec/d3/51ecd3a6f72cf21014a5598f14027264.jpg",
//   },
//   {
//     title: "Taxi Driver",
//     director: "Martin Scorsese",
//     genre: "Aksiyon",
//     year: "1976",
//     image: "https://m.media-amazon.com/images/I/910BajnpSTL.jpg",
//   },
//   {
//     title: "The Revenant",
//     director: "Alejandro G. Iñárritu",
//     genre: "Aksiyon",
//     year: "2015",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3rcFp83LoVgHG0qr2dMIzjT6pr0ASkJHMA&s",
//   },
//   {
//     title: "Catch Me If You Can",
//     director: "Steven Spielberg",
//     genre: "Aksiyon",
//     year: "2002",
//     image:
//       "https://m.media-amazon.com/images/I/71c4UezsAFL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     title: "Django Unchained",
//     director: "Quentin Tarantino",
//     genre: "Western",
//     year: "2012",
//     image:
//       "https://ew.com/thmb/K0r_HTo6_hHJG_xBLCebxux_lT4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/django-poster_510-71504b1775e5459c8787e9a31001d867.jpg",
//   },
//   {
//     title: "The Shawshank Redemption",
//     director: "Frank Darabont",
//     genre: "Aksiyon",
//     year: "1994",
//     image: "https://m.media-amazon.com/images/I/71715eBi1sL._AC_SL1000_.jpg",
//   },
//   {
//     title: "American Psycho",
//     director: "Mary Harron",
//     genre: "Aksiyon",
//     year: "2000",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBDiz4S4npGwjhs_PDw9ot9SIiS7rMw8yrXA&s",
//   },
//   {
//     title: "Memento",
//     director: "Christopher Nolan",
//     genre: "Aksiyon",
//     year: "2000",
//     image:
//       "https://m.media-amazon.com/images/I/71I-Ofdz3vL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     title: "Requiem for a Dream",
//     director: "Darren Aronofsky",
//     genre: "Aksiyon",
//     year: "2000",
//     image:
//       "https://m.media-amazon.com/images/M/MV5BN2ZlMjIzZjctYzA2My00ZWYyLWI4ZjctMGI2NWYyNzFiZjAwXkEyXkFqcGc@._V1_.jpg",
//   },
//   {
//     title: "Shutter Island",
//     director: "Martin Scorsese",
//     genre: "Aksiyon",
//     year: "2010",
//     image:
//       "https://m.media-amazon.com/images/S/pv-target-images/e9e06e8df973a8eb8503834bc109ffc68937407224bd204870e7ba829154a668.jpg",
//   },
//   {
//     title: "The Dictator",
//     director: "Larry Charles",
//     genre: "Komedi",
//     year: "2012",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnq15J4eOi33U39s1QcHM0U1LCEp69OVRO9A&s",
//   },
//   {
//     title: "Borat",
//     director: "Larry Charles",
//     genre: "Komedi",
//     year: "2006",
//     image:
//       "https://xonomax.com/cdn/shop/files/603326.jpg?v=1735931046&width=416",
//   },
//   {
//     title: "Eyes Wide Shut",
//     director: "Stanley Kubrick",
//     genre: "Aksiyon",
//     year: "1999",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0bGtTfqZaisvXn8dbbJ5PV97kTtV_Y-VmA&s",
//   },
//   {
//     title: "The Truman Show",
//     director: "Peter Weir",
//     genre: "Komedi",
//     year: "1998",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF3WExFbLGm9AI61VWUBor8XCcIlvcOf6Pbg&s",
//   },
// ];
