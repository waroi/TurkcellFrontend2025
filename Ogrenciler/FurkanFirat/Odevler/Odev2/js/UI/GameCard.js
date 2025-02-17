export default class GameCard {
  static createGameCard(game, editGame, deleteGame, openDetailModal) {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container col-md-4 mb-4';

    const card = document.createElement('div');
    card.classList.add('card', 'game-card', 'h-100');
    card.setAttribute('id', game.id);

    const img = document.createElement('img');

    img.classList.add(
      'card-img-top',
      'game-image',
      'object-fit-cover',
      'img-fluid'
    );
    img.style.cursor = 'pointer';

    img.src = game.images[0];
    img.alt = game.name;
    img.onerror = () =>
      (img.src =
        'https://e1.pxfuel.com/desktop-wallpaper/869/163/desktop-wallpaper-1440x900-gaming-controller-minimal-dark-1440x900-resolution-backgrounds-and.jpg');
    img.addEventListener('click', () => openDetailModal(game));

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'flex-column');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = game.name;
    title.style.cursor = 'pointer';
    title.style.display = '-webkit-box';
    title.style.webkitLineClamp = 3;
    title.style.webkitBoxOrient = 'vertical';
    title.style.overflow = 'hidden';
    title.addEventListener('click', () => openDetailModal(game));

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = game.description;
    description.style.display = '-webkit-box';
    description.style.webkitLineClamp = 3;
    description.style.webkitBoxOrient = 'vertical';
    description.style.overflow = 'hidden';

    const badgeContainer = document.createElement('div');
    badgeContainer.classList.add('mt-2', 'd-flex', 'justify-content-between');

    const categoryBadge = document.createElement('span');
    categoryBadge.classList.add('badge', 'bg-primary');
    categoryBadge.textContent = game.category;

    const releaseDateBadge = document.createElement('span');
    releaseDateBadge.classList.add('badge', 'bg-secondary');
    releaseDateBadge.textContent = game.releaseDate;

    const developerInfo = document.createElement('div');
    developerInfo.classList.add('mt-3', 'mb-3');

    const developerText = document.createElement('small');
    developerText.classList.add('text-muted');
    developerText.textContent = `Developer: ${game.developer}`;

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('btn-group', 'mt-auto');

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn', 'btn-outline-success');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => editGame(game));

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-outline-danger');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteGame(game.id));

    const steamLink = document.createElement('a');
    steamLink.classList.add('btn', 'btn-outline-primary');
    steamLink.href = game.steamUrl;
    steamLink.target = '_blank';
    const steamIcon = document.createElement('i');
    steamIcon.classList.add('bi', 'bi-steam');
    steamLink.append(steamIcon);

    badgeContainer.append(categoryBadge, releaseDateBadge);
    developerInfo.appendChild(developerText);
    btnGroup.append(editBtn, deleteBtn, steamLink);

    cardBody.append(
      title,
      description,
      badgeContainer,
      developerInfo,
      btnGroup
    );
    card.append(img, cardBody);
    cardContainer.appendChild(card);

    return cardContainer;
  }
}
