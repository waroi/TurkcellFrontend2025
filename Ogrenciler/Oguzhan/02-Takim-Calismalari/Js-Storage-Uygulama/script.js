const movies = []
document.getElementById("addMovieForm").addEventListener("submit", addMovie);

function addMovie(e) {
    e.preventDefault()
    console.log(e);


    const movieName = document.getElementById('movieName').value
    const director = document.getElementById('director').value
    const year = document.getElementById('year').value
    const description = document.getElementById('description').value
    const isFavourite = document.getElementById('addFavorite').checked
    const movieType = document.getElementById('movieType').value
    const poster = document.getElementById('poster').value


    const movie = {
        movieName,
        director,
        year,
        description,
        isFavourite,
        movieType,
        poster
    }

  
    console.log(poster);
    movies.push(movie)
    localStorage.setItem('movies', JSON.stringify(movies))
    
}

function showMovies(){

    const movies = JSON.parse(localStorage.getItem('movies'))

    console.log(movies);
    const movieList = document.getElementById('movieList')
   
    movies.forEach(movie => {
        const card= document.createElement('div')
        card.className = 'card'
        card.style.width = '18rem'
        movieList.appendChild(card)

        const image= document.createElement('img')
        image.className = 'card-img-top'
        image.src = movie.poster

        const cardBody= document.createElement('div')
        cardBody.className = 'card-body'
        card.appendChild(cardBody)

        const title = document.createElement('h5')
        title.className = 'card-title'
        title.textContent = movie.movieName

        const director = document.createElement('p')
        director.className = 'card-text'
        director.textContent = movie.director

        const year = document.createElement('p')
        year.className = 'card-text'
        year.textContent = movie.year

        const description = document.createElement('p')
        description.className = 'card-text'
        description.textContent = movie.description

        const isFavourite = document.createElement('p')
        isFavourite.className = 'card-text'
        isFavourite.textContent = movie.isFavourite ? 'Favourite' : ''

        const movieType = document.createElement('p')
        movieType.className = 'card-text'
        movieType.textContent = movie.movieType

        cardBody.appendChild(title)
        cardBody.appendChild(director)
        cardBody.appendChild(year)
        cardBody.appendChild(description)
        cardBody.appendChild(isFavourite)
        cardBody.appendChild(movieType)
        cardBody.appendChild(image)
    })
}



showMovies()