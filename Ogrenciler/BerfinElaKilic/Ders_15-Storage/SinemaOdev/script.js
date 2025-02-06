let movies = JSON.parse(localStorage.getItem("movieArray")) || [];
let movieArray = [... movies];
let movieName = document.getElementById("movie-name");
let movieYear = document.getElementById("movie-year");
let movieDirector = document.getElementById("movie-director");
let movieImg = document.getElementById("movie-img");
let movieCategory = document.getElementById("movie-category");
let addButton = document.getElementById("add-btn");

movies.map((m)=>createCard(m));
function createCard(m){
    let cardSection = document.getElementById("card-section");
    let card = document.createElement("div");
    card.className="card col-xl-3 col-lg-4 col-md-6 col-12 border-0 p-3";
    let movieImg = document.createElement("img");
    movieImg.className="card-img-top";
    movieImg.setAttribute("src", m.movieImg)
    let cBody = document.createElement("div");
    cBody.className = "card-body";
    let badge = document.createElement("span");
    badge.className = "badge text-bg-dark p-3";
    let category = document.getElementById(m.movieCategory);
    badge.textContent = category.innerText;
    let title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = m.movieName;
    let year = document.createElement("h6");
    year.className = "card-year";
    year.textContent = m.movieYear;
    let director = document.createElement("h6");
    director.className = "card-director";
    director.textContent = m.movieDirector;
    let buttons = document.createElement("div");
    buttons.className = "d-flex justify-content-between mt-3";
    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger w-45";
    deleteButton.id="delete-btn";
    deleteButton.textContent="Sil";
    deleteButton.addEventListener("click", () => deleteFunction(m.movieId, deleteButton));
    let updateButton = document.createElement("button");
    updateButton.className = "btn btn-success w-45";
    updateButton.textContent="Güncelle";
    cardSection.appendChild(card);
    card.appendChild(movieImg);
    card.appendChild(cBody);
    cBody.appendChild(badge);
    cBody.appendChild(title);
    cBody.appendChild(year);
    cBody.appendChild(director);
    cBody.appendChild(buttons);
    buttons.appendChild(deleteButton);
    buttons.appendChild(updateButton);
}
function addFunction(){
    let movie = {
        movieId: movieArray.length,
        movieName: movieName.value,
        movieYear: movieYear.value,
        movieDirector: movieDirector.value,
        movieImg: movieImg.value,
        movieCategory: movieCategory.value,
    }
    movieArray.push(movie);
    localStorage.setItem("movieArray", JSON.stringify(movieArray));
    movieName.value="";
    movieYear.value="";
    movieDirector.value="";
    movieImg.value="";
    movieCategory.value=0;
    createCard(movie);
}
function deleteFunction(id, button){
    let newMovieArray = movieArray.filter(m => m.movieId !== id);
    localStorage.setItem("movieArray", JSON.stringify(newMovieArray));
    button.parentElement.parentElement.parentElement.remove();
}
addButton.addEventListener("click", addFunction);


