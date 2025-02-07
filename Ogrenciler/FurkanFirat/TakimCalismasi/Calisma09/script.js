const movieListContainer = document.querySelector('.movie-list');
const form = document.querySelector('form');
document.addEventListener('DOMContentLoaded', loadMoviesFromLocalStorage);
const movies = [];

function previewMovie() {
  const name = document.querySelector('#movieName').value;
  const director = document.querySelector('#director').value;
  const year = document.querySelector('#year').value;
  const type = document.querySelector('.category').value;
  const image = document.querySelector('#movie-banner').value;

  const previewTitle = document.querySelector(
    '.preview-image-container .card-title'
  );
  const previewDirector = document.querySelector(
    '.preview-image-container .preview-director'
  );
  const previewYear = document.querySelector(
    '.preview-image-container .preview-year'
  );
  const previewCategory = document.querySelector(
    '.preview-image-container .preview-category'
  );
  const previewImage = document.querySelector('.preview-image-container img');

  previewTitle.textContent = name ? name : 'Film adı giriniz.';
  previewDirector.textContent = director
    ? `Yönetmen: ${director}`
    : 'Lütfen yönetmen giriniz.';

  previewYear.textContent = year
    ? `Çıkış tarihi: ${year}`
    : 'Çıkış tarihini giriniz.';

  previewCategory.textContent =
    type !== 'Tür' ? `Tür: ${type}` : 'Film türünü giriniz.';

  if (image) {
    previewImage.src = image;
    previewImage.onerror = () => (previewImage.src = './default-poster.jpg');
  } else {
    previewImage.src = './default-poster.jpg';
  }
}

function renderMovies() {
  movieListContainer.innerHTML = '';

  movies.forEach((movie, index) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('card', 'col-12', 'col-md-3', 'p-0', 'shadow');
    movieCard.style = 'width: 18rem';

    const movieImg = document.createElement('img');
    movieImg.classList.add('card-img-top', 'img-fluid', 'object-fit-cover');
    movieImg.style = 'height: 300px';
    movieImg.src = movie.image;
    movieImg.addEventListener(
      'error',
      () => (movieImg.src = './default-poster.jpg')
    );

    const movieBody = document.createElement('div');
    movieBody.classList.add('card-body');

    const movieName = document.createElement('h5');
    movieName.classList.add('card-title');
    movieName.textContent = movie.name;

    const movieDirector = document.createElement('p');
    movieDirector.classList.add('card-text');
    movieDirector.textContent = `Yönetmen: ${movie.director}`;

    const movieYear = document.createElement('p');
    movieYear.classList.add('card-text');
    movieYear.textContent = `Yıl: ${movie.year}`;

    const movieType = document.createElement('p');
    movieType.classList.add('card-text');
    movieType.textContent = `Tür: ${movie.type}`;

    const movieButtons = document.createElement('div');
    movieButtons.classList.add('d-flex', 'gap-2', 'flex-wrap');

    // DELETE ACTION
    const movieDelete = document.createElement('button');
    movieDelete.classList.add('btn', 'btn-danger');
    movieDelete.innerHTML = '<i class="fa-solid fa-trash"></i>';
    movieDelete.addEventListener('click', () => deleteMovie(index));

    // EDIT ACTION
    const movieEdit = document.createElement('button');
    movieEdit.classList.add('btn', 'btn-warning');
    movieEdit.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    movieEdit.addEventListener('click', () => editMovie(index));

    movieButtons.append(movieEdit, movieDelete);
    movieBody.append(
      movieName,
      movieDirector,
      movieYear,
      movieType,
      movieButtons
    );
    movieCard.append(movieImg, movieBody);
    movieListContainer.appendChild(movieCard);
  });
}
// DELETE FUNC
function deleteMovie(index) {
  movies.splice(index, 1);
  console.log(movies);
  renderMovies();
}

// EDIT FUNC
function editMovie(index) {
  const movie = movies[index];
  document.querySelector('#movieName').value = movie.name;
  document.querySelector('#director').value = movie.director;
  document.querySelector('#year').value = movie.year;
  document.querySelector('.category').value = movie.type;
  document.querySelector('#movie-banner').value = movie.image;

  movies.splice(index, 1);
  renderMovies();
  document.querySelector('#movieName').focus();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#movieName').value;
  const director = document.querySelector('#director').value;
  const year = document.querySelector('#year').value;
  const type = document.querySelector('.category').value;
  const image = document.querySelector('#movie-banner').value;
  console.log(type);

  if (!name || !director || !year || !type || type === 'Tür') {
    return;
  }
  movies.push({ name, director, year, type, image });
  saveMoviesToLocalStorage();
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-success', 'mt-5');
  alert.role = 'alert';
  alert.textContent = 'Film başarıyla eklendi.';
  form.appendChild(alert);
  setTimeout(() => {
    alert.remove();
  }, 3000);
  renderMovies();
  form.reset();
});

form.addEventListener('input', (e) => {
  e.preventDefault();
  previewMovie();
});

function saveMoviesToLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies));
}

function loadMoviesFromLocalStorage() {
  const storedMovies = localStorage.getItem('movies');
  if (storedMovies) {
    movies.push(...JSON.parse(storedMovies));
    renderMovies();
  }
}
