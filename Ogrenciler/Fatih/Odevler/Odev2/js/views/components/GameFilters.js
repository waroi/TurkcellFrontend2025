class GameFilters {
  constructor(
    filterCategory,
    filterReleaseDate,
    sortSelect,
    searchInput,
    onFilterChange
  ) {
    this.filterCategory = filterCategory;
    this.filterReleaseDate = filterReleaseDate;
    this.sortSelect = sortSelect;
    this.searchInput = searchInput;
    this.onFilterChange = onFilterChange;

    this.addListeners();
  }

  addListeners() {
    this.filterCategory.addEventListener("change", () => this.applyFilters());
    this.filterReleaseDate.addEventListener("change", () =>
      this.applyFilters()
    );
    this.sortSelect.addEventListener("change", () => this.applyFilters());
    this.searchInput.addEventListener("input", () => this.applyFilters());
  }

  applyFilters() {
    const filters = {
      category: this.filterCategory.value.trim() || null,
      releaseDate: this.filterReleaseDate.value.trim() || null,
      searchQuery: this.searchInput.value.trim() || null,
      sortOption: this.sortSelect.value || null,
    };

    this.onFilterChange(filters);
  }
}

export default GameFilters;
