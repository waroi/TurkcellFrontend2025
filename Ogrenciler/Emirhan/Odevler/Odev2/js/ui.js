class UI {
  constructor (api) {
    this.api = api
    this.gameContainer = document.getElementById('gameContainer')
    this.saveGameButton = document.getElementById('saveGame')
    this.newGameModal = document.getElementById('newGameModal')
    this.searchInput = document.getElementById('searchInput')
    this.sortRadios = document.querySelectorAll('input[name="sortOptions"]')

    this.gameId = null
    this.games = []
    this.selectedCategories = new Set()
    this.searchTerm = ''
    this.sortValue = ''

    this.newGameModal.addEventListener('click', () => this.resetForm())
    this.saveGameButton.addEventListener('click', () => this.handleSaveGame())
    this.searchInput.addEventListener('input', event =>
      this.updateSearchTerm(event)
    )

    this.sortRadios.forEach(radio =>
      radio.addEventListener('change', event => this.updateSort(event))
    )

    this.getAllGames()
  }

  async getAllGames () {
    const games = await this.api.getGames()
    this.games = games
    this.renderCategories()
    this.renderGames(this.getSearchedGames())
  }

  renderCategories () {
    const categories = new Set(this.games.map(game => game.category))
    const filterContainer = document.getElementById('filterCollapseFilter')
    filterContainer.innerHTML = ''

    categories.forEach(category => {
      const div = document.createElement('div')
      div.className = 'form-check mt-3'
      div.innerHTML = `
        <input class="form-check-input" type="checkbox" id="${category}">
        <label class="form-check-label fs-6" for="${category}">${category}</label>
      `
      const input = div.querySelector('input')
      input.addEventListener('change', () => this.toggleCategory(category))
      filterContainer.appendChild(div)
    })
  }

  toggleCategory (category) {
    if (this.selectedCategories.has(category)) {
      this.selectedCategories.delete(category)
    } else {
      this.selectedCategories.add(category)
    }
    this.renderGames(this.getSearchedGames())
  }

  updateSearchTerm (event) {
    this.searchTerm = event.target.value.toLowerCase()
    this.renderGames(this.getSearchedGames())
  }

  updateSort (event) {
    if (event.target.checked) {
      switch (event.target.id) {
        case 'oldToNew':
          this.sortValue = 'oldtonew'
          break
        case 'newToOld':
          this.sortValue = 'newtoold'
          break
        case 'AZsort':
          this.sortValue = 'az'
          break
        case 'ZAsort':
          this.sortValue = 'za'
          break
        default:
          this.sortValue = ''
      }
      this.renderGames(this.getSearchedGames())
    }
  }

  resetFilters () {
    this.sortValue = ''
    this.selectedCategories.clear()
    this.searchTerm = ''
    this.searchInput.value = ''

    this.sortRadios.forEach(radio => {
      radio.checked = false
    })

    this.renderGames(this.getSearchedGames())
  }

  getFilteredAndSortedGames () {
    if (!this.games.length) return []

    const filtered = this.games.filter(
      game =>
        this.selectedCategories.size === 0 ||
        this.selectedCategories.has(game.category)
    )

    return this.sortGames(filtered, this.sortValue)
  }

  sortGames (games, sortValue) {
    switch (sortValue) {
      case 'oldtonew':
        return [...games].sort((a, b) => a.year - b.year)
      case 'newtoold':
        return [...games].sort((a, b) => b.year - a.year)
      case 'az':
        return [...games].sort((a, b) => a.name.localeCompare(b.name))
      case 'za':
        return [...games].sort((a, b) => b.name.localeCompare(a.name))
      default:
        return games
    }
  }

  getSearchedGames () {
    const filteredAndSortedGames = this.getFilteredAndSortedGames()
    return filteredAndSortedGames.filter(
      game =>
        this.searchTerm === '' ||
        game.name.toLowerCase().includes(this.searchTerm)
    )
  }

  renderGames (games) {
    this.gameContainer.innerHTML = ''
    games.forEach(game => this.createCard(game))
  }

  createCard (game) {
    const cardDiv = document.createElement('div')
    cardDiv.className =
      'card col-sm-12 col-lg-6 rounded-0 bg-dark border-secondary outline-none border-top-0 border-start-0 text-light p-4'
    cardDiv.id = game.id

    const img = document.createElement('img')
    img.src = game.imageUrl
    img.className = 'card-img-top card-img rounded-0'
    img.alt = game.name
    cardDiv.appendChild(img)

    const cardBody = document.createElement('div')
    cardBody.className =
      'card-body px-0 d-flex justify-content-between align-items-center'

    const textContainer = document.createElement('div')
    textContainer.className = 'w-75'

    const title = document.createElement('h5')
    title.className = 'card-title mb-1 fs-5 fw-semibold'
    title.textContent = game.name

    const description = document.createElement('p')
    description.className = 'card-text mb-0 fs-6'
    description.textContent = game.description

    textContainer.appendChild(title)
    textContainer.appendChild(description)

    const buttonContainer = document.createElement('div')
    buttonContainer.className = 'w-25 d-flex gap-2 justify-content-end'

    const editButton = document.createElement('a')
    editButton.href = '#'
    editButton.className = 'btn btn-primary square-btn text-nowrap text-center'
    editButton.setAttribute('data-bs-toggle', 'modal')
    editButton.setAttribute('data-bs-target', '#exampleModal')
    editButton.addEventListener('click', () => this.updateInput(game))

    const editIcon = document.createElement('i')
    editIcon.className = 'fa-solid fa-pen fs-6'
    editButton.appendChild(editIcon)

    const deleteButton = document.createElement('a')
    deleteButton.href = '#'
    deleteButton.className =
      'btn btn-primary square-btn text-nowrap text-center'
    deleteButton.addEventListener('click', () => this.deleteGame(game.id))

    const deleteIcon = document.createElement('i')
    deleteIcon.className = 'fa-solid fa-trash-can fs-6 text-light'
    deleteButton.appendChild(deleteIcon)

    buttonContainer.appendChild(editButton)
    buttonContainer.appendChild(deleteButton)

    cardBody.appendChild(textContainer)
    cardBody.appendChild(buttonContainer)

    cardDiv.appendChild(cardBody)
    this.gameContainer.appendChild(cardDiv)
  }

  renderGames (games) {
    this.gameContainer.innerHTML = ''
    games.map(game => this.createCard(game))
  }

  async deleteGame (id) {
    await this.api.deleteGame(id)
    document.getElementById(id).remove()
  }

  updateInput (game) {
    document.getElementById('gameNameInput').value = game.name
    document.getElementById('gameCategoryInput').value = game.category
    document.getElementById('gameYearInput').value = game.year
    document.getElementById('gameProducerInput').value = game.producer
    document.getElementById('gameImageInput').value = game.imageUrl
    document.getElementById('gameDescriptionInput').value = game.description

    this.gameId = game.id
    this.saveGameButton.textContent = 'Oyunu Güncelle'
  }

  resetForm () {
    document.getElementById('gameNameInput').value = ''
    document.getElementById('gameCategoryInput').value = ''
    document.getElementById('gameYearInput').value = ''
    document.getElementById('gameProducerInput').value = ''
    document.getElementById('gameImageInput').value = ''
    document.getElementById('gameDescriptionInput').value = ''

    this.gameId = null
    this.saveGameButton.textContent = 'Oyunu Kaydet'
  }

  async handleSaveGame () {
    const game = new Game(
      this.gameId,
      document.getElementById('gameNameInput').value,
      document.getElementById('gameCategoryInput').value,
      document.getElementById('gameYearInput').value,
      document.getElementById('gameProducerInput').value,
      document.getElementById('gameImageInput').value,
      document.getElementById('gameDescriptionInput').value
    )

    if (this.gameId) {
      await this.api.updateGame(this.gameId, game)
    } else {
      console.log(game)
      const newGame = await this.api.addGame(game)
      this.createCard(newGame)
    }

    this.resetForm()
  }
}
