const movieWrap = document.getElementById("movie-wrap");
const carouselItems = document.getElementById("carousel-items");
class UI {
    clearForm() {
        document.getElementById("movieform").reset();
    }
    showMovies(movies) {
        movieWrap.innerHTML = ''
        movies.forEach((movie, index) => {
            const colDiv = document.createElement("div");
            colDiv.className = "col-lg-3 col-md-4 col-sm-6 mb-5"

            const cardDiv = document.createElement("div");
            cardDiv.className = "card p-3 h-100";

            const img = document.createElement("img");
            img.src = movie.poster;
            img.className = "card-img-top";
            img.alt = `${movie.name} Poster`;

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const title = document.createElement("h5");
            cardBody.className = "card-title h-25 fw-bold";
            title.textContent = movie.name;

            const director = document.createElement("p");
            director.className = "card-text";
            director.textContent = `Yönetmen : ${movie.director}`;

            const year = document.createElement("p");
            year.className = "card-text";
            year.textContent = `Yıl : ${movie.year}`;

            const type = document.createElement("p");
            type.className = "card-text";
            type.textContent = `Tür : ${movie.type}`;

            const buttonDiv = document.createElement("div");
            buttonDiv.className = "d-flex gap-3 p-0 my-3 card-footer";

            const deleteLink = document.createElement('a');
            deleteLink.href = '#';
            deleteLink.className = 'btn btn-delete d-inline-flex';
            deleteLink.onclick = () => removeMovie(index);

            const deleteSpan = document.createElement('span');
            deleteSpan.className = 'text';
            deleteSpan.textContent = 'Sil';

            deleteLink.appendChild(deleteSpan);

            const updateButton = document.createElement('button');
            updateButton.type = 'button';
            updateButton.className = 'btn btn-update';
            updateButton.setAttribute('data-bs-toggle', 'modal');
            updateButton.setAttribute('data-bs-target', '#movieModal');
            updateButton.onclick = () => updateMovie(index);

            const updateSpan = document.createElement('span');
            updateSpan.className = 'text';
            updateSpan.textContent = 'Güncelle';

            updateButton.appendChild(updateSpan);

            buttonDiv.append(updateButton, deleteLink);

            cardBody.append(title, director, year, type);
            cardDiv.append(img, cardBody, buttonDiv);

            colDiv.append(cardDiv);
            movieWrap.appendChild(colDiv);
        });
        this.showSlider(movies)
    }
    showSlider(movies) {
        carouselItems.innerHTML = "";
        let numberOfItemsPerSlide = 4;


        for (let i = 0; i < movies.length; i += numberOfItemsPerSlide) {
            let slideItems = movies.slice(i, i + numberOfItemsPerSlide);

            const carouselItem = document.createElement("div");
            carouselItem.className = `carousel-item ${i === 0 ? 'active' : ''}`;

            const rowDiv = document.createElement("div");
            rowDiv.className = "row";

            slideItems.forEach(movie => {
                const colDiv = document.createElement("div");
                colDiv.className = "col-3";

                const img = document.createElement("img");
                img.src = movie.poster;
                img.className = "d-block w-100";
                img.alt = "Movie poster"

                colDiv.append(img);
                rowDiv.append(colDiv);

                carouselItem.append(rowDiv);
                carouselItems.append(carouselItem);

            });
        }
    }
}