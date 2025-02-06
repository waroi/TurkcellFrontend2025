const previewIMG = document.querySelector(".preview-image");

previewIMG.onerror = () => {
  previewIMG.src =
    "https://github.com/furkan-firat/cinecalm/blob/main/public/defaultPoster.jpg?raw=true";
};

function pushMovie({name, director, year, type, image}) {
  movies.push({name, director, year, type, image});
  console.log(movies)
}

function formCleaner() {
  document.querySelector("#movieName").value = "";
  document.querySelector("#director").value = "";
  document.querySelector("#year").value = "";
  document.querySelector(".category").value = "";
  document.querySelector("#movie-banner").value = "";
}

function addMovie({name, director, year, type, image}) {

  const movieList = document.querySelector(".movie-list");
  movieList.innerHTML = "";
  const movieCard = document.createElement("div");

    movieCard.classList.add("card", "col-12", "col-md-3");

    const movieImg = document.createElement("img");
    movieImg.classList.add("card-img-top", "img-fluid", "h-50");
    movieImg.src =image;

    const movieBody = document.createElement("div");
    movieBody.classList.add("card-body");

    const movieName = document.createElement("h5");
    movieName.classList.add("card-title");
    movieName.textContent = name;

    const movieDirector = document.createElement("p");
    movieDirector.classList.add("card-text");
    movieDirector.textContent = director;

    const movieYear = document.createElement("p");
    movieYear.classList.add("card-text");
    movieYear.textContent = year;

    const movieType = document.createElement("p");
    movieType.classList.add("card-text");
    movieType.textContent = type;

    const movieButtons = document.createElement("div");
    movieButtons.classList.add("d-flex", "gap-2", "flex-wrap");

    const movieDelete = document.createElement("button");
    movieDelete.classList.add("btn", "btn-danger", );
    movieDelete.addEventListener("click", function(e){
      movieCard.remove();
      movies.splice(i,1);
      console.log(e.target);
      console.log(movies)
    });

    const movieEdit = document.createElement("button");
    movieEdit.classList.add("btn", "btn-warning",);

    const iconDelete = document.createElement("i");
    iconDelete.className = "fa-solid fa-trash";

    const iconEdit = document.createElement("i");
    iconEdit.className = "fa-solid fa-pencil";

    movieDelete.appendChild(iconDelete);
    movieEdit.appendChild(iconEdit);
    movieButtons.append(movieEdit, movieDelete);
    movieBody.append(
      movieName,
      movieDirector,
      movieYear,
      movieType,
      movieButtons
    );
    movieCard.append(movieImg, movieBody);
    movieList.appendChild(movieCard);

    pushMovie({name, director, year, type, image})
}

const movies = [{name: "Film1", director: "Director1", year:1999, type:"Bilim Kurgu", image:"https://picsum.photos/200/300" },{name: "Film2", director: "Director2", year:1999, type:"Korku", image:"https://picsum.photos/seed/picsum/200/300" }];

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#movieName").value;
  const director = document.querySelector("#director").value;
  const year = document.querySelector("#year").value;
  const type = document.querySelector(".category").value;
  const image = document.querySelector("#movie-banner").value;

  formCleaner();
  addMovie({name, director, year, type, image});
  console.log("SUBMIT EDİLDİ",{name, director, year, type, image});
});
showMovies();
